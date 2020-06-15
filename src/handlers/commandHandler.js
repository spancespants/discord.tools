
const {handlePlaylist} = require('./playlistHandler');
const raiderIO = require('../repositories/raiderIO');
const sample = require('lodash.sample');


async function command(message) {
  if (message.content.substring(0, 1) === '!') {
    let args = message.content.substring(1).split(' ');
    const cmd = args[0];
    args = args.splice(1);
    const command = cmd.toLowerCase();

    switch(command) {
      case 'slurp':
        message.reply('stfu');
      break;
      case 'affixes':
        const affixes = await raiderIO.getAffixes();
        message.reply(affixes);  
        break;
      case 'dotd':
        let people = ['Spencer', 'Jordan', 'Seth', 'Brandon', 'Richie', 'Mikkel', 'Adam', 'Ross', 'Sam', 'Timmy']
        const random = sample(people);
        message.reply(`Dingus of the day: ${random}`)
        break;
      case 'playlist':
        await handlePlaylist(command, args, message);
        break;
      case 'help':
        message.reply('List of commands: slurp, affixes, dotd, playlist')
        break;
      default:
        message.reply('Invalid command. Type !help for a list of commands');
    }
  } else if (message.content.toLowerCase().match(/dad/)) {
    message.reply('Say my name again, bitch');
  }
}

module.exports = {
  command
}
