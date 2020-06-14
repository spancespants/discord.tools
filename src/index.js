'use strict';

const Discord = require('discord.io');
const {CronJob} = require('cron')
const {determinePerson} = require('./utils');
const { command } = require('./handlers/commandHandler');
require('dotenv').config();

async function start() {

  const job = new CronJob('0 * * * *', function() {
    determinePerson()
  });
  job.start();

  const bot = new Discord.Client({
    token: process.env.DISCORD_KEY,
    autorun: true
  });

  bot.on('ready', () => {
    console.log('Connected and ready');
    console.log(`Logged in as ${bot.username} - ${bot.id}`);
  });

  bot.on('message', async (user, userId, channelId, message, evt) => {
    await command(bot, user, userId, channelId, message, evt);
  });

  console.log(`Discord Tools started at: ${Date()}`);

};

start();
