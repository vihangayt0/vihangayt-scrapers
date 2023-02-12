const axios = require('axios')
const cheerio = require('cheerio')

async function ig(lindk){
  return new Promise(async (resolve, reject) => {
    const scrape1 = await axios.get(`https://tech.hindustantimes.com/tech/news`)
  const $ = cheerio.load(scrape1.data) 
      const link2 = $('body > div.container.contentWrapper > div > div > section.topSectionWrapper > div.ltSide > a.imgWrapper.firstArticle').attr('href')  
  const scrape = await axios.get('https://tech.hindustantimes.com' + link2)
  const $g = cheerio.load(scrape.data)
  const title = $g('h1').text() 
 const img = $g('img.imageCurve1').attr('src')  
  const desc = $g('p').text()  
  const tags = $g('div.tagWrapper').text()
    const link = 'https://tech.hindustantimes.com' + link2
  console.log({
    title,
    tags,
    img,
    link,
    desc
  })
  })}
  
