# Playtrend: Your Spotify Playback Spotlight 🎵
Curious about which songs you've listened to the most? Dive in to see your top 10 most played tracks.

By leveraging Spotify's robust OAuth authentication, Playtrend offers a seamless and secure experience, allowing you to tap into your musical insights in just a few clicks.

Built with Sveltekit for fast, dynamic user experience.

## Local Setup

To setup this project on your own machine, clone this repository and navigate into the working directory:

```bash
# clone github project
git clone https://github.com/jonathanguven/play-trend.git

# navigate into project directory
cd play-trend
```
Once youre inside the project directory, install the project dependencies with `pnpm install`:
```bash
pnpm install
# make sure you have pnpm installed
```

Now to set up your Spotify Developer app!

You will need to register your own app and get your credentials from the Spotify Developers Dashboard. 

To do so, go to [your Spotify for Developers Dashboard](https://beta.developer.spotify.com/dashboard) and create your application. Then, head into your app settings and register these Redirect URIs:

- http://localhost:5173/api/callback

Click save, and you're ready to run your project!

## Starting project
To run your project on a local server, run the following command:
```bash
npm run dev
# or npm run dev -- --open to directly open server in your default browser
```
Feedback and contributions welcome!
