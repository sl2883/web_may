'use strict'
 
//const switcher = document.querySelector('.btn');


const event1 = document.querySelector('#event1');
const event2 = document.querySelector('#event2');
const event3 = document.querySelector('#event3');
const event4 = document.querySelector('#event4');
const event5 = document.querySelector('#event5');
const event6 = document.querySelector('#event6');
const event7 = document.querySelector('#event7');
const event8 = document.querySelector('#event8');
const event9 = document.querySelector('#event9');

event1.addEventListener('click', function() {
  clevertap.event.push("Product Viewed", {
    "Product name":"DIAMOND",
    "Category":"Mens Accessories",
    "page": "events",
    "Price":59.99,
  });
})

event2.addEventListener('click', function() {
  clevertap.event.push("Product Purchased", {
    "Product name":"DIAMOND",
    "Category":"Mens Accessories",
    "page": "events",
    "Price":59.99,
  });
})


event3.addEventListener('click', function() {
  clevertap.onUserLogin.push({
    "Site": {
      "Name": "sunny ladkani",            // String
      "Email": "sunny.ladkani@clevertap.com",         // Email address of the user
      "Last login": Date()
    }
   });

   clevertap.notifications.push({
    "titleText":'Would you like to receive Push Notifications?',
    "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
    "okButtonText":'Sign me up!',
    "rejectButtonText":'No thanks',
    "askAgainTimeInSeconds":5,
    "okButtonColor":'#f28046'});

  //  clevertap.onUserLogin.push({
  //   "Site": {
  //     "Name": "SL Web Jul22 T2",            // String
  //     "Email": "slwebjul22.t2@gmail.com",         // Email address of the user
  //     "MSG-email": true,                // Disable email notifications
  //     "MSG-push": true,                  // Enable push notifications
  //     "MSG-sms": true,                   // Enable sms notifications
  //     "MSG-whatsapp": true,              // Enable WhatsApp notifications
  //     "ProfileCount": 1
  //   }
  //  });
})

event4.addEventListener('click', function() {

  clevertap.profile.push({
    "Site": {
      "Email": "slwebjul223@gmail.com", // Email address of the user
   // update some custom profile property fields 
      "ProfileCount": 2
    }
   });

   clevertap.profile.push({
    "Site": {
      "Email": "slwebjul224@gmail.com", // Email address of the user
   // update some custom profile property fields 
      "ProfileCount": 2
    }
   });
})

event5.addEventListener('click', function() {
   clevertap.profile.push({
    "Site": {
      "Email": "slwebjul22.t1@gmail.com", // Email address of the user
   // update some custom profile property fields 
      "ProfileCount": 2
    }
   });
})

event6.addEventListener('click', function() {
  clevertap.event.push("Product Clicked 1", {
    "Product name":"DIAMOND",
    "Category":"Mens Accessories",
    "page": "events",
    "Price":59.99,
  });
})

event7.addEventListener('click', function() {
  clevertap.profile.push({
   "Site": {
     "card_status": "activated"
   }
  });
})

event8.addEventListener('click', function() {
  clevertap.profile.push({
   "Site": {
  // update some custom profile property fields 
    "card_status": "paid"
   }
  });
})

event9.addEventListener('click', function() {
  clevertap.event.push("Product Clicked 2", {
    "Product name":"DIAMOND",
    "Category":"Mens Accessories",
    "page": "events",
    "Price":59.99,
  });
})