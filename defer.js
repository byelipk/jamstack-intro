document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is loaded");
});

const renderMarkup = (repos = []) => {
  console.log(`Rendering markup...`)

  const markup = repos
    .map(repo =>
      `
      <li>
        <a href="${repo.html_url}">${repo.name}</a>
        (✨ ${repo.stargazers_count})
      </li>
    `.trim()
    )
    .join("");

  const content = document.querySelector("#content");

  content.innerHTML = `<ul>${markup}</ul>`;
};

const listRepos = async username => {
  console.log(`Fetching repos for: ${username}`)

  const endpoint = `https://api.github.com/users/${username}/repos?type=owner&sort=updated`;

  try {
    const repos = await fetch(endpoint);
    const json = await repos.json();

    renderMarkup(json);
  } catch (error) {
    console.error(error);
  }
};

listRepos("byelipk");

const sayHello = async () => {
  try {
    const repos = await fetch("/api/hello");
    const response = await repos.text();

    alert(response)
  } catch (error) {
    console.error(error);
  } 
}

sayHello()
