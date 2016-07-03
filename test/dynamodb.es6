import AWS from "aws-sdk-mock";
import {query} from "../src/dynamodb";

AWS.mock('DynamoDB.DocumentClient', 'query', (params, callback) => {

	callback(null, {
		Items: [
			{
				"SVC_PIRS_ABS": "FINISHED",
				"SVC_PDFGEN_SUMMARY": "FINISHED",
				"SVC_PDFGEN_LEGI": "FINISHED",
				"SVC_PIMS": "FINISHED",
				"SVC_PIMW": "FINISHED",
				"SVC_PIAS_legidata": "FINISHED",
				"SVC_PIRS_UEKA": "FINISHED",
				"SVC_EMAIL": "FINISHED",
				"SVC_PIAS_formdata": "FINISHED",
				"timestamp": "1467288046568",
				"registrationId": "TESTID"
			}
		]
	});
});

describe("dynamoDB", () => {

	it("query", done => {

		query(done);
	});

});