//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

/*
A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/

//creating promise
//A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.
const promiseOne = new Promise(function (resolve, reject) {
  //what it can do
  //DO a async task
  //DB calls, cyptography, network

  setTimeout(function () {
    // console.log("Async task is complete")
    resolve(); //async task compleated but promise nerver compleated i.e. you never connected the resolve and Then : after calling this  "resolve()" method  resolve and .then is connected after then the promise is consumed
  }, 1000);
});

//how to consume Promise
promiseOne.then(function () {
  // console.log("Promise consumed")
});

//creating promise without storing it to the variable

new Promise(function (resolve, reject) {
  setTimeout(() => {
    // console.log("Aysnc task 2 completed")
    resolve();
  }, 1000);
}).then(function () {
  //consuming/resolving promise
  // console.log("promise 2 consumed")
});

//how to pass data/values form resolve to then
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ userName: "Sudhanshu", emailId: "sudhanshu@gmail.com" }); //pass the data/value as arguments to resolve() method
  }, 1000);
});

promiseThree.then(function (user) {
  //accepting the arguments as parameters
  // console.log(user);
});

//studing rejection of promise
//A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true; //if true -> reject : if false ->resolve
    // suppose trying to access file if accessed then resolve() method is called, if unable to access the file the reject() method is called
    if (!error) {
      resolve({ userName: "Sudhanshu", email: "sudhanshu@gmail.com" });
    } else {
      reject("Somthing went wrong: unable to access the file");
    }
  }, 2000);
});

//Know more about fetch : https://developer.mozilla.org/en-US/docs/Web/API/fetch

//chaining
//we can user multiple then and catch
promiseFour
  .then(function (user) {
    console.log(user);
    return user.userName; //it will return the value to the next then --> this is called chaning
  })
  .then(function (username) {
    //The callback to execute when the Promise is resolved.
    console.log(username);
  })
  .catch(function (error) {
    //The callback to execute when the Promise is rejected.
    console.log(error);
  })
  .finally(function () {
    //Default : The callback to execute when the Promise is settled (fulfilled or rejected).
    console.log("the promise is either resolved or rejected");
  });

//Handing promise using Async await
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "Sudhanshu", pass: 123 });
    } else {
      reject("Somthing went wrong: JS Error");
    }
  }, 1000);
});

//async await does not handle error directly
async function consumePromiseFive() {
  // const response = await promiseFive;
  // console.log(response); //here we cant handle error

  // to handle error use try catch  like below
  try {
    const response = await promiseFive; //waitng for response from promise
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//fetching the data from api using async await
async function getUsers() {
  try {
    const respose = await fetch("https://randomuser.me/api/");
    // fetch(): fetch() method starts the process of fetching a resource from the network, returning a "promise" that is fulfilled once the response is available.
    // fetch returns a Promise
    //it will take sometime to fetch data so use "await"

    const data = await respose.json(); // converting the response to JSON will also take some time so using await
    console.log(respose);
  } catch (error) {
    console.log("e: " + error);
  }
}
// getUsers()

//fetching the data using Then and Catch
fetch("https://randomuser.me/api/") //fetch() returns a promise
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    return data.results;
  })
  .then(function (results) {
    return results[0].name;
  })
  .then(function (fullname) {
    console.log(`${fullname.first} ${fullname.last}`);
  })
  .catch(function (error) {
    console.log(error);
  });
