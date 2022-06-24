'use strict'
 
//const switcher = document.querySelector('.btn');

const login1 = document.querySelector('#login1');
const login2 = document.querySelector('#login2');
const login3 = document.querySelector('#login3');
const logout = document.querySelector('#logout');
const event1 = document.querySelector('#event1');
const eventdiscarded = document.querySelector('#eventDiscarded');
const eventWithPropertyDiscarded = document.querySelector('#eventWithPropertyDiscarded');
const profileUpdate = document.querySelector('#profileUpdate');
const webPButton = document.querySelector('#webPButton');
const webpopupspace = document.querySelector('#webpopupspace');

// clevertap.notificationCallback = function(msg){
//   // Raise the notification viewed and clicked events in the callback
  
//   console.log(JSON.stringify(msg));// Your custom rendering implementation here
//   clevertap.raiseNotificationViewed();
//   webpopupspace.innerHTML = msg.msgContent.html;
//   const webP = document.querySelector('#webP');
//   webP.addEventListener('click', function() {
//     //window.parent.clevertap.raisePopupNotificationClicked({"msgId":"12345"})
//      clevertap.raiseNotificationClicked();
//    });
// };

login1.addEventListener('click', function() {
  clevertap.onUserLogin.push({
    "Site": {          // String
        "Email": "test-3ff8c6@test.mailgenius.com",  // guid => 3240923u42305u
    }
   });

   //timing 15 second =>

   clevertap.event.push({
     "event": "Sign up"
   })

   clevertap.notifications.push({
    "titleText":'Would you like to receive Push Notifications?',
    "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
    "okButtonText":'Sign me up!',
    "rejectButtonText":'No thanks',
    "askAgainTimeInSeconds":5,
    "okButtonColor":'#f28046'});
})

// login1.addEventListener('click', function() {
//   clevertap.onUserLogin.push({
//     "Site": {
//       "Name": "SL Web May20 1",            // String
//       "Email": "slwebmay201@gmail.com",         // Email address of the user
//       "MSG-email": false,                // Disable email notifications
//       "MSG-push": true,                  // Enable push notifications
//       "MSG-sms": true,                   // Enable sms notifications
//       "MSG-whatsapp": true
//     }
//    });
// })



function myFunction(e) {
  //form.action = "register.html";
  const formElem = document.querySelector('form');
  const formData = new FormData(formElem);

  console.log(formData.get('name')); // foo
  console.log(formData.get('email')); // foo
  console.log(formData.get('phone')); // foo

  //console.log(formData.get('field2')); // bar

  alert(formData.get('name') + " " + formData.get('email') + " " + formData.get('phone') + " ");

  clevertap.onUserLogin.push({
    "Site": {
        "Name": formData.get('name'),            // String
        "Email": formData.get('email'),
        "Phone": formData.get('phone')
    }
   });

  return false;
}

login2.addEventListener('click', function() {
  clevertap.onUserLogin.push({
    "Site": {
      "Name": "Sunny undosWebTokenTest2",            // String
      "Email": "undosWebTokenTest2@gmail.com",
      "Identity": "undosWebTokenTest2"
  }
   });

   clevertap.notifications.push({
    "titleText":'Would you like to receive Push Notifications?',
    "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
    "okButtonText":'Sign me up!',
    "rejectButtonText":'No thanks',
    "askAgainTimeInSeconds":5,
    "okButtonColor":'#f28046'});
})

















login3.addEventListener('click', function() {
  clevertap.onUserLogin.push({
    "Site": {
      "Name": "sunny gmail",            // String
      "Email": "sunny.ladkani@gmail.com",  
      "Identity": "32409",              // Email address of the user
      "MSG-email": true,                // Disable email notifications
      "MSG-push": true,                  // Enable push notifications
      "MSG-sms": true,                   // Enable sms notifications
      "MSG-whatsapp": true,              // Enable WhatsApp notifications,
      "category-resubscribe": {
        "email": ["information"]
      },
    }
   });
})

logout.addEventListener('click', function() {
  clevertap.clear();
})

event1.addEventListener('click', function() {
  clevertap.event.push("Product viewed test1", {
    "Product name 1":"DIAMOND",
    "NEw property":"r534"
  });

  clevertap.event.push("Discarded", {
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
  clevertap.event.push("Order New 3242", {
    "Product name":"DIAMOND",
    "Category":"Mens Accessories",
    "page": "main",
    "Price":59.99,
  });
})

// eventWithPropertyDiscarded.addEventListener('click', function() {
//   clevertap.event.push("Property Discarded", {
//     "Product name":"DIAMOND",
//     "Category":"Mens Accessories",
//     "page": "main",
//     "Price":59.99,
//   });
// })

profileUpdate.addEventListener('click', function() {
  clevertap.profile.push({
    "Site": {
      "first name": "Sunny3",
      "last name": "Ladkani"
    }
   });
})

webPButton.addEventListener('click', function() {
  clevertap.event.push("WebPopup event", {
    "Product name":"DIAMOND",
    "Category":"Mens Accessories",
    "page": "main",
    "Price":59.99,
  });
})