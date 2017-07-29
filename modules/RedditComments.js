
var request = require("request");
function getNewRedditComments(callback) {

  request("https://www.reddit.com/r/all/comments/.json?limit=100", function(error, response, data) {
    if(error) { callback(error, null); return; }
    //console.log("2. processing new batch of comments...");
    let newComments = extractNewComments(JSON.parse(data).data.children);
    if(callback) callback(error, newComments); 
  });
  
}

let oldCommentIds = [];
function extractNewComments(comments) {
  //console.log(comments)
  let newComments = [];
  for(let c of comments) {
    if(oldCommentIds.indexOf(c.data.id) === -1) {
      newComments.push(c.data.body);
      oldCommentIds.push(c.data.id);
      
      console.log(`found new comment`, c);
    }
  }
  // prevent oldCommentIds array growing too big:
  if(oldCommentIds.length - 5000 > 0) {
    oldCommentIds.splice(0, oldCommentIds.length - 5000);
  }
  return newComments;
}


// function extractRedditComments(commentsPageHtml) {
  
// }

// var cheerio = require("cheerio");
// function extractLinkedUrlsFromHtml(html) {
//   var $ = cheerio.load(html);
  
//   var urls = [];
//   $("a").each((i, el) => { urls.push( $(el).attr("href") ); });
//   return urls;
  
// }

// var request = require("request");
// function getHtmlByUrl(url, callback) {
//   request(url, function(error, response, html) {
//     if(callback) callback(error, html);
//   });
// }

module.exports = getNewRedditComments;