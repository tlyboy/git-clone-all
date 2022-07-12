import axios from 'axios'
import { execaCommandSync } from 'execa'

async function gitCloneAll(username) {
  const { data: repos } = await axios.get(`https://api.github.com/users/${username}/repos`)

  if (repos) {
    const sshUrls = repos.map(repo => {
      return repo.ssh_url
    })

    sshUrls.forEach(sshUrl => {
      execaCommandSync(`git clone ${sshUrl}`, { stdio: 'inherit' })
    })
  }
}

export { gitCloneAll }
