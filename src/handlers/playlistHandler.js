'use strict';

const { getPlaylist, addSong } = require("../repositories/spotify");
const { findPerson } = require('../utils');

async function handlePlaylist(bot, channelId, command, args) {
    let playlist, who;


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
            who = findPerson();
            bot.sendMessage({
                to: channelId,
                message: 'I can\'t do that yet'
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