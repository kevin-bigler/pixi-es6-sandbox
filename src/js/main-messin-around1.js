import TestDependancy, {nintendo as coolClub} from './TestDependancy';
import NestedDependancy, {poodle} from './pkg/NestedDependancy';

let foo = 'baz';
let xyz = '123';
// test
let another = 'another';

console.log(foo + ' is awesome! ');

console.log(`but is ${xyz} awesome?`);

let {x,y,z} = {x:'a',y:'2',z:42};

console.log(`x: ${x}`);
console.log(`y: ${y}`);
console.log(`z: ${z}`);

console.log(`TestDependancy: ${TestDependancy}`);
console.log(`nintendo is: ${coolClub}`);

console.log(`NestedDependancy: ${NestedDependancy}`);
console.log('123');

console.log(`poodle: ${JSON.stringify(poodle)}`);