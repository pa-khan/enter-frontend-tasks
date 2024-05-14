// Какой порядок вывода в консоль?

console.log("Start");

setTimeout(function () {
  console.log("Timeout 1");
}, 0);

setTimeout(function () {
  console.log("Timeout 2");
}, 0);

Promise.resolve().then(function () {
  console.log("Promise 1");
});

console.log("End");

queueMicrotask(function () {
  console.log("Microtask 1");
});
