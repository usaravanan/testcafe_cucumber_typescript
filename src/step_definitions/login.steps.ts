import { Before, Given, Then, When } from 'cucumber';
const assert = require('assert')
let testController = null;
let response = null;

Given('I am on a page', function() {
  return this.waitForTestController().then(async function (tc) {
    testController = tc;
    //testController.navigateTo("https://reqres.in")
    response = await testController.request('https://reqres.in/api/users')

});
})

Then('I see the page', function() {
  assert.equal(200, response.status)
  assert.equal(1, response.body.data[0].id) 
})

