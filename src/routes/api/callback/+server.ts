import type { RequestHandler } from '@sveltejs/kit';
import fetch from 'node-fetch';
import { env } from '$env/dynamic/private';

const id = env.CLIENT_ID;
const secret = env.CLIENT_SECRET;
const redirect = env.REDIRECT_URI;

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
    console.log(tokenData);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new Response(accessToken, {
        headers: {
            Location: `/?access_token=${accessToken}`,
            'content-type': 'application/json',
        },
        status: 302,
    });
}




