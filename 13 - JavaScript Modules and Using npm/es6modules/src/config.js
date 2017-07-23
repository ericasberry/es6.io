export const apiKey = 'abc123';

// const apiKey = 'abc123';
// can be renamed on import
// can only have one default export
//export default apiKey;

export const url = 'http://ericasberry.com';

export function sayHi(name) {
  console.log(`Hello there ${name}`);
}

const age = 100;
const dog = 'snickers';
export { age, dog };