'use strict'
 
//const switcher = document.querySelector('.btn');


const event1 = document.querySelector('#event1');
const event2 = document.querySelector('#event2');

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