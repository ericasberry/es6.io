console.log('it worked!');

import { sum, kebabCase } from 'npm:lodash';
import { addTax } from './checkout';

console.log(kebabCase('Eric is sooooo cool'));

console.log(addTax(100, 0.15));