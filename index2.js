let a = [{name: 'Ram',Id:3},{name: 'Shyam',Id:1},{name: 'Ujjwal',Id:2},]

let b = [{name: 'Himanshu',Id:3},{name: 'Prabhanshu',Id:1},{name: 'Mohit',Id:2},]

// const o/p = [{Id:1, name:['Shyam', 'prabhanshu']}, {Id:2, name:['Ujjwal', Mohit']}, {Id:3, name:['Ram', 'Himanshu']}]




let c = [];
for(let i = 0; i < a.length; i++){
    if(Object.entries(a[i])[1][1] === Object.entries(b[i])[1][1]){
      c.push({Id: Object.entries(a[i])[1][1], name: [Object.entries(a[i])[0][1] + " ," +  Object.entries(b[i])[0][1]]});
    }
}

console.log(Object.entries(a[0])[1][0]) 

c.sort(function(a, b){
    if(a.Id < b.Id)
{
    return -1;
}})

console.log(c);
