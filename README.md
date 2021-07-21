**Unsubscribe in CleverTap**

Using subscribe API [here](https://developer.clevertap.com/docs/subscribe-api)

Sample unsubscribe code -
```json
{
	"d": [
	{
		"type": "email",
		"value": "sl2883@cornell.edu",
		"status": "Unsubscribe"
	}]
}
```
Sample resubscribe code - 
```json
{
	"d": [
	{
		"type": "email",
		"value": "sl2883@cornell.edu",
		"status": "Resubscribe"
	}]
}
```

For unsubscribe link in email with groups 

 1. Create subscription groups from CT dashboard **Settings -> Setup -> Subscription Groups**
 2. Add an unsubscribe page on a public server. [Here's](http://static.clevertap.com/docs/email-unsubscribe.html) an example.
 3. Update your email provider settings in CleverTap with the link to this public hosted unsubscribe page.
 4. In your CleverTap campaigns for email, update the email template to have the following link - 
 ```html
 <a href="*|UNSUBSCRIBE|*">Unsubscribe</a>
 ```

Run a test campaign to verify that, when you click on the unsubscribe link in your email (from campaign) now, it will take you to the unsubscribe page with options to select and unsubscribe from a group. 

An example landing page when users click on unsubscribe page -

![Here's a sample page landed on clicking the unsubscribe button](https://github.com/sl2883/web_may/blob/main/sample-unsubscribe.png?raw=true)

An important part is to unsubscribe users from groups manually. To do that, use the **Update User Profile API ** [here](https://developer.clevertap.com/docs/upload-user-profiles-api)

Here's an example payload -
```json
{
	"d": [
		{
			"identity": "random@gmail.com",
			"type": "profile",
			"profileData": {
				"category-unsubscribe": {
					"email": ["information"]
				}
			}
		}
	]
}
```


**Google Tag Manager Setup**
- From the Google Tag Manager account, get the code to be pasted 

Paste this code as high in the <head> of the page as possible:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MZMWZZ3');</script>
<!-- End Google Tag Manager -->
```

Additionally, paste this code immediately after the opening <body> tag:
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZMWZZ3"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

**Set the Tags**
- Google Analytics: GA4 Configuration (with measurement id )

To find the measurement id
- go to https://analytics.google.com/
-  bottom-left Admin page
- Data stream section
- Click on your website

- Also, for the tag  Google Analytics: GA4 Configuration, set the triggering to All Pages
- Now for the event, create a Google Analytics: GA4 Event tag
- set configuration tag as Google Analytics: GA4 Configuration 
- event name as click
- Set the triggering to be a Product clicked trigger

- Add another tag - CT - Product click with custom html
```html
<script>
  clevertap.event.push("Product Clicked from trigger");
</script>
```

- The trigger for above is also Product clicked

- Make sure that you add "Click text" etc in your built-in variables

