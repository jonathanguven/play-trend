import type { RequestHandler } from '@sveltejs/kit';
import fetch from 'node-fetch';

const id = import.meta.env.VITE_CLIENT_ID;
const secret = import.meta.env.VITE_CLIENT_SECRET;
const redirect = import.meta.env.VITE_REDIRECT_URI;

export const GET: RequestHandler = async ({url}) => {
    const code = url.searchParams.get('code');
    if (!code) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return new Response({
            status: 400,
            body: 'Error: No code found'
        });
    }
    const token_url = 'https://accounts.spotify.com/api/token';
    const body = new URLSearchParams({
        client_id: id,
        client_secret: secret,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirect
    })
    const response = await fetch(token_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    });
    const tokenData = await response.json();

    if (tokenData.error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return new Response({
            status: 400,
            body: tokenData.error_description
        });
    }
    const accessToken = tokenData.access_token;

    const dataResponse = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    const user = await dataResponse.json();

    const top_tracks_response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=20', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    const top_tracks = await top_tracks_response.body;

    console.log({
        user,
        top_tracks
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new Response(top_tracks, {
        headers: {
            Location: `/?user=${user.display_name}`,
            'content-type': 'application/json',
        },
        status: 302,
    });
}




