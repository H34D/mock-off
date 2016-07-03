import AWS from "aws-sdk";
import traverse from "traverse";
import sinon from "sinon";

const _AWS = traverse(AWS);

export default class Mockeroni {

	static _extractObjectAndScope(service) {

		const serviceArray = service.split(".");
		const objectToStub = serviceArray.pop();

		const scope = _AWS.get(serviceArray);

		return {
			object: objectToStub,
			scope
		}
	};

	static stub(service, implementation) {

		const objectAndScope = Mockeroni._extractObjectAndScope(service);

		Mockeroni.unstub(objectAndScope);
		sinon.stub(objectAndScope.scope, objectAndScope.object, () => {

			return implementation;
		});

	};

	static unstub(args) {

		const objectAndScope = typeof args === "string" ? Mockeroni._extractObjectAndScope(args) : args;

		sinon.restore(objectAndScope.scope[objectAndScope.object]);
	};
}
