'use strict';

const { getPlaylist, addSong } = require("../repositories/spotify");
const { getPerson } = require('../utils');

async function handlePlaylist(bot, channelId, command, args) {
    let playlist;

    switch(args[0]) {
        case ('-old'):
            playlist = await getPlaylist('v1');
            bot.sendMessage({
                to: channelId,
                message: playlist
            });
            break;
        case ('-current'):
            playlist = await getPlaylist('v2');
            bot.sendMessage({
                to: channelId,
                message: playlist
            });
            break;
        case ('-who'):
            let who = getPerson();
            bot.sendMessage({
                to: channelId,
                message: who
            });
            break;
        default:
            bot.sendMessage({
                to: channelId,
                message: `Playlist command requires one of the following arguments:
                 -old
                 -current
                 -who`
            });
            break;
            
        

    }
    
}

module.exports = {
    handlePlaylist
}