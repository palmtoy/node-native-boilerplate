var NativeExtension = require('./');

console.log(NativeExtension.aString());
console.log(NativeExtension.aBoolean());
console.log(NativeExtension.nothing());
console.log();

console.log(NativeExtension.aNumber());
console.log(NativeExtension.anObject());
console.log(NativeExtension.anArray());
console.log();

console.log(NativeExtension.callback);

NativeExtension.callback(function() {
	console.log('Hello World');
});

