// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';
process.env.DEBUG = 'actions-on-google:*';
let Assistant = require('actions-on-google').ApiAiAssistant;
let express = require('express');
let bodyParser = require('body-parser');
let rockPaperScissors = require('./modules/rockPaperScissors');
//let fs = require('fs');

let app = express();

global.__base = __dirname + '/';


app.use(bodyParser.json({type: 'application/json'}));

// [START Action]
app.post('/', function (req, res) {
  const assistant = new Assistant({request: req, response: res});
  console.log('Request received: ' + JSON.stringify(req.body));

  assistant.handleRequest(rockPaperScissors.rockPaperScissors);
});
// [END Action]

// Renders the homepage
//var html = '<html><head><title>Rock Paper Scissors</title></head><body><h1>Rock, Paper or Scissors?  You know the drill...</p><iframe width="350" height="430" src="https://console.api.ai/api-client/demo/embedded/2378fb5f-4ade-47c9-8411-5b3806ff1659"></iframe></div><script src="https://button.glitch.me/button.js" data-style="glitch"></script><div class="glitchButton" style="position:fixed;top:20px;right:20px;"></div></body></html>';
//var _ = require("./scrapeSearchSuggestions.js");
//html = _.scrapeSearchSuggestions("reddit")
app.use(express.static(__dirname + '/public'));
app.get('/privacy',express.static(__dirname + '/public/privacy.html'));
app.get('/toc',express.static(__dirname + '/public/toc.html'));

app.get('/', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.sendfile("public/index.html");//res.write(html);
  res.end();
});

if (module === require.main) {
  // [START server]
  // Start the server
  let server = app.listen(process.env.PORT || 3000, function () {
    let port = server.address().port;
    console.log('App listening on port %s', port);
  });
  // [END server]
}

module.exports = app;
