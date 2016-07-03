import AWS from "aws-sdk";

AWS.config.update({
	region: "eu-west-1"
});

export const query = cb => {

	var docClient = new AWS.DynamoDB.DocumentClient();

	console.log("Querying for registrationId TESTID.");

	var params = {
		TableName: "RegistrationProcess_test_01072016",
		KeyConditionExpression: "#id = :input",
		ExpressionAttributeNames: {
			"#id": "registrationId"
		},
		ExpressionAttributeValues: {
			":input": "TESTID"
		}
	};

	docClient.query(params, (err, data) => {

		if (err) {
			console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
		} else {

			console.log("Query succeeded.");

			data.Items.forEach(item => {

				console.log(JSON.stringify(item));
			});

			cb();
		}
	});

};
