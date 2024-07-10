
async function getProfile(accessToken) {
    let accessToken: string|null = localStorage.getItem('access_token');

    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: 'Bearer ' + accessToken
        }
    });

    const data: string|null = await response.json();
}

export default getProfile;