import AWS from "aws-sdk-mock";

before(() => {

	console.log("Stubbing all the things!");

	AWS.mock("DynamoDB.DocumentClient", "query", (params, callback) => {
		callback(null, {
			Items: []
		});
	});

	AWS.mock("S3", "listBuckets", (params, callback) => {

		callback(null, {
			Buckets: []
		});
	});

});

after(() => {

	console.log("Un-stubbing all the things!");

	AWS.restore("DynamoDB.DocumentClient");
	AWS.restore("S3");
});