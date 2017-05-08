'use strict';

const Stack = module.exports = require('./linked-list.js');

//O(1)
Stack.prototype.push = function(val) {
  this.insert(val);
  return this;
};

//O(1)
Stack.prototype.pop = function() {
  this.shift();
  return this;
};

//O(1)
Stack.prototype.peek = function() {
  return this.head.val;
};

let stringOne = '{}{{}}';

//O(n)
Stack.prototype.closeBracket = function(string) {
  if([...string].length % 2 !== 0) return false;

  let stack = new Stack();
  
  for(let i = 0; i < string.length; i++) {  
    if (stringOne.charAt(i) === '{' || stringOne.charAt(i) === '(' || stringOne.charAt(i) === '[') {
      stack.push(stringOne.charAt(i));
    } else if (stringOne.charAt(i) === '}' || stringOne.charAt(i) === ')' || stringOne.charAt(i) === ']') {
      stack.pop();
    } else {
      return false;
    }
    return true;
  }
};

let stringTwo = '{()}[)]';

//O(n)
Stack.prototype.mixedCharacters = function(string) {
  if([...string].length % 2 !== 0) return false;

  let stackOne = new Stack();
  let stackTwo = new Stack();
  let stackThree = new Stack();

  for(let i = 0; i < string.length; i++){
    if (stringTwo.charAt(i) === '{') {stackOne.push(stringTwo.charAt(i));}
    else if (stringTwo.charAt(i) === '}') {stackOne.pop();}
    else if (stringTwo.charAt(i) === '(') {stackTwo.push(stringTwo.charAt(i));}
    else if (stringTwo.charAt(i) === ')') {stackTwo.pop();}
    else if (stringTwo.charAt(i) === '[') {stackThree.push(stringTwo.charAt(i));}
    else if (stringTwo.charAt(i) === ']') {stackThree.pop();}
    else return false;
  }
  return true;
};