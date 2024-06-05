/*
* Wyrażenie funkcji — Function Expression
* to taka konstrukcja funkcji, w której funkcja nie musi posiadać nazwy, może być ANONIMOWA.
* */

// Oto najprostsza postać:

const fnExpressionArrow = () => {};

// Oto klasyczna postać:

const fnExpression = function () {};

// Funkcje te nie są nazwane. Owszem możemy je wywołać:

fnExpression();
fnExpressionArrow();

// Jednak to wywołanie jest możliwe tylko dzięki istniejącym `const` - referencjom do funkcji!

/*
*
* Należy jednak pamiętać, że istnienie takiej referencji nie musi być zawsze jako `const` czy `let`,
* a więc stała albo zmienna. Może to być równie dobrze -> parametr.
*
* W tym układzie wyrażenie funkcji będzie argumentem przekazanym do innej funkcji.
* Jest to tzw. callback
* */

willFire(() => {
	console.log('Hello !')
})

// W tym układzie `willFire` przyjmuje callback i go wywołuje.
// Należy jednak zwrócić uwagę, że cała ta konstrukcja arrow, przekazana do callback'a, to właśnie WYRAŻENIE FUNKCYJNE.

function willFire(callback) {
	callback();
}
