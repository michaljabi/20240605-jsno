import '../style.css'
import { H2Sample } from './components/h2-sample';

document.querySelector('#app').append(
	H2Sample({title: 'Dodatkowy nagłówek #2 poziomu...'}),
	H2Sample({title: '... i kolejny nagłówek #2 ', sign: '🍄'}),
);
