import axios from 'axios'
import { execSync } from 'child_process'

const user = 'tlyboy'

const { data } = await axios.get(`https://api.github.com/users/${user}/repos`)

if (data) {
  const res = data.map(element => {
    return element.ssh_url
  })

  res.forEach(element => {
    execSync(`git clone ${element}`)
  })
}
