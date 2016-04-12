var lab1_1 = require("./lab/lab1_1").lab;
var example_1 = require("./lab/example_1").lab
var lab2 = require("./lab/ec2instance").info;
var AWS = require('aws-sdk');

var PORT = 8080;

var urlMap = [
	{path: "/", action:__dirname + "/static/index.html"},	 
	{path: "/digest", action: lab1_1},	
	{path: "/example_1", action: example_1}, 
	{path: "/ec2instance", action: ec2instance}
	];

AWS.config.loadFromPath('./config.json');

var service = require("./lib/service").http(urlMap);

service(PORT);

