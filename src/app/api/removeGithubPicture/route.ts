import axios from 'axios';
const { Octokit } = require('@octokit/core');

// export async function POST(apiUrl: string) {
export async function POST(req: Request) {
  const githubToken = process.env.GITHUB_TOKEN;
  try {
    if (!req.body)
      return new Response(JSON.stringify("Don't have form data...!"), {
        status: 403,
        statusText: "Don't have form data...!",
      });

    const apiUrl = await req.json();
    console.log('apiUrl', apiUrl);

    const octokit = new Octokit({
      auth: githubToken,
    });

    // const responseAxiosDelete = await octokit.request(`DELETE ${apiUrl}`, {
    const responseAxiosDelete = await octokit.request(
      'DELETE /repos/koala819/Unlimitd_front/contents/good.jpg',
      {
        owner: 'OWNER',
        repo: 'REPO',
        path: 'PATH',
        message: 'my commit message',
        committer: {
          name: 'Monalisa Octocat',
          email: 'octocat@github.com',
        },
        sha: '329688480d39049927147c162b9d2deaf885005f',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );

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
