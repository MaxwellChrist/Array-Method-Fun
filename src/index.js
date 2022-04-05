// const runners = [
//   {
//     id: 1,
//     first_name: "Alice",
//     last_name: "Adams",
//     email: "aa@aol.com",
//     shirt_size: "M",
//     company_name: "Applebees",
//     donation: 30
//   },
//   {
//     id: 2,
//     first_name: "Ben",
//     last_name: "Benjamin",
//     email: "bb@aol.com",
//     shirt_size: "2XL",
//     company_name: "Benihana",
//     donation: 40
//   },
//   {
//     id: 3,
//     first_name: "Carlos",
//     last_name: "Christ",
//     email: "cc@aol.com",
//     shirt_size: "S",
//     company_name: "Checkers",
//     donation: 100
//   },
//   {
//     id: 4,
//     first_name: "David",
//     last_name: "Duke",
//     email: "dd@aol.com",
//     shirt_size: "XL",
//     company_name: "Dave and Busters",
//     donation: 10
//   },
//   {
//     id: 5,
//     first_name: "Edmund",
//     last_name: "Ellington",
//     email: "ee@aol.com",
//     shirt_size: "L",
//     company_name: "EEE",
//     donation: 20
//   }
// ];

// const shirtOrder = [];
// runners.forEach((item) => {
//   return shirtOrder.push(`${item.last_name} - ${item.shirt_size}`);
// });
// console.log(shirtOrder);

// const shirtOrder2 = runners.map((item) => {
//   return `${item.last_name} - ${item.shirt_size}`;
// });
// console.log(shirtOrder2);

// const shirtOrder3 = [];
// for (let i = 0; i < runners.length; i++) {
//   let newOrder = `${runners[i].last_name} - ${runners[i].shirt_size}`;
//   shirtOrder3.push(newOrder);
// }
// console.log(shirtOrder3);
////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
  In this file you have a nice data set that is designed to help you get used to using 
  common JS array methods. We're going to re-use this data across multiple problems.
  Before looking into the problems go ahead and familiarize yourself with the data provided.
  This exercise will prepare you for important web development tactics in the future. 
  Before beginning a problem I always look at the data I'm dealing with first. 

  Lets consider this scenario. You have a boss that is trying to articulate some data that has been given to him.
  The following data set is just too much for your bosses eye's to comprehend. So we need to change the model.
  Your needy boss is looking for few very specific data sets that only you can provide.
  You tell him you're the right person for the job and get to work!
*/
const animals = [
  {
    type: "mouse",
    size: "small",
    weight: 1
  },
  {
    type: "dog",
    size: "small",
    weight: 10
  },
  {
    type: "lion",
    size: "medium",
    weight: 150
  },
  {
    type: "elephant",
    size: "big",
    weight: 5000
  },
  {
    type: "tiger",
    size: "medium",
    weight: 400
  },
  {
    type: "bat",
    size: "small",
    weight: 8
  },
  {
    type: "pig",
    size: "small",
    weight: 40
  }
];

/*
  Problem 1: Map the data.
  Give me an array that only has the animal 'type's in it.
  Give me an array full of 'obects' of all the animal's weights and sizes. 
  We're looking for two new arrays here.
*/

// Code for problem 1 goes here
// const array1 = animals.map((item) => {
//   return item.type;
// });
// console.log(array1);

// let array2 = animals.map((item) => {
//   return `${item.weight} - ${item.size}`;
// });
// array2 = new Set(array2);
// console.log(array2);
/*
  Problem 2: Filter the data.
  Lets say you wanted to provide yourself with a few 'sample' sets of data that you can use for some research.
  Well lets get rid of the items in this array that you don't need so you can focus on what's important.
  Give me an array of the data where the animals are 'size' small
  Give me an array of the data where the animals are of weight 'less than' 100.
  Give me an array of the data where the animals are of weight 'greater than' 100.
*/

// Code for problem 2 goes here
/*
const starterArray = animals.map((item) => {
  return `${item.type} - ${item.size} - ${item.weight}`;
});
// console.log(starterArraystarterArray);

const newArray1 = starterArray.filter((item) => {
  return item.includes("small");
});
console.log(newArray1);

const newArray2 = animals.filter((item) => {
  return item.weight < 100;
});
// console.log(newArray2);

const modifiedNewArray2 = newArray2.map((item) => {
  return `${item.type} - ${item.size} - ${item.weight}`;
});
console.log(modifiedNewArray2);

const newArray3 = animals.filter((item) => {
  return item.weight > 100;
});
// console.log(newArray3)

const modifiedNewArray3 = newArray3.map((item) => {
  return `${item.type} - ${item.size} - ${item.weight}`;
});
console.log(modifiedNewArray3);
*/

/*
  Problem 3: Reduce the data.
  Reduce is awesome. 
  It's commonly used in functional JavaScript to take a data set and reduce that set down to a singlular representation of that data set.
  can you say `averages` anyone?
  Give me an array of all the 'weights of the animals' added up.
  Give me an array of all the 'mean average weights` of the animals. (this may have 2 steps)

*/
const tryThis = animals.reduce((prev, current) => {
  return prev + current.weight;
}, 0);
const why = [];
why.push(tryThis);
// console.log(why);

const tryThis2 = animals.reduce((prev, current) => {
  return prev * current.weight;
}, 1);
console.log(tryThis2);

const why2 = [];
const div = animals.length;
why2.push(tryThis2 / div);
console.log(why2);
