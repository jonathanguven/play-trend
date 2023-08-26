import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, url }) => {
    const token = url.searchParams.get('access_token')
    if (!token) {
        return {};
    }
    const dataResponse = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const user = await dataResponse.json();

    const top_tracks_response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=20', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const top_tracks = await top_tracks_response.json();
    console.log(user)
    console.log(top_tracks)
    return {
        user,
        top_tracks
    };
}