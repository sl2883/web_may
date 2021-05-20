'use strict'
 
//const switcher = document.querySelector('.btn');

const login1 = document.querySelector('#login1');
const login2 = document.querySelector('#login2');
const event1 = document.querySelector('#event1');
const event2 = document.querySelector('#event2');

login1.addEventListener('click', function() {
  clevertap.onUserLogin.push({
    "Site": {
      "Name": "SL Web May 1",            // String
      "Email": "slwebmay1@gmail.com",         // Email address of the user
      "MSG-email": true,                // Disable email notifications
      "MSG-push": true,                  // Enable push notifications
      "MSG-sms": true,                   // Enable sms notifications
      "MSG-whatsapp": true,              // Enable WhatsApp notifications
    }
   });
})

login2.addEventListener('click', function() {
  clevertap.onUserLogin.push({
    "Site": {
      "Name": "SL Web May 2",            // String
      "Email": "slwebmay2@gmail.com",         // Email address of the user
      "MSG-email": true,                // Disable email notifications
      "MSG-push": true,                  // Enable push notifications
      "MSG-sms": true,                   // Enable sms notifications
      "MSG-whatsapp": true,              // Enable WhatsApp notifications
    }
   });
})

event1.addEventListener('click', function() {
  clevertap.event.push("Product Viewed", {
    "Product name":"Casio Chronograph Watch",
    "Category":"Mens Accessories",
    "Price":59.99,
  });
})

event2.addEventListener('click', function() {
  clevertap.event.push("Product Purchased", {
    "Product name":"Casio Chronograph Watch",
    "Category":"Mens Accessories",
    "Price":59.99,
  });
})


switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";

        clevertap.onUserLogin.push({
            "Site": {
              "Name": "SL Web May 1",            // String
              "Email": "slwebmay1@gmail.com",         // Email address of the user
              "MSG-email": true,                // Disable email notifications
              "MSG-push": true,                  // Enable push notifications
              "MSG-sms": true,                   // Enable sms notifications
              "MSG-whatsapp": true,              // Enable WhatsApp notifications
            }
           });
    }
    else {
        this.textContent = "Light";

        clevertap.onUserLogin.push({
            "Site": {
              "Name": "SL Web May 2",            // String
              "Email": "slwebmay2@gmail.com",         // Email address of the user
              "MSG-email": true,                // Disable email notifications
              "MSG-push": true,                  // Enable push notifications
              "MSG-sms": true,                   // Enable sms notifications
              "MSG-whatsapp": true,              // Enable WhatsApp notifications
            }
           });
        
    }

});