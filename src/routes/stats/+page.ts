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
    // console.log('tracks')
    // console.log(tracks)

    console.log('track artists')
    tracks.items.forEach((song) => {
        console.log(song.name);
        song.artists.forEach((artist) => {
            console.log(` - ${artist.name}`)
        });
    });
    //console.log(tracks.items[0].artists[0].name)
    return {
        user,
        tracks
    };
}