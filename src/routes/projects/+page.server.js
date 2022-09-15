let lastTime;
let cachedRepos;

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {

    if (cachedRepos) if ((Date.now()-lastTime) < 24*60*60*1000) return {repos: cachedRepos};

    console.log("Querying for any github updates...")

    const allRepos = (await (await fetch("https://api.github.com/search/repositories?q=user:Gagezilla+topic:showcase")).json()).items
    const repos = allRepos.map(repo => {
        if (repo.topics.includes("showcase")) {
            let name = repo.name.split("-").map(c => c[0].toUpperCase()+c.substr(1)).join(" ")
            let desc = repo.description
            let img = "https://raw.githubusercontent.com/Gagezilla/" + repo.name + "/" + repo.default_branch + "/showcase.png"
            return {name, desc, img}
        }
    }).filter(repo => repo)

    lastTime = Date.now()
    cachedRepos = repos

    return {
        repos
    }
}