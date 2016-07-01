import AWS from "aws-sdk-mock";
import {listS3Buckets} from "../src/s3.es6";

AWS.mock('S3', 'listBuckets', function (params, callback) {

	callback(null, {
		Buckets: [
			{
				Name: 'deine',
				CreationDate: "Mon Dec 07 2015 11:13:05 GMT+0100 (Mitteleuropäische Zeit)"
			},
			{
				Name: 'mudda',
				CreationDate: "Thu Dec 03 2015 16:05:37 GMT+0100 (Mitteleuropäische Zeit)"
			}
		]
	});
});

describe("", () => {

	it("listsBuckets", done => {

		listS3Buckets(done);
	});
	
	
});