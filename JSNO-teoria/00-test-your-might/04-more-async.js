/**
 * 4.1
 *
 * Nie modyfikując funkcji getVatTaxRateFromServer,
 * wywołaj ją i przekaż odpowiedni callback
 * tak, aby odebrać wartość podatku i przeliczyć ceny po uwzględnieniu VAT
 * wymyśl te cenę — np. wartość koszyka = 300 zł
 *
 * Przykładowo pokazanie wyniku:
 * console.log(300 + 300 * vatRate) // gdzie vatRate to odebrany argument z callback
 * */

function getVatTaxRateFromServer(calculations) {
	calculations(0.23)
}


/**
 * 4.2
 *
 * Czy potrafisz napisać odpowiednik funkcji getVatTaxRateFromServer, ale zwracający Promise ?
 * */



