const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const greet = name => `Hello, ${name}!`;
