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

    const top_tracks_response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=10', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const tracks = await top_tracks_response.json();

    console.log('user')
    console.log(user)
    console.log('track artists')
    tracks.items.forEach((song, i) => {
        console.log(`${i+1}. ${song.name}`);
        song.artists.forEach((artist) => {
            console.log(` - ${artist.name}`)
        });
    });

    return {
        user,
        tracks
    };
}