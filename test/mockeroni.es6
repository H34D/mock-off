import AWS from "aws-sdk";
import sinon from "sinon";

export default class Mockeroni {

	static _extractObjectAndScope(service) {

		const serviceArray = service.split(".");
		const objectToStub = serviceArray.pop();
		const serviceString = serviceArray.join(".");

		const scope = serviceString ? AWS[serviceString] : AWS;

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
