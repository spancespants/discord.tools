'use strict'

const { getPlaylist } = require('../repositories/spotify');

async function command(bot, user, userId, channelId, message, evt) {
  if (message.substring(0, 1) === '!') {
    let args = message.substring(1).split(' ');
    const cmd = args[0];
    args = args.splice(1);
    const command = cmd.toLowerCase();

    switch(command) {
      case 'slurp':
        bot.sendMessage({
          to: channelId,
          message: '*sluuuurp*'
        });
      break;
      case 'affixes':
        const affixes = await raiderIO.getAffixes();
        bot.sendMessage({
          to: channelId,
          message: affixes
        });
        break;
      case 'schedule':
        bot.sendMessage({
          to: channelId,
          message: "Thursday = Jordan @Goose; \n Friday = Spencer @YaBoiBangz; \n Saturday = Seth @VomitCat; \n Sunday = Mikkel @hamtaro; \n Monday = Froob @McFroob; \n Tuesday = Adam @T0x1x; \n Wednesday = Ross @Minz. "
        });
        break;
      case 'dotd':
        const people = ['Spencer', 'Jordan', 'Seth', 'Brandon', 'Richie', 'Mikkel', 'Adam', 'Ross', 'Sam', 'Timmy']
        const random = sample(people);
        bot.sendMessage({
          to: channelId,
          message: `Dingus of the day: ${random}`
        });
        break;
      case 'playlist':
        const playlist = await getPlaylist();
        bot.sendMessage({
          to: channelId,
          message: playlist
        });
        break;
      case 'help':
        bot.sendMessage({
          to: channelId,
          message: 'List of commands: slurp, affixes, schedule, dotd, playlist'
        });
        break;
      default:
        bot.sendMessage({
          to: channelId,
          message: 'Invalid command. Type !help for a list of commands'
        });
    }
  } else if (message.toLowerCase().match(/dad/)) {
    bot.sendMessage({
      to: channelId,
      message: '*smirks*'
    });
  }
  else if (message.toLowerCase().match(/seth/) && user !== 'Dad') {
    bot.sendMessage({
      to: channelId,
      message: "Seth is studying. Please don't bother him."
    });
  }
}

module.exports = {
  command
}
