
  const ownerName = 'aniketsinha2002'; // Replace with the owner's GitHub username
  const repoName = 'DataScienceWebsite.github.io'; // Replace with the name of the GitHub repository

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
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(async (contributors) => {
      // Render the contributors
      const contributorsContainer = document.getElementById('contributorsContainer');
      for (const contributor of contributors) {
        const isOwner = contributor.login === 'aniketsinha2002';
        const isContributorXYZ = contributor.login === 'XYZ';
        const contributorTitle = isOwner ? 'Project Admin' : isContributorXYZ ? '' : 'Contributor';

        // Get the number of commits for this contributor
        const numCommits = await getContributorCommits(contributor.login);

        const contributorHTML = `
          <div class="mb-6 lg:mb-0">
            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="relative overflow-hidden bg-cover bg-no-repeat">
                <img src="${contributor.avatar_url}" class="w-full rounded-t-lg rounded-b-lg transition-transform duration-300 transform hover:scale-110" />
                <a href="${contributor.html_url}">
                  <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                </a>
                <svg class="absolute text-white dark:text-neutral-700 left-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="currentColor" d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
              </div>
              <div class="p-6">
                <h3 class="mb-4 text-lg font-bold" style="color: #000;">${contributor.login}</h3>
                <!-- Add the Contributor tag to everyone except for XYZ -->
                ${isContributorXYZ ? '' : '<span class="contributor-tag">' + contributorTitle + '</span>'}
                <p class="text-sm mt-2">${numCommits} commits</p>
              </div>
            </div>
          </div>
        `;
        contributorsContainer.innerHTML += contributorHTML;
      }
    })
    .catch((error) => {
      console.error('Error fetching contributors:', error);
    });

