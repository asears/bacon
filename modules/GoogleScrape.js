var request = require("request");
function scrapeSearchSuggestions(queryString) {
  request({
    uri:"https://www.google.com.au/complete/search?client=serp&hl=en-AU&gs_rn=64&gs_ri=serp&tok=nR9_bCAZJaA8Be7Ncs1JMQ&pq=hi&cp=4&gs_id=q&q=hi%20w%20ho&xhr=t",
    headers: {
      "Referer": 'https://www.google.com.au/',
      "User-Agent": 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.100 Safari/537.36',
    }
  },
  function(error, response, data) {
    
    let suggestions = JSON.parse(data)[1].map((e) => {
      return e[0].replace(/(<b>|<\/b>)/g,"");
    })
    console.log(suggestions);
  });
}

module.exports = scrapeSearchSuggestions;