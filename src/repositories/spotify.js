'use strict';

const request = require('request-promise-native');
require('dotenv').config();


async function getPlaylist(version) {
  try {
    const token = await getToken();
    let uri = version === 'v1' ? 'https://api.spotify.com/v1/playlists/2B6tZ808BynL5iq3a9c14M' : 'https://api.spotify.com/v1/playlists/3acjbPcVD7Bj28ECiOcawn'
    
    const opts = {
      method: 'GET',
      uri,
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      },
      json: true
    };

    const resp = await request(opts);

    return resp.external_urls.spotify;

  } catch(err) {
    console.log(err.message);
  }
}

async function addSong(song) {
  try {
    const token = await getToken();    
    const opts = {
      method: 'POST',
      uri: 'https://api.spotify.com/v1/playlists/3acjbPcVD7Bj28ECiOcawn/tracks',
      body: {
        uris: [song]
      },
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      },
      json: true
    };

    const resp = await request(opts);

    return resp.external_urls.spotify;

  } catch(err) {
    console.log(err.message);
  }
}



async function getToken() {
  try {
    let token = Buffer.from(`${process.env.SPOTIFY_KEY}:${process.env.SPOTIFY_SECRET}`).toString('base64');

    const resp = await request({
      method: 'POST',
      uri: 'https://accounts.spotify.com/api/token',
      qs: {
        grant_type: 'client_credentials',
        scope: 'playlist-modify-private, playlist-modify-public'
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${token}`
      },
      json: true
    });

    return `Bearer ${resp.access_token}`;


  } catch(err) {
    console.log(err.message);
  }
}

module.exports = {
  getPlaylist,
  addSong
};
