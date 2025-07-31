
const form = document.getElementById('search-form');
const input = document.getElementById('username');
const container = document.getElementById('user-container');
const loadedUsers = new Set(); // to prevent duplicates

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userName = input.value.trim();

    if (!userName) return;
    if (loadedUsers.has(userName.toLowerCase())) {
        alert("This user is already loaded.");
        input.value = '';
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        if (!response.ok) throw new Error("User not found");

        const userData = await response.json();
        loadedUsers.add(userName.toLowerCase());

        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
            <img src="${userData.avatar_url}" alt="Avatar">
            <h2>${userData.name || userData.login}</h2>
            <p><strong>Bio:</strong> ${userData.bio || 'N/A'}</p>
            <p><strong>Location:</strong> ${userData.location || 'N/A'}</p>
            <p><strong>Followers:</strong> ${userData.followers}</p>
            <p><strong>Public Repos:</strong> ${userData.public_repos}</p>
            <p><a href="${userData.html_url}" target="_blank">GitHub Profile</a></p>
        `;
        container.appendChild(card);
        input.value = '';

    } catch (error) {
        alert("❌ " + error.message);
    }
});











// async function getGitHubUserInfo(userName) {
//     const container = document.getElementById('user-container');
//     container.innerHTML = ""; // clear previous

//     try {
//         const response = await fetch(`https://api.github.com/users/${userName}`);

//         if (!response.ok) {
//             throw new Error(`User "${userName}" not found`);
//         }

//         const userData = await response.json();

//         // Create card element
//         const card = document.createElement('div');
//         card.className = 'user-card';

//         // Populate card with user data
//         card.innerHTML = `
//             <img src="${userData.avatar_url}" alt="Avatar of ${userData.login}">
//             <h2>${userData.name || userData.login}</h2>
//             <p><strong>Bio:</strong> ${userData.bio || 'N/A'}</p>
//             <p><strong>Company:</strong> ${userData.company || 'N/A'}</p>
//             <p><strong>Location:</strong> ${userData.location || 'N/A'}</p>
//             <p><strong>Followers:</strong> ${userData.followers}</p>
//             <p><strong>Following:</strong> ${userData.following}</p>
//             <p><strong>Public Repos:</strong> ${userData.public_repos}</p>
//             <p><a href="${userData.html_url}" target="_blank">View GitHub Profile</a></p>
//         `;

//         container.appendChild(card);

//     } catch (error) {
//         container.innerHTML = `<p style="color: red;">❌ ${error.message}</p>`;
//     }
// }

// // Call the function with a GitHub username
// getGitHubUserInfo("Maksof-waqarahmed");

