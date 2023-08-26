import type { RequestHandler } from '@sveltejs/kit';
import {goto} from "$app/navigation";

const id = import.meta.env.VITE_CLIENT_ID;
const redirect = import.meta.env.VITE_REDIRECT_URI;

export const GET: RequestHandler = async () => {
    const sessionID = '1234'
    const scope = 'user-read-private user-read-email user-top-read user-read-recently-played';
    const args = new URLSearchParams({
        response_type: 'code',
        client_id: id,
        scope: scope,
        redirect_uri: redirect,
        state: sessionID,
        show_dialog: true
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new Response(null, {
        status: 302,
        headers: {
            location: `https://accounts.spotify.com/authorize?` + args,
        }
    })
}