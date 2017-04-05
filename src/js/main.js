import GreatDane from './GreatDane';

console.log('');
console.log('');
console.log('');
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
console.log('MY AWESOME APP');
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
console.log('');


const cora = new GreatDane();
console.log('Cora', cora);

const river = new GreatDane({color:'harlequin'});
console.log('River', river);

cora.bark();
river.bark();