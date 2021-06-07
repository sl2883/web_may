'use strict'
 
//const switcher = document.querySelector('.btn');

const login1 = document.querySelector('#login1');
const login2 = document.querySelector('#login2');
const login3 = document.querySelector('#login3');
const event1 = document.querySelector('#event1');
const eventdiscarded = document.querySelector('#eventDiscarded');
const eventWithPropertyDiscarded = document.querySelector('#eventWithPropertyDiscarded');
const profileUpdate = document.querySelector('#profileUpdate');

login1.addEventListener('click', function() {
  clevertap.onUserLogin.push({
    "Site": {
      "Name": "SL Web May20 1",            // String
      "Email": "slwebmay201@gmail.com",         // Email address of the user
      "MSG-email": false,                // Disable email notifications
      "MSG-push": true,                  // Enable push notifications
      "MSG-sms": true,                   // Enable sms notifications
      "MSG-whatsapp": true,              // Enable WhatsApp notifications
    }
   });
})

login2.addEventListener('click', function() {
  clevertap.onUserLogin.push({
    "Site": {
      "Name": "SL Web May20 2",            // String
      "Email": "slwebmay202@gmail.com",         // Email address of the user
      "MSG-email": true,                // Disable email notifications
      "MSG-push": true,                  // Enable push notifications
      "MSG-sms": true,                   // Enable sms notifications
      "MSG-whatsapp": true,              // Enable WhatsApp notifications
    }
   });
})

login3.addEventListener('click', function() {
  clevertap.onUserLogin.push({
    "Site": {
      "Name": "sunny gmail",            // String
      "Email": "sunny.ladkani@gmail.com",         // Email address of the user
      "MSG-email": true,                // Disable email notifications
      "MSG-push": true,                  // Enable push notifications
      "MSG-sms": true,                   // Enable sms notifications
      "MSG-whatsapp": true,              // Enable WhatsApp notifications
    }
   });
})

event1.addEventListener('click', function() {
  clevertap.event.push("Product Clicked", {
    "Product name":"DIAMOND",
    "Category":"Mens Accessories",
    "page": "main",
    "Price":59.99,
    "pi":"https://i5.walmartimages.com/asr/209bb8a0-30ab-46be-b38d-58c2feb93e4a_1.1a15fb5bcbecbadd4a45822a11bf6257.jpeg",
  });
})

eventDiscarded.addEventListener('click', function() {
  clevertap.event.push("Discarded", {
    "Product name":"DIAMOND",
    "Category":"Mens Accessories",
    "page": "main",
    "Price":59.99,
    "pi":"https://i5.walmartimages.com/asr/209bb8a0-30ab-46be-b38d-58c2feb93e4a_1.1a15fb5bcbecbadd4a45822a11bf6257.jpeg",
  });
})

eventWithPropertyDiscarded.addEventListener('click', function() {
  clevertap.event.push("Property Discarded", {
    "Product name":"DIAMOND",
    "Category":"Mens Accessories",
    "page": "main",
    "Price":59.99,
  });
})

profileUpdate.addEventListener('click', function() {
  clevertap.profile.push({
    "Site": {
      "Today's Date": new Date(),            // String
    }
   });
})