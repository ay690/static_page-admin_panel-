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