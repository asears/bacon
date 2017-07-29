## What You'll Need
 1. An [API.AI account](https://api.ai)
 2. A [Google Cloud project](https://console.cloud.google.com/project)

## Steps to Setup your Google Home Action
1. [Remix this example app](https://glitch.com/edit/#!/remix/google-home/af1e91ec-2f6d-4a37-82cb-21c8bd289460).

2. Create a new agent in [API.AI](https://api.ai).

3. Set the "Fulfillment" webhook URL to your app's publish URL and enabled it. That's the URL in the tab that opens when you click 'Show'. It will have the format 'https://project-name.glitch.me,' so for our example app, the URL is https://google-home.glitch.me.

4. Create an intent: `Daddy or Chips`. Set `User says` to 'daddy or chips', set `action` to 'dadchips' and for `fulfilment` check the 'Use webhook' box. 

5. Then in [Google Cloud](https://console.cloud.google.com/project), create a new project and copy the generated Project ID.

6. Back in API.ai, in the 'Integrations' section, enable 'Actions on Google' and provide an invocation name for the action. We set it to 'daddy or chips' for our example app - it's the name you use to invoke the app on Google Home e.g. 'ask daddy or chips'. Then paste in your Google Cloud Project ID in the `Google Project ID` field.

7. For the required 'Welcome Intent', select the 'Daddy or Chips' intent from the drop-down list.

8. You can then authorize and preview the action, which will make it available to try out using the Google Home [web simulator](https://developers.google.com/actions/tools/web-simulator).

You can now test out your Google Home action. If you say 'daddy or chips' it will respond with its choice to the age-old question - which is better, Daddy or Chips? Along with finally providing you with an answer so that you can move on with your life, this is a useful starting point for building your own Google Home actions using API.ai on Glitch.