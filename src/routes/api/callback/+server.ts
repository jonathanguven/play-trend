import type { RequestHandler } from '@sveltejs/kit';
import fetch from 'node-fetch';
import { env } from '$env/dynamic/private';

const id = env.CLIENT_ID;
const secret = env.CLIENT_SECRET;
const redirect = env.REDIRECT_URI;

export const GET: RequestHandler = async ({url}) => {
    if (url.searchParams.get('error')) {
        return new Response(null, {
            headers: {
                Location: `/`,
            },
            status: 302,
        }); 
    }

    const code = url.searchParams.get('code');
    if (!code) {
        return new Response('Error: No code found', {
            status: 400
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
    const tokenData: any = await response.json();

    if (tokenData.error) {
        return new Response(tokenData.error_description, {
            status: 400
        });
    }
    const accessToken = tokenData.access_token;

    return new Response(accessToken, {
        headers: {
            Location: `/stats?access_token=${accessToken}`,
            'content-type': 'application/json',
        },
        status: 302,
    });
}




