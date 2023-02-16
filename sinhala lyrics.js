const axios = require('axios');
const cheerio = require('cheerio');

const searchQuery = 'lelena';

axios.get(`https://sinhalasonglyrics.com/?s=${searchQuery}&submit=Search`)
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
        console.log(`Song Title: ${songTitle}\nLyrics: ${lyrics}`);
      })
      .catch(error => {
        console.error(error);
      });
  })
  .catch(error => {
    console.error(error);
  });
