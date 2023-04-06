// setinterval
// setinterval allows you to execute a chunk of code every time a specified
// amount of millisecond passes.

// print hello world after every 1 sec
const myinterval = setInterval(() => {
    console.log('Hello World');
}, 1000); // 1000 millisecond - 1 sec
clearInterval(myinterval); // clears interval after certain action

// setTimeout - allows you to wait a cetain amount of time before executing a 
// chunk of code
// other code out of timout will continue its execution as normal

// wait for 2 sec and then print hi
const timeout = setTimeout(() => {
    console.log('Hi');
}, 2000);
clearTimeout(timeout);

// What is synchronous javascript ?
// -> synchronous javascript is one in which the code is executed line by line and
// and their tasks are completed instantly, i.e there is not time delay in the 
// completion of the tasks for those lines of code.

// synchronous code example 
const functionone = () => {
    console.log('function one');
    functiontwo();
    console.log('function one part 2');
}
const functiontwo = () => {
    console.log('function two');
}
functionone();
// outtput - function one
// function two
// function one part 2

// asynchronous code example
const functionone1 = () => {
    console.log('function one');
    functiontwo2();
    console.log('function one part 2');
}
const functiontwo2 = () => {
    setTimeout(() => console.log('function two'), 3000); // wait for 3 sec
}
functionone1();
// output - function one
// function one part 2
// function two

// asynchronous javascript - is one in which some lines of code take time to run.
// these tasks are run in the background while the javascript engine keeps 
// executing other lines of code. when the result of the asynchronous task get available
// is then used in the program.

// callback

// const fetchuser = (username, callback) => {
//     console.log('fetching...');
//     setTimeout(() => {
//         console.log('now we have the user');
//         callback({username});
//     },2000);
// }
// fetchuser('michael', (user) => {
//     console.log(`your name is: ${user.username}`);
// });

// -----------------------------------------------
// const fetchuser = (username, callback) => {
//     console.log('fetching...');
//     setTimeout(() => {
//         console.log('[now we have the user]');
//         callback({username});
//     },2000);
// }
// const fetchuserphotos = (username, callback) => {
//     setTimeout(() => {
//         console.log(`[Now we have the photos for ${username}]`);
//         callback(['Photo 1', 'Photo 2']);
//     },2000);
// }
// const fetchphotodetails = (photo, callback) => {
//     setTimeout(() => {
//         console.log(`[Now we have the photos details for the photo ${photo}]`);
//         callback('Details....');
//     },2000);
// };

// fetchuser('michael', (user) => {
//     console.log(`your name is: ${user.username}`);
//     fetchuserphotos(user.username, (userphotos) => {
//         console.log(`your photos are: ${userphotos}`);
//         fetchphotodetails(userphotos, (details) => {
//             console.log(`Your photo details are: ${details}`);
//         })
//     });
// });
// -------------------------------------------------------
// this is known as callback hell. functions inside functions because one depend on
// another and weird structure is created. functions keep moving to right.
// so we need to use promises.

// promises - promises are objects that return the successfully fetched data, or the error
/*
const fetchuser = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('[Now we have the user]');
        resolve({username: 'Michael'});
        // reject('User not found');
    },2000);
});
fetchuser
        .then((user) => console.log(user.username));
     // .catch((error) => console.log(error));
*/

const fetchuser = (username) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`[Now we have the user ${username}]`);
            resolve({username});
        }, 2000);
    });
}

const fetchuserphoto = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`[now we have the photos for ${username}]`);
            resolve(['photo1', 'photo2']);
        }, 2000);
    });
};

const fetchphotodetails = (photo) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            console.log(`Now we have the photo details of ${photo}`);
            resolve('Details ... ');
        }, 2000);
    });
};
// promise method
/*
fetchuser('Michael')
    .then((user) => fetchuserphoto(user.username))
    .then((photo) => fetchphotodetails(photo))
    .then((details) => console.log(`Your photo details are ${details}`))
*/

    // [Now we have the user Michael]
// [now we have the photos for Michael]
// Now we have the photo details of photo1,photo2
// Your photo details are Details ... 

// async / await 
// async functions returns promises !!!

/*
const fetchnumber = async () => {
    return 25;
}
const consolefetchednumber = async () => {
    const number = await fetchnumber();
    console.log(number); //25
}
consolefetchednumber();
*/


// async - await method 
const displaydata = async () => {
    const user = await fetchuser('Michael');
    const photos = await fetchuserphoto(user.username);
    const details = await fetchphotodetails(photos);
    console.log(details);
}
displaydata();