// import './components/Todos';

// import { Timer } from './widget/timer';
// import { Clock } from './widget/clock';

// const timer1 = new Timer({ selector: '.timer-1' });
// const timer2 = new Timer({ selector: '.timer-2', start: 20 });
// const timer3 = new Timer({ selector: '.timer-3', start: 30 });

// const clock = new Clock({ selector: '.clock' });

// ------- new Promise -------
// const fn1 = () =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log('fn 1');
//       resolve(1);
//     }, 700);
//   });

// const fn2 = x =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log('fn 2');
//       resolve(x + 1);
//     }, 450);
//   });

// const fn3 = x =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log('fn 3');
//       resolve(x + 1);
//     }, 500);
//   });

// const fn4 = x =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log('fn 4');
//       resolve(x + 1);
//     }, 500);
//   });

// fn1()
//   .then(res => {
//     return fn2(res);
//   })
//   .then(res => fn3(res))
//   .then(fn4)
//   .then(res => {
//     console.log(res);

//     return res;
//   })
//   .then(res => {
//     console.log(res);
//   });

// ----- Promise reject -----
// const fn1 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('fn 1');

//       reject('error happened');
//     }, 700);
//   });

// console.log('spinner on');
// fn1()
//   .catch(error => {
//     console.log('error:', error);
//   })
//   .finally(() => {
//     console.log('spinner off');
//   });

// console.log('spinner on');
// fetch('https://hn.algolia.com/api/v1/search?query=cats')
//   .then(res => {
//     return res.json();
//   })
//   .then(data => {
//     console.log(data);
//   });
// console.log('spinner off');

// ----- Promise.all / allSettled -------
// const fn1 = () =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log('fn 1');
//       resolve(1);
//     }, 700);
//   });

// const fn2 = () =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log('fn 2');
//       resolve(2);
//     }, 450);
//   });

// const fn3 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('fn 3');
//       reject('error happened');
//     }, 500);
//   });

// const fn4 = () =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log('fn 4');
//       resolve(4);
//     }, 460);
//   });

// console.log('start');

// // fn1()
// //   .then(fn2)
// //   .then(fn3)
// //   .then(fn4)
// //   .then(() => {
// //     console.log('finish');
// //   });

// Promise.all([fn1(), fn2(), fn3(), fn4()])
//   .then(res => {
//     console.log('finish:', res);
//   })
//   .catch(error => {
//     console.log('error:', error);
//   });

// Promise.allSettled([fn1(), fn2(), fn3(), fn4()])
//   .then(res => {
//     console.log('finish:', res);
//   })
//   .catch(error => {
//     console.log('error:', error);
//   });

// ------ Promise.resolve / Promise.reject ------
// [ { name: 'Bobby', age: 15 }, { name: 'Peter', age: 20 } ]

// const getData = () => {
//   const mockData = [
//     { name: 'Bobby', age: 15 },
//     { name: 'Peter', age: 20 },
//   ];

//   return Promise.resolve(mockData);
//   // return Promise.reject('error happened');
// };

// const doSomething = () => {
//   getData()
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.log('error:', error);
//     });
// };

// doSomething();

// ----- Promise.resolve ------
// const sayHello = (isOk = true) => {
//   console.log('Hello');

//   return isOk ? Promise.resolve() : Promise.reject('error happaned');
// };

// const sayBye = () => {
//   console.log('Bye');
// };

// sayHello().then(() => {
//   sayBye();
// });

// sayHello(false)
//   .then(() => {
//     sayBye();
//   })
//   .catch(error => {
//     console.log('error:', error);
//   });

// // ---- hw 6 ----
const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const header = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li');

  console.log(`Category: ${header}`);
  console.log(`Elements: ${elements.length}`);
});
