import AWS from "aws-sdk";

export const listS3Buckets = cb => {

	const s3 = new AWS.S3();

	s3.listBuckets({}, (err, data) => {

		if (err) {

			console.error("Unable to list buckets. Error:", JSON.stringify(err, null, 2));
		} else {

			console.log("Listbuckets succeeded.");
			console.log(JSON.stringify(data.Buckets, null, 2));

			cb();
		}
	});
};