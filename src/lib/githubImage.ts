import 'server-only'

import axios from 'axios'
import { Octokit } from '@octokit/core'

const GITHUB_REPO = 'koala819/Unlimitd_front'

function parseGithubRawUrl(githubUrl: string) {
  const parts = githubUrl.split('/')
  return {
    owner: parts[3],
    repo: parts[4],
    path: parts[6],
  }
}

async function uploadImageToGitHub(base64Image: string, path: string) {
  const githubToken = process.env.GITHUB_TOKEN
  const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`

  try {
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
      },
    )

    return new Response(JSON.stringify(responseAxiosPut.data), {
      status: 200,
      statusText: 'Great Job !!! Picture uploaded to GitHub with success :)',
    })
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 405,
      statusText: 'Error uploading image to GitHub',
    })
  }
}

async function deletePictureFromGitHub(githubUrl: string) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  })

  const { owner, repo, path } = parseGithubRawUrl(githubUrl)
  const githubContentURL = `/repos/${owner}/${repo}/contents/${path}`

  try {
    const { data: fileDetails } = await octokit.request(
      `GET ${githubContentURL}`,
    )

    const { data } = await octokit.request(`DELETE ${githubContentURL}`, {
      owner,
      repo,
      path,
      message: 'Delete partner image',
      sha: fileDetails.sha,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })

    return new Response(JSON.stringify(data), {
      status: 200,
      statusText: 'Picture deleted from GitHub with success',
    })
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 405,
      statusText: 'Error with octokit request',
    })
  }
}

export { deletePictureFromGitHub, uploadImageToGitHub }
