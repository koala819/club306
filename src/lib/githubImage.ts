import axios from 'axios';

async function uploadImageToGitHub(imageUrl: string) {
  const githubToken = process.env.GITHUB_TOKEN;
  const path = 'good.jpg';
  const apiUrl = `https://api.github.com/repos/koala819/Unlimitd_front/contents/${path}`;

  try {
    // Fetch the image using the provided URL
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const blob = await response.blob();

    const reader = new FileReader();

    // Define a Promise to handle the FileReader load event
    const readerPromise = new Promise<string>((resolve, reject) => {
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const uint8Array = new Uint8Array(arrayBuffer);
        const byteArray = Array.from(uint8Array);
        const base64Image = btoa(String.fromCharCode(...byteArray));
        resolve(base64Image);
      };

      // Handle FileReader errors
      reader.onerror = () => {
        reject(new Error('Error reading image file.'));
      };
    });

    // Start reading the blob as an ArrayBuffer
    reader.readAsArrayBuffer(blob);

    const base64Image = await readerPromise; // Wait for the reader to finish

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

async function deleteImageFromGitHub(apiUrl: string) {
  const githubToken = process.env.GITHUB_TOKEN;
  // const apiUrl = `https://api.github.com/repos/koala819/Unlimitd_front/contents/${imagePath}`;
  console.log('apiUrl', apiUrl);
  try {
    const responseAxiosDelete = await axios.delete(apiUrl, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });

    if (responseAxiosDelete.status === 204) {
      return new Response('Image deleted from GitHub', {
        status: 200,
        statusText: 'Image deleted from GitHub with success',
      });
    } else {
      throw new Error('Failed to delete image from GitHub');
    }
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 405,
      statusText: 'Error deleting image from GitHub',
    });
  }
}

export { deleteImageFromGitHub, uploadImageToGitHub };
