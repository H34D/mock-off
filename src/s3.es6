import AWS from "aws-sdk";

export const listS3Buckets = cb => {

	const s3 = new AWS.S3();

	s3.listBuckets({}, (err, res) => {

		console.log(res);

		cb();
	});
};