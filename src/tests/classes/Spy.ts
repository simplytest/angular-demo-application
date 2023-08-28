export class Spy {
	static on(object: any, functionName: string) {
		let spyObject = object;
		if("get" in object) spyObject = object.get();
		spyOn(spyObject, functionName);
	}
}
