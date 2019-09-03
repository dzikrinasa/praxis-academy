function doSomethingErrorProne() {
if (ourCodeMakesAMistake()) {
throw (new Error('The message'));
} else {
doSomethingToGetAJavascriptError();
}
}
try {
doSomethingErrorProne();
} catch (e) {
console.log(e.name); // logs 'Error'
console.log(e.message); // logs 'The message' or a JavaScript error message
}
