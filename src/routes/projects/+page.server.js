let lastTime;
let cachedRepos;

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {

    if (cachedRepos) if ((Date.now()-lastTime) < 24*60*60*1000) return {repos: cachedRepos};

    console.log("Querying for any github updates...")

    const searchResults = (await (await fetch("https://api.github.com/search/code?q=user:Gagezilla+path:/+filename:showcase.png")).json()).items
    const repos = searchResults.map(result => {
        let repo = result.repository
        let name = repo.name.split("-").map(c => c[0].toUpperCase()+c.substr(1)).join(" ")
        let desc = repo.description
        let img = "https://raw.githubusercontent.com/Gagezilla/" + repo.name + "/main/showcase.png"
        return {name, desc, img, url: repo.html_url}
    })

    lastTime = Date.now()
    cachedRepos = repos

    return {
        repos
    }
}