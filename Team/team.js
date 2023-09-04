const ownerName = "aniketsinha2002"; // Replace with the owner's GitHub username
const repoName = "DataScienceWebsite.github.io"; // Replace with the name of the GitHub repository

// Construct the API URL to get the list of contributors
const apiUrl = `https://api.github.com/repos/${ownerName}/${repoName}/contributors`;

// Function to get the number of commits for a specific contributor
async function getContributorCommits(username) {
  const commitsUrl = `https://api.github.com/repos/${ownerName}/${repoName}/commits?author=${username}`;
  const response = await fetch(commitsUrl);
  const commits = await response.json();
  return commits.length;
}

// Fetch contributors using the GitHub API
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(async (contributors) => {
    // Render the contributors
    console.log(contributors);
    const contributorsContainer = document.getElementById(
      "contributorsContainer"
    );
    for (const contributor of contributors) {
      const isOwner = contributor.login === "aniketsinha2002";
      const isContributorXYZ = contributor.login === "XYZ";
      const contributorTitle = isOwner
        ? "Project Admin"
        : isContributorXYZ
        ? ""
        : "Contributor";

      // Get the number of commits for this contributor
      const numCommits = await getContributorCommits(contributor.login);
      const gitHubLogo = "https://cdn-icons-png.flaticon.com/512/25/25231.png";
      const contributorHTML = `
        <div class="mb-6 max-w-[200px] p-2">
          <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="relative overflow-hidden bg-cover bg-no-repeat object-contain">
              <a href="${contributor.html_url}">
                <img src="${contributor.avatar_url}" class=" rounded-t-lg" />
                <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
              </a>
            </div>
            <div class="p-6 flex flex-col justify-between h-full items-center gap-2 ">
             <a href="${contributor.html_url}"
              > 
                <img src="${gitHubLogo}" class="logo-img"/> 
             </a>
              <div>
                <h3 class="mb-4 text-lg font-bold" style="color: #000;">${
                  contributor.login
                }</h3>
                <!-- Add the Contributor tag to everyone except for XYZ -->
                ${
                  isContributorXYZ
                    ? ""
                    : '<span class="contributor-tag">' +
                      contributorTitle +
                      "</span> "
                }
                
               
                <p class="text-md mt-2 text-black ">${numCommits} commits</p>
               
              </div>
            </div>
          </div>
        </div>
      `;
      contributorsContainer.innerHTML += contributorHTML;
    }
  })
  .catch((error) => {
    console.error("Error fetching contributors:", error);
  });
