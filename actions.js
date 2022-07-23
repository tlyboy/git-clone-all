import axios from 'axios'
import { execaCommandSync } from 'execa'

axios.defaults.baseURL = 'https://api.github.com/'

export async function gitCloneAll(username) {
  const { data: repos } = await axios.get(`users/${username}/repos`)

  if (repos) {
    const sshUrls = repos.map(repo => {
      return repo.ssh_url
    })

    sshUrls.forEach(sshUrl => {
      execaCommandSync(`git clone ${sshUrl}`, { stdio: 'inherit' })
      console.log('')
    })
  }
}
