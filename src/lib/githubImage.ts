import axios from 'axios';
const { Octokit } = require('@octokit/core');

async function uploadImageToGitHub(imageUrl: string, path: string) {
  const githubToken = process.env.GITHUB_TOKEN;
  const apiUrl = `https://api.github.com/repos/koala819/Unlimitd_front/contents/${path}`;

  try {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const blob = await response.blob();

    const reader = new FileReader();

    const readerPromise = new Promise<string>((resolve, reject) => {
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const uint8Array = new Uint8Array(arrayBuffer);
        const byteArray = Array.from(uint8Array);
        const base64Image = btoa(String.fromCharCode(...byteArray));
        resolve(base64Image);
      };

      reader.onerror = () => {
        reject(new Error('Error reading image file.'));
      };
    });

    reader.readAsArrayBuffer(blob);

    const base64Image = await readerPromise;

    const responseAxiosPut = await axios.put(
      apiUrl,
      {
        message: 'Adding a new image',
        content: base64Image,
        encoding: 'base64',
      },
      {
        headers: {
          Authorization: `token ${githubToken}`,
        },
      }
    );

    return new Response(JSON.stringify(responseAxiosPut.data), {
      status: 200,
      statusText: 'Great Job !!! Picture uploaded to GitHub with success :)',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 405,
      statusText: 'Error uploading image to GitHub',
    });
  }
}

async function deletePictureFromGitHub(githubUrl: string) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });
  const parts = githubUrl.split('/');
  const username = parts[3];
  const repository = parts[4];
  const filePath = parts[6];
  const githubContentURL = `/repos/${username}/${repository}/contents/${filePath}`;

  try {
    const { data, error } = await octokit.request(`GET ${githubContentURL}`);

    const fileDetails = data;
    const blobSHA = fileDetails.sha;

    if (!error) {
      try {
        const { data, error } = await octokit.request(
          `DELETE ${githubContentURL}`,

          {
            owner: 'OWNER',
            repo: 'REPO',
            path: 'PATH',
            message: 'my commit message',
            committer: {
              name: 'Monalisa Octocat',
              email: 'octocat@github.com',
            },
            sha: blobSHA,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28',
            },
          }
        );

        if (!error) {
          return new Response(JSON.stringify(data), {
            status: 200,
            statusText: 'Picture deleted from GitHub with success',
          });
        }

        return new Response(JSON.stringify(error.message), {
          status: 405,
          statusText: 'Error to delete picture from GitHub',
        });
      } catch (error) {
        return new Response(JSON.stringify(error), {
          status: 405,
          statusText: 'Error deleting image from GitHub',
        });
      }
    }
    return new Response(JSON.stringify(error.message), {
      status: 405,
      statusText: 'Error to retrieve image from GitHub',
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 405,
      statusText: 'Error with octokit request',
    });
  }
}

export { deletePictureFromGitHub, uploadImageToGitHub };
