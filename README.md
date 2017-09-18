# KADIRA PERFORMANCE TRACKING

## HOW TO USE:
- login as "admin@gmail.com" and "admin" password
- Click `Create new` and set the name

### Configure app
1. Install Smart Package: `meteor add meteorhacks:kadira`
2. Connect to Kadira: in settings.json add
```
	"kadira": {
	    "appId": "xxxxxxxxxxx",
	    "appSecret": "xxxxxxxxxxxxxxx",
	    "options": {
	        "endpoint":"http://128.199.77.122:11011"
	    }
	  }
```
3. Run meteor
	`meteor --settings settings.json`
4. Import json file
	`mongoimport --port 3001 --db meteor --collection activities activities.json`
