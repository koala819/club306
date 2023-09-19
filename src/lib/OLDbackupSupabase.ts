'use server';
const { createClient } = require('@supabase/supabase-js');
const { google } = require('googleapis');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
);

const clientId = process.env.GCP_CLIENT_ID;
const clientSecret = process.env.GCP_CLIENT_SECRET;
const refreshToken = process.env.GCP_REFRESH_TOKEN;
const folderId = process.env.DRIVE_FOLDER_ID;

async function backupTable(tableName: string) {
  try {
    const { data, error } = await supabase.from(tableName).select('*');

    if (!error) {
      const jsonData = JSON.stringify(data);

      const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
      oauth2Client.setCredentials({ refresh_token: refreshToken });
      const drive = google.drive({ version: 'v3', auth: oauth2Client });

      const fileMetadata = {
        name: `${tableName}_backup.json`,
        parents: [folderId], // Specify the folder where you want to save the file
      };

      const media = {
        mimeType: 'application/json',
        body: jsonData,
      };
      try {
        const { data, error } = await drive.files.create({
          resource: fileMetadata,
          media: media,
        });
        if (!error) {
          return {
            success: true,
            message: 'File successfully created in Google Drive',
          };
        }
        return {
          success: false,
          message: 'Error creating file in Google Drive',
          error: {
            message: error.message,
          },
        };
      } catch (error: any) {
        return {
          success: false,
          statusText: 'Error to record in Google Drive',
          error: {
            message: error.message,
          },
        };
      }
    }
    return {
      success: false,
      statusText: 'Error make a db dump',
      error: {
        message: error.message,
      },
    };
  } catch (error: any) {
    return {
      success: false,
      statusText: 'Error with supabase request',
      error: {
        message: error.message,
      },
    };
  }
}

async function listFilesInFolder() {
  try {
    const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
    oauth2Client.setCredentials({ refresh_token: refreshToken });
    const drive = google.drive({ version: 'v3', auth: oauth2Client });

    const fileList = await drive.files.list({
      q: `'${folderId}' in parents and trashed=false`,
      fields: 'files(id, name, createdTime)',
    });

    const files = fileList.data.files;

    return files;
  } catch (error) {
    console.error('Erreur lors de la récupération des fichiers :', error);
    return [];
  }
}

export { backupTable, listFilesInFolder };
