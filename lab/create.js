var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json')
var task =  function(request, callback){

	var params = {
	  ImageId: 'ami-80f715e0', /* required */
	  MaxCount: 1, /* required */
	  MinCount: 1, /* required */
	  Monitoring: {
		Enabled: false /* required */
	  },
		InstanceType: 't1.micro',

	};

	var ec2 = new AWS.EC2();
	ec2.runInstances(params, function(err, data) {
	  if (err)callback(null, err.stack); // an error occurred
	  else     callback(null,data);           // successful response
	});

}
