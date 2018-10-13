'use strict';

const request = require('request-promise-native');


async function getAffixes() {
  try {
    const resp = await request({
      method: 'GET',
      uri: 'https://raider.io/api/v1/mythic-plus/affixes',
      qs: {
        region: 'us',
        locale: 'en'
      }
    });
    const affixes = JSON.parse(resp).affix_details

    return `+2 ${affixes[0].name}, +4 ${affixes[1].name}, +7 ${affixes[2].name}, +10 ${affixes[3].name}`

  } catch(err) {
    console.log(err.message);
  }
}

module.exports = {
  getAffixes
};
