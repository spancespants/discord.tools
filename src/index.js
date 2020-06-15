'use strict';

const Discord = require('discord.js');
const {CronJob} = require('cron')
const {determinePerson} = require('./utils');
const { command } = require('./handlers/commandHandler');
require('dotenv').config();

async function start() {

  const job = new CronJob('0 * * * *', function() {
    try {
      determinePerson()
    } catch(error) {
      console.log(`Error determining person: ${error.message}`);
    }
  });
  job.start();

  const bot = new Discord.Client();
  bot.login(process.env.DISCORD_KEY);

  bot.on('ready', () => {
    console.log('Discord bot connected and ready');
  });

  bot.on('message', async (message) => {
    try {
      let reply = await command(message);
    } catch(error) {
      console.log(`Error repyling to message: ${message}, ${error.message}`);
    }
  });

  bot.on('error', async (error) => {
    console.log(error);
  })

  console.log(`Discord Tools started at: ${Date()}`);

};

start();
