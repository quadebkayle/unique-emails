# Unique Email Service
Unique email service is a Node.js web service which creates an endpoint to receive emails and tell the user how many unique emails were sent to the service. An email is deemed "unique" when it is not the same as another email based on Gmail's account matching. 

Gmail account matching rules are as stated:
* periods are ignored in the username. EX: "test.email" is read as "testemail"
* any portion after the character '+' is ignored EX: "testemail+spam" is read as "testemail" 

### Installation

This was created using Node.js v12.14.0. Please install [latest LTS version](https://nodejs.org/) to run this web service.

To run this web service, first clone the repository, enter the folder and download the dependencies.

```sh
$ cd unique-emails
$ npm install
```

To run the web service:
```sh
$ npm start
```

You should see the console print that the web service will be listening on port 8080.

### Testing the web service

To test the web service, it is recommended you use Postman to send the request with the data. [Postman can be downloaded here](https://www.postman.com/). If you have another method of sending http requests you would like to use, feel free to follow the steps and implement them in your own way.

To test, start Postman and create a new request. Request name is not important but for this I will use "Unique Email Test".

The request type will be "POST". The request URL will be sent to localhost:8080/unique-emails

For the data being sent, move your cursor to the "Body" tab. Hit the checkbox "raw" for format. To the right, a dropdown will pop up and say "text". Change that to "JSON".

Correct format for sending data is as follows:
```sh
    {
        "emails": []
    }
```
Sending any different types of data will result in a 400 BAD REQUEST.

#### Test Data

For testing, you can use these predetermined tests. 

##### Test 1

```sh
    {
        "emails":[
		    "test.email@gmail.com",
		    "test.email+spam@gmail.com",
		    "testemail@gmail.com"
		]
    }
```
EXPECTED RESULT: 1

##### Test 2

```sh
    {
        "emails":[
		    "test.email@gmail.com",
		    "test.email@mycompanydomain.com"
		]
    }
```
EXPECTED RESULT: 2
