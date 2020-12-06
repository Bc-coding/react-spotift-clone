export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectURL = "http://localhost:3000/";

const clientID = process.env.REACT_APP_ACCESS_KEY;

const scopes = [
  "user-read-private",
  "user-read-email",
  "user-read-recently-played",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-follow-modify",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginURL = `${authEndpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectURL}&scope=${scopes.join(
  "%20"
)}&show_dialog=true`;
