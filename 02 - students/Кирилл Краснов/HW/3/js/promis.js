// const async = (a, callback) => {
//     setTimeout(() => {
//         const b = a + 1;
//         callback(b);
//         // return b
//     }, 200);
// }

// async(5, (b) => console.log(b));


// const async = (a) => {
//     return promis = new Promise((rs, rj) => {
//         setTimeout(() => {
//             if (a) {
//                 const b = a + 1;
//                 rs(b);
//             } else {
//                 rj('error');
//             }
//         }, 200);
//     });
// }

// async(5).then((x) => {
//     console.log(x);
// }, (err) => {
//     console.log(err);
// }
// );

// async().then((x) => {
//     console.log(x);
// }, (err) => {
//     console.log(err);
// }
// );
let url='';
const makeGETRequest = (url) => {
    return new Promis((rs, rj) => {
        if (url) {
            rs(JSON.parse(url));
        } else {
            rj('error');
        }
    });
}