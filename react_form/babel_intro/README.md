babel intro

npm init -y
npm install babel; --save-dev doesnt matter for this since we arent going into prod
index.js
// Babel Input: ES2015 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});


