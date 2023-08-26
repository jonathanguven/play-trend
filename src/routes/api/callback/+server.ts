import type { RequestHandler } from '@sveltejs/kit';
import fetch from 'node-fetch';

const id = import.meta.env.VITE_CLIENT_ID;
const secret = import.meta.env.VITE_CLIENT_SECRET;
const redirect = import.meta.env.VITE_REDIRECT_URI;

export const GET: RequestHandler = async (request) => {
    const code = request.url.searchParams.get('code');
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new Response('Redirect', {
        status: 303,
        headers: {
            'content-type': 'application/json',
            Location: `/`,
        },
        body: tokenData
    });

}




