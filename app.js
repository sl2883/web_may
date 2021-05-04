'use strict'
 
const switcher = document.querySelector('.btn');

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