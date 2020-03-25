const listRepos = async username => {
  const endpoint = `https://api.github.com/users/${username}/repos?type=owner&sort=updated`

  try {
    const repos = await fetch(endpoint)
    const json = await repos.json()

    console.log(json)
    
  } catch (error) {
    console.error(error)
  }
}

listRepos("byelipk")