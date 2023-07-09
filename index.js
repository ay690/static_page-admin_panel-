// //map

// // let arr = [1, 2, 3, 4];
// let arr = [1, 2, 3, 4];

// function myMap(arr, cb){

//     let newArr = []

//     for(let i = 0; i < arr.length; i++){

//             newArr.push(cb(arr[i]));

//     }

//     return newArr
// }

// function square(x){
//     return x * x;
// }

// // console.log(myMap(arr, square))

// //filter polyfll

// function filterPloy(arr, cb){
//     let filteredArr = []
//     for(let i = 0; i < arr.length; i++){
//         if(cb(arr[i])){
//             filteredArr.push(arr[i])
//         }
//     }

//     return filteredArr
// }

// function isEven(x){
//     if(x % 2 === 0){
//         return x
//     }
// }

// console.log(filterPloy(arr, isEven))

// //reduce polyfill

// function reducePoly(arr, cb, accu){

//  for(let i = 0; i< arr.length; i++){
//     accu = cb(accu, arr[i]);
//  }

//  return accu;

// }

// function sum(acc, x){
//     acc += x;
//     return acc;
// }

// console.log(reducePoly(arr, sum, 0))
// FLATTEN ARRAY

// let arr = [1, 2, [3, 4, 5], [6, 7], 8, [9, 10, 11]];

// const flattenArr = (arr) => {
//   let someArr = arr.reduce((acc, item) => {
//     //if item is an array
//     //or the item will be number
//     if (Array.isArray(item)) {
//       acc = acc.concat(flattenArr(item));
//     } else {
//       // acc.push(item); or
//       acc = [...acc, item];
//     }
//     return acc;
//   }, []);

//   return someArr;
// };

// console.log(flattenArr(arr));


// let person1 = {
//     name: "abc",
//     age:'23',
// }

// let showDetails = function(city, state){
//     console.log(this.name + " is " + this.age + " years old"  + " " + city +  " " + state); 
// }

// // let showBind = showDetails.bind(person1, "Mumbai");
// // console.log(showBind("mh"))

// Function.prototype.myBind = function(...args){
//     let obj = this;
//     params = args.slice(1)
//     return function(...args2){
//        obj.apply(args[0], [...params, args2])
//     }
// }

// let showBind = showDetails.myBind(person1, "Mumbai");
// showBind("Mh")


let a = [{name: 'Ram',Id:3},{name: 'Shyam',Id:1},{name: 'Ujjwal',Id:2},]

let b = [{name: 'Himanshu',Id:3},{name: 'Prabhanshu',Id:1},{name: 'Mohit',Id:2},]

// const o/p = [{Id:1, name:['Shyam', 'prabhanshu']}, {Id:2, name:['Ujjwal', Mohit']}, {Id:3, name:['Ram', 'Himanshu']}]




let c = [];
for(let i = 0; i < a.length; i++){
    if(Object.entries(a[i])[1][1] === Object.entries(b[i])[1][1]){
      c.push({Id: Object.entries(a[i])[1][1], name: [Object.entries(a[i])[0][1] + " ," +  Object.entries(b[i])[0][1]]});
    }
}

c.sort(function(a, b){
    if(a.Id < b.Id)
{
    return -1;
}})

console.log(c);


// ......***************************************......

import "./styles.css";
import { useEffect, useState } from "react"
import axios from "axios";

export default function App() {
 const [user, setUser] = useState(null);

//  useEffect(() => {
//    const fetchData = async () => {
//      try {
//        const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
//        setUser(res.data);
       
//      } catch (error) {
//        console.log(error)
       
//      }
//    }
//    fetchData()
//  }, [])

useEffect(() => {
  axios.get(`https://jsonplaceholder.typicode.com/todos/1`).then((res) => setUser(res.data)).catch((err) => console.log(err))
}, [])


  return (
    <div className="App">
      <h1>Users form api</h1>
      {
        user ? (
          <>
          <h1>{JSON.stringify(user)}</h1>
          <h1>{user.title}</h1>
          </>
        ) : (
         <h1> Loading ...... </h1>
        )
      }
    </div>
  );
}



