'use strict';

const { getPlaylist, addSong } = require("../repositories/spotify");
const { getPerson } = require('../utils');

async function handlePlaylist(command, args, message) {
    let playlist;

    switch(args[0]) {
        case ('-old'):
            playlist = await getPlaylist('v1');
            message.reply(playlist);
            break;
        case ('-current'):
            playlist = await getPlaylist('v2');
            message.reply(playlist);
            break;
        case ('-who'):
            let who = getPerson();
            message.reply(`${who} is in charge of sotd today`);
            break;
        default:
            message.reply(`Playlist command requires one of the following arguments:
            -old
            -current
            -who`);
            break;
    }   
}

module.exports = {
    handlePlaylist
}