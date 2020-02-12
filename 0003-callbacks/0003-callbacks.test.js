// valida retorno de chamada assíncrona
// callbacks

// function fetchData(callback) {
//     setTimeout(function () {
//         callback('peanut butter');
//     }, 1000);
// }

// test('the data is peanut butter', done => {
//     function callback(data) {
//         expect(data).toBe('peanut butter');
//         done();
//     }
//     fetchData(callback);
// });

// ***
// ***
// ***

// valida chamada assíncrona retornando Promise
// promises

function fetchData(callback) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("peanut butter");
      //reject('error');
    }, 1000);
  });
}

// test('the data is peanut butter', () => {
//     return fetchData().then(data => {
//         expect(data).toBe('peanut butter');
//     });
// });

// test('the fetch fails with an error', () => {
//     expect.assertions(1);
//     return fetchData().catch(e => expect(e).toMatch('error'));
// });

// ***

// resolves and rejects

// test('the data is peanut butter', () => {
//     return expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('the fetch fails with an error', () => {
//     return expect(fetchData()).rejects.toMatch('error');
// });

// ***

// async and await

// test('the data is peanut butter', async () => {
//     const data = await fetchData();
//     expect(data).toBe('peanut butter');
// });

// test('the fetch fails with an error', async () => {
//     expect.assertions(1);
//     try {
//         await fetchData();
//     } catch (e) {
//         expect(e).toMatch('error');
//     }
// });

// test('the data is peanut butter', async () => {
//     await expect(fetchData()).resolves.toBe('peanut butter');
// });
