import cookie from 'cookie'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function handle({request, resolve}) {
    const cookies = cookie.parse(request.headers.cookie || '')

    const response = await resolve(request)

    return response
}