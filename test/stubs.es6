import Mockeroni from "./mockeroni";

before(() => {

	console.log("Stubbing all the things!");

	console.log("Stubbing S3");
	Mockeroni.stub("S3", {
		listBuckets: (params, callback) => {

			console.log("S3.listBuckets stub");
			callback(null, {
				Buckets: []
			});
		}
	});

	console.log("Stubbing DynamoDB.DocumentClient");
	Mockeroni.stub("DynamoDB.DocumentClient", {
		query: (params, callback) => {

			console.log("DynamoDB.DocumentClient.query stub");
			callback(null, {
				Items: []
			});
		}
	});

});

after(() => {

	console.log("Un-stubbing all the things!");

	Mockeroni.unstub("S3");
	Mockeroni.unstub("DynamoDB.DocumentClient");
});