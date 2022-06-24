clevertap = {event:[], profile:[], account:[], region:"us1", onUserLogin:[], notifications:[], privacy:[]};
        // replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
//clevertap.account.push({"id": "779-684-5Z6Z"});
clevertap.account.push({"id": "464-49W-WR6Z"});
clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data
 (function () {
		 var wzrk = document.createElement('script');
		 wzrk.type = 'text/javascript';
		 wzrk.async = true;
		 wzrk.src = 'https://cdn.jsdelivr.net/npm/clevertap-web-sdk/clevertap.min.js';
		 var s = document.getElementsByTagName('script')[0];
		 s.parentNode.insertBefore(wzrk, s);
  })();