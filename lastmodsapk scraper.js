const axios = require("axios");
const cheerio = require("cheerio");

async function dlmod(link) {
return new Promise(async(resolve, reject) => {
const era = await axios.get(`${link}/download/`, {
withCredentials: true
})
const $g = cheerio.load(era.data)
const linkdl = $g('#content > main > div.container-min > section.download-section.section-sm.download-page > div > div > div > a').attr('href')
const size1 = $g('#content > main > div.container-min > section.download-section.section-sm.download-page > div > div > div > a > span').text()
const size2 = size1.replace('Download (','')
const size = size2.replace(')','')
const version = $g('span.appver').text()      
const name = linkdl.split('/')[5]
try {
resolve({linkdl, name, size, version})
} catch (err) {
console.log(err)
}})
}
async function searchmod(searchdata) {
return new Promise(async(resolve, reject) => {
const eras = await axios.get(`https://latestmodapks.com/?s=${searchdata}`, {
withCredentials: true
})
var sedarch = []
const $gs = cheerio.load(eras.data)
$gs('#content > main > section.blog-section > div.container > div.flex-container > div.flex-item').each(function(a, b) {
const link = $gs(b).find('a').attr('href')
const version = $gs(b).find('span.appver.dot').text()
const title = $gs(b).find('h2').text()
const img = $gs(b).find('img').attr('src')
sedarch.push({ link, version, title, img })
 })
try {
resolve({sedarch})
} catch (err) {
console.log(err)
}})}



module.exports = { 
  searchmod,
  dlmod
}
