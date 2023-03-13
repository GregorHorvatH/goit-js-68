import './components/Todos';

// ----- asyn/await -------
const fn1 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log('fn 1');
      resolve(1);
    }, 700);
  });

const fn2 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log('fn 2');
      resolve(2);
    }, 450);
  });

const fn3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('fn 3');
      resolve(3);
      // reject('error in fn 3');
    }, 500);
  });

const fn4 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log('fn 4');
      resolve(4);
    }, 460);
  });

// console.log('start');
// fn1()
//   .then(() => fn2())
//   .then(() => fn3())
//   .then(() => fn4())
//   .catch(error => {
//     console.log('error:', error);
//   })
//   .finally(() => {
//     console.log('finish');
//   });

// const mainFn = async () => {
//   console.log('start');

// try {
//   await fn1();
//   await fn2();
//   await fn3();
//   await fn4();
// } catch (error) {
//   console.log('error:', error);
// }

//   try {
//     const result = await Promise.all([fn1(), fn2(), fn3(), fn4()]);
//     console.log(result);
//   } catch (error) {
//     console.log('error:', error);
//   }

//   console.log('finish');
// };

// mainFn();
