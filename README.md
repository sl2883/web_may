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