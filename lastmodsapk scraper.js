const axios = require('axios');
const cheerio = require('cheerio');


async function lyrics(lname) {
  return new Promise(async(resolve, reject) => {
axios.get(`https://sinhalasonglyrics.com/?s=${lname}&submit=Search`)
  .then(response => {
    const $ = cheerio.load(response.data);
    const firstResult = $('.entry-title > a').first();
    const songTitle = firstResult.text().trim();
    const songLink = firstResult.attr('href');

    // Request the song page to get the lyrics
    axios.get(songLink)
      .then(response => {
        const $ = cheerio.load(response.data);
        const lyrics = $('.entry-content > p').text().trim();
        resolve({
            songTitle,
            lyrics,
            songLink
        })
      })})})}

