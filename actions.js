import axios from 'axios'
import { execaCommandSync } from 'execa'

export default {
  async gitCloneAll(user) {
    const { data } = await axios.get(`https://api.github.com/users/${user}/repos`)

    if (data) {
      const res = data.map(element => {
        return element.ssh_url
      })

      res.forEach(element => {
        execaCommandSync(`git clone ${element}`, { stdio: 'inherit' })
      })
    }
  }
}
