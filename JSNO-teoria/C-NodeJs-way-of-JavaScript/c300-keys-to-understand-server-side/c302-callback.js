/*
* patrz również: b401-callbacks.js
*
* Callbackiem nazywamy taką funkcję, która zostanie przekazana i wywołana przez inną.
*
* Zobaczmy kilka przykładów z życia wziętych:
* */

[1, 2, 3, 4].forEach(e => {
	console.log(e)
})

callMeBack(time => {
	console.log(`Hello ${time} time !`);
})


function callMeBack(callbackFn) {
	callbackFn('1st');
	callbackFn('2nd');
}
