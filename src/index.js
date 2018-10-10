'use strict';

const request = require('request-promise-native');

async function start() {
  try {
    const resp = await request({
      method: 'GET',
      uri: 'https://raider.io/api/v1/mythic-plus/affixes',
      qs: {
        region: 'us',
        locale: 'en'
      }
    });

    const affixes = JSON.parse(resp).title;
    await toDiscord(affixes);
  } catch(err) {
    console.log(err.message);
  }

}

async function toDiscord(affixes) {
  await request({
    method: 'POST',
    uri: 'https://discordapp.com/api/webhooks/499361020595142666/jIu9cZ-AIZYmhpq9dZcgTrRq_xuvtAiLG58GujYnawCWq3YqMgEhhiCnz8haSPsFM4i5',
    body: {
      content: `The affixes for this week are ${affixes}`
    },
    json: true
  });
}

start();
