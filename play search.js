const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://play.google.com/store/search?q=whatsapp&c=apps';

axios.get(url)
  .then(response => {
    const $ = cheerio.load(response.data);
    
    // get all the app links on the page
    const appLinks = [];
    $('a').each((i, link) => {
      const href = $(link).attr('href');
      if (href && href.startsWith('/store/apps/details?id=')) {
        appLinks.push(`https://play.google.com${href}`);
      }
    });

    console.log(appLinks);
  })
  .catch(error => {
    console.log(error);
  });
