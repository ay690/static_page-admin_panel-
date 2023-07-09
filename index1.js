// let arr = [1, 2, 3, 4, 6];  //even numbers in array
// console.log(arr)
// arr = arr.filter((el, i) => {
//  return el % 2 === 0;
// });
// console.log(arr)

// let arr = [1, 2, 3, 4, 6];  //even places elements in an array
// console.log(arr)
// arr = arr.filter((el, i) => {
//  return i % 2 === 0;
// });
// console.log(arr)

//Map polyfill
// let arr = [1, 2, 3, 4];
// console.log(arr)

// function myMap(arr, cb){
//     let newArr = [];

//     for(let i = 0; i < arr.length; i++){
//         newArr.push(cb(arr[i]));
//     }

//     return newArr;
// }

// function square(x){
//     return x * x;
// }

// console.log(myMap(arr, square));

//Filter Polyfill
// let arr = [1, 2, 3, 4, 6];
// console.log(arr)

// function filterPolyFill(ar, cb){
//     let filteredArr = [];

//     for(let i = 0; i < arr.length; i++){
//       if(cb(arr[i])){
//         filteredArr.push(arr[i]);
//       }
//     }

//     return filteredArr;
// }

// function isEven(x){
//     return x % 2 === 0;
// }

// console.log(filterPolyFill(arr, isEven));

//Reduce Polyfill
// let arr = [1, 2, 3, 4, 6];
// console.log(arr);

// function reducePolyfill(arr, cb, acc){

//   for(let i = 0; i < arr.length; i++){
//     acc = cb(acc, arr[i]);
//   }
//   return acc;
// }

// function sum(acc, x){
//   acc += x;
//   return acc;
// }

// console.log(reducePolyfill(arr, sum, 0));

// let arr = [1, 2, 3, 4, 6];
// console.log(arr);
// const newarr = arr.reduce((acc, currentValue) => {
//    return acc + currentValue
// }, 0)

// console.log(newarr);

// let arr = [1, 2, [3, 4, 5], [6, 7], 8, [9, 10, 11]];

// //item is an array or
// //is it a number

// const flattenArr = (arr) => {
//   let someArr = arr.reduce((acc, item) => {
//     if (Array.isArray(item)) {
//       acc = acc.concat(item);
//     } else {
//       // acc.push(item);
//       acc = [...acc, item];
//     }
//     return acc;
//   }, []);

//   return someArr;
// };

// console.log(flattenArr(arr));

//Call, apply, bind -> with this you can manipulate the context of the function

// let person1 = {
//     name: "ani",
//     age: 24
// }

// let showDetails = function(city, car) {
//     console.log(`${this.name} is ${this.age} years old, lives in ${city} and drives ${car} car`);
// }

// showDetails.call(person1, "Mumbai", "Audi-Q7");
// showDetails.apply(person1, ["Mumbai", "Audi-Q7"]);
// let showDetailsBind =  showDetails.bind(person1, "Mumbai", "Audi-Q7");
// showDetailsBind();

//Bind Polyfill

// let person1 = {
//   name: "ani",
//   age: 24,
// };

// let showDetails = function (city, car) {
//   console.log(
//     `${this.name} is ${this.age} years old, lives in ${city} and drives ${car} car`
//   );
// };

// Function.prototype.myBind = function (...args) {
//   let obj = this;
//   params = args.slice(1);
//   return function (...args2) {
//     obj.apply(args[0], [...params, ...args2]);
//   };
// };

// let showDetailsBindRes = showDetails.myBind(person1, "Mumbai");
// showDetailsBindRes("Audi-Q7");

// let obj = {
//   name: "ani",
//   age: 24,
//   address: {
//     city: "Thane",
//     pincode: 4001107,
//   },
// };

// function flatenObj(obj, parent, res = {}){
//   for(let key in obj){
//     let propName = parent ? parent + "_" + key : key;
//     if(typeof obj[key] === "object"){
//        flatenObj(obj[key], propName, res); //making recursive calls
//     }else{
//       res[propName] = obj[key];
//     }
//   }
//   return res;
// }

// const flatenObjRes = flatenObj(obj);
// console.log(flatenObjRes);

// let arr = [1, 2, [3, [4, [5]]], [6, 7], 8, [9, 10, 11]];

// function customFlat(arr, depth){
//   let res = [];

//   arr.forEach(ele => {
//      if(Array.isArray(ele) && depth > 0){
//       res.push(...customFlat(ele, depth - 1));
//      }else{
//       res.push(ele);
//      }
//   });
//   return res;
// }

// console.log(customFlat(arr, 3));



//LRU(Least Recently used) cache

// class LRU {
//   constructor(max = 5){
//     this.max = max;  //cache size
//     //we will have a cache which contains all the elements 
//     this.cache = new Map();

//     //now we will create a function that sets the value inside the map and
//     // which gets a particular value from this map
//   }

//   //we also need to make a get function which will take a key and it will return a value
//   get(key){
//     let item = this.cache.get(key); //so this will take the key from that cache map

//     //if key exist then we are deleting this key and bringing it to the top in short we are refreshing this key making it a recently used key
//     if(item){
//       this.cache.delete(key);
//       this.cache.set(key, item);
//     }

//     //and after this we will return the item that we have fetched
//     return item;
//   }

//   set(key, value){
//     //if key already exits in a map if it exists then we will replace it with the key passed in our argument
//     if(this.cache.has(key)){
//       this.cache.delete(key);
//     }else if(this.cache.size === this.max){  //if it has reached the maximun size
//        this.cache.delete(this.first()); //we will delete the first element which is least recently used
//     }

//     //after you have deleted it you can set the key and value that are present in out arguments of set function
//     this.cache.set(key, value);
//   }

//   first(){
//     return this.cache.keys().next().value; //it's going to take all the keys and the return the first value
//   }

// }

// const LRUcache = new LRU(3);

// LRUcache.set("name", "Aniket");
// LRUcache.set("Age", "25");
// LRUcache.set("profession", "SDE");
// console.log(LRUcache.cache);
// LRUcache.get("name");
// console.log(LRUcache.cache);
// LRUcache.set("location", "Mumbai");
// console.log(LRUcache.cache);  //just to check if it has been added or not


// let obj = {
//   a:{
//     b:{
//       c:[1,2,3]
//     }
//   }
// }

// function get(obj, strringPath){
//   if(!strringPath || strringPath.length === 0){
//     return undefined;
//   }
   
//   let excludedChar = ['[', ']', '.'];
//   let keys = [];

//   for(let i = 0; i < strringPath.length; i++){
//     if(!excludedChar.includes(strringPath[i])){
//       keys.push(strringPath[i]);
//     }
//   }

//   let value = keys.reduce((obj, key) => {
//       return obj[key];
//   }, obj)

//   return value;

// }


// console.log(get(obj, 'a.b.c'));
// console.log(get(obj, 'a.b.c.0'));
// console.log(get(obj, 'a.b.c[1]'));
// console.log(get(obj, ['a', 'b', 'c', '2']));
// console.log(get(obj, 'a.b.c[3]'));
// console.log(get(obj, 'a.c'));



//Promise.all 
function showText(text, time){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
           resolve(text);
        }, time)
    })
}

//Promise.all Polyfill

function myPromiseAll(promises){
  let result = [];  
  let cnt = 0;
  
  //make result array where you will store all your promises 
  //then return new promise(just like showText function above) and apply foreach loop
 
  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
        p.then((res) => {
            result.push(res);
            cnt++
            if(cnt === promises.length){
                resolve(result);
            }
        }).catch((err) => reject(err));
    });
  })
}

// Promise.all([showText("hello", 1000), Promise.resolve("hi"), Promise.reject("bye")]).then((val)=>console.log(val))
myPromiseAll([showText("hello", 2000), Promise.resolve("hi")]).then((val)=>console.log(val))