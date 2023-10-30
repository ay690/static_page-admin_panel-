class LRU {
    constructor(max = 3){
        this.max = max;
        this.cache = new Map();
    }

    get(key){
        let item = this.cache.get(key);

        if(item){
            this.cache.delete(key);
            this.cache.set(key, item);
        }

        return item;
    }

    set(key, value){
        if(this.cache.has(key)){
            this.cache.delete(key);
        }else if(this.cache.size === this.max){
            this.cache.delete(this.first());
        }

        this.cache.set(key, value);
    }

    first(){
        return this.cache.keys().next().value;
    }
}


const LRUcache = new LRU(3);

LRUcache.set("name", "Aniket");
LRUcache.set("Age", "25");
LRUcache.set("profession", "SDE");
console.log(LRUcache.cache);
LRUcache.get("name");
console.log(LRUcache.cache);
LRUcache.set("location", "Mumbai");
console.log(LRUcache.cache);  //just to check if it has been added or not

let obj = {
  name: "ani",
  age: 24,
  address: {
    city: "Thane",
    pincode: 4001107,
  },
};

function flatenObj(obj, parent,res = {}){
    for(let key in obj){
        let propname = parent ? parent + "-" + key : key;

        if(typeof obj[key] === "object"){
            flatenObj(obj[key], propname, res);
        }else{
            res[propname] = obj[key];
        }
    }

    return res;
}

const flatenObjRes = flatenObj(obj);
console.log(flatenObjRes)


function showText(text, time){
    return new Promise((resolve, reject) => {
       setTimeout(()=> {
        resolve(text);
       }, time)
    })
}

function myPromiseAll(promises){
    let result = [];
    let cnt  = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((p) => {
            p.then((res) => {
                result.push(res);
                cnt++;
                if(cnt === promises.length){
                    resolve(result);
                }
            }).catch(err => reject(err))
        })
    })
}

Promise.all([showText("hello", 100), Promise.resolve("hi"), ]).then((val) => console.log(val))
myPromiseAll([showText("hello", 100), Promise.resolve("hi"),]).then((val) => console.log(val))