import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import fetch from 'node-fetch';
import querystring from 'querystring';

const id = import.meta.env.VITE_CLIENT_ID;
const secret = import.meta.env.VITE_CLIENT_SECRET;
const redirect = import.meta.env.VITE_REDIRECT_URI;

export const GET: RequestHandler = async (request) => {
    const code = request.url.searchParams.get('code');
    if (!code) {
        return {
            status: 400,
            body: 'Error: No code found'
        };
    }
    return json(code);
}