import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
// default import
//import apiKey from './src/config';
// name dimport
import { apiKey as key, url, sayHi, age, dog } from './src/config';
/*
console.log(key);
console.log(url);
sayHi('Eric');
console.log(age);
console.log(dog);

const ages = [1,1,4,52,12,4];
console.log(uniq(ages));
*/

import User, { createURL, gravatar } from './src/user';
const eric = new User('Eric Asberry', 'eric@ericasberry.com', 'ericasberry.com');
const profile = createURL(eric.name);
console.log(profile);
const image = gravatar(eric.email); 
console.log(image);