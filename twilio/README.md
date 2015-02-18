# Twilio API Tutorial

##Learning Competencies

* Learn how to use URLs for API calls
* Understand how data is passed in the URL in different kinds of requests
* Use an API to do something cool

##Summary

As a web developer, you will deal a lot with APIs. In this tutorial you will signup for a free Twilio account and play around with their API.

Twilio is used to send/receive both voice calls and messages, and allows companies to build services off of it without needing to interface directly with the telcos. A great example of where Twilio is used is in Uber and Lyft for anonymous numbers between the rider and the driver.

Twilio provides a great playground for you once you make an account to send messages with. Once you are setup you will be able to use HTTP POST requests to send messages to phones.

##Instructions:

1. Signup at [Twilio's website](https://www.twilio.com/try-twilio)
  * You will go through three steps
  * Enter your information
  * Verify your phone number (they won't spam you after)
2. Once your number has been verified, Twilio will present you with a number to play with. Click "Get started" to go to the next page.

3. Here you will see options for using your new number to make/receive calls/messages. Feel free to play around with these tools, but we want to work with the actual underlying API powering this page. Click "Go To Your Account" to get started.

4. Navigate to the API Explorer from the top with Dev Tools > API Explorer, or you can go [here](https://www.twilio.com/user/account/developer-tools/api-explorer) if you are logged in on the same browser.

5. From this page you have many options to explore on the left side of the page, in the main content area, you see a few quick options. Select "View request and code samples" under **Send a Message**.

Here is a layout of the inputs for the request.

Name | Explanation
----- | -----
Format | This is typically JSON or XML, which describes the structure of the request. JSON is the default structure used in most of today's JS applications.
AccountSid | This is used for authorization, you will see in the code section how it ends up in the request.
To | The phone number you are sending the message to.
From | The number associated with the Twilio account.
Body | The content of the message.
MediaUrl | Since the start of 2014(late 2013), Twilio has introduced the ability to send MMS. Here you can specify an image to send with your SMS.
StatusCallback | This is where you tell the API where to send the response to. This is how you know if the request was successful or not, and to get information returned as output for your request.

**Note**: Below the form you can view the output of the request you are making in several languages. Curl is the closest to the barebone URL request, whereas most of the other languages use wrappers built by either Twilio themselves or by third parties.


##Questions:

Answer the following questions by editing this document and submit by pull request.

####Here is a breakdown of a url request:
```
http://api.website.com/new_post_request?attr=my%20data&anotherParam=importantInfo
```
The first part (`http://api.website.com/new_post_request`) is the base URL, while the stuff that comes after is the params being passed. Typically in your web apps this will be wrapped in a request which contains other information like what kind of request(`GET`,`POST`, etc) and what kind of data are you passing (`JSON`,`XML`, etc).

1. What would the request for your create_message look like (replace tokens with `[tokenName]` so as not to share this publicly)?

2. What are the different attributes you are passing?

3. Briefly explain how the wrappers in the code examples might be working behind the scenes.

4. What type of request is being made (select one)?
  - [ ] GET
  - [ ] PUT
  - [ ] POST
  - [ ] DELETE

5. How does the API keep someone else from using this number to make a request?


##Resources
[Twilio](http://eloquentjavascript.net/1st_edition/chapter8.html)
### OAuth Basic:
**(From a StackExchange [answer](http://security.stackexchange.com/questions/19676/token-based-authentication-securing-the-token))**
>The "authentication token" works by how the server remembers it.

>A generic token is a random string; the server keeps in its database a mapping from emitted tokens to authenticated user names. Old tokens can be removed automatically in order to prevent the server's database from growing indefinitely. Such a token is good enough for security as long as an attacker cannot create a valid token with non-negligible probability, a "valid token" being "a token which is in the database of emitted tokens". It is sufficient that token values have length at least 16 bytes and are produced with a cryptographically strong PRNG (e.g. /dev/urandom, CryptGenRandom(), java.security.SecureRandom... depending on your platform).
