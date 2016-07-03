import Mockeroni from "./mockeroni";
import {listS3Buckets} from "../src/s3.es6";

describe("S3", () => {

	before(() => {

		console.log("Mocking S3 listBuckets");

		Mockeroni.stub("S3", {
			listBuckets: (params, callback) => {

				console.log("S3.listBuckets mock");
				callback(null, {
					Buckets: [
						{
							Name: "deine",
							CreationDate: "Mon Dec 07 2015 11:13:05 GMT+0100 (Mitteleuropäische Zeit)"
						},
						{
							Name: "mudda",
							CreationDate: "Thu Dec 03 2015 16:05:37 GMT+0100 (Mitteleuropäische Zeit)"
						}
					]
				});
			}
		});
	});

	it("listsBuckets", done => {

		listS3Buckets(done);
	});

});