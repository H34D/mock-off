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

		Mockeroni.unstub(service);
		sinon.stub(objectAndScope.scope, objectAndScope.object, () => {

			return implementation;
		});

	};

	static unstub(service) {

		const objectAndScope = Mockeroni._extractObjectAndScope(service);

		sinon.restore(objectAndScope.scope[objectAndScope.object]);
	};
}
