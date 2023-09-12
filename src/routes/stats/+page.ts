import type { PageLoad } from './$types';
// faster branch
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

    const short_response = await fetch(`https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const short_term = await short_response.json();

    const medium_response = await fetch(`https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=medium_term`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const medium_term = await medium_response.json();

    const long_response = await fetch(`https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=long_term`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const long_term = await long_response.json();

    return {
        user,
        short_term,
        medium_term,
        long_term
    };
}