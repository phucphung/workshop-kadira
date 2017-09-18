# KADIRA PERFORMANCE TRACKING

## HOW TO USE:
- go to [http://128.199.77.122:4000](http://128.199.77.122:4000)
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

## Install Kadira to server using docker:
- Get an Ubuntu machine up and running (make sure ports 11011 and 4000 are open):
- Install docker + docker-compose (full_install_docker_compose.sh):
	- `wget -O - https://gist.githubusercontent.com/wdullaer/f1af16bd7e970389bad3/raw/install.sh | bash`
	- ( [wget](https://www.computerhope.com/unix/wget.htm): download file from a web; `-O`: output document, `-`: print to standard output
	- ( [pipe](https://askubuntu.com/questions/172982/what-is-the-difference-between-redirection-and-pipe): give the output of a command to an input of another command)
	- (`bash`: execute command)
- Get a docker-compose.yml with mongodb, kadira-ui, kadira-engine and kadira-rma (docker-compose.yml)
	- `wget https://gist.githubusercontent.com/6uimorais/1e1de20bbbb2a04fe19fc73f88d6a25f/raw/4ef02ef2a80bf8967371365330f2a2676c26cfe2/docker-compose.yml`
- Run `sudo docker-compose up` (-d if you want it running on background)
	- ( [docker-compose up](https://docs.docker.com/compose/reference/up/))
- Access http://machineIp:4000 and login as "admin@gmail.com" and "admin" password. Change **machineIP** to ip address
- Create your APP, get the ID and Secret
- in meteor app, `meteor add meteorhacks:kadira`
- Setup kadira in your app by code or settings.json (Config):
	- By code: `Kadira.connect('xxxxxxxxxxx', 'xxxxxxxxxxxxxxx', {"endpoint":"http://machineIp:11011"});`
	- By settings.json:
	```
	  "kadira": {
	    "appId": "xxxxxxxxxxx",
	    "appSecret": "xxxxxxxxxxxxxxx",
	    "options": {
	        "endpoint":"http://machineIp:11011"
	    }
	  }
	```
- Update your app from "free" plan to "paid" to get full access at Kadira:
	- `sudo apt install mongodb-clients`
	- `mongo apm --host michineIP --port 27018`
	- `db.apps.update({},{$set:{plan:'pro'}},{multi:true})`
