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

    return JSON.parse(resp).title;

  } catch(err) {
    console.log(err.message);
  }
}

module.exports = {
  getAffixes
};
