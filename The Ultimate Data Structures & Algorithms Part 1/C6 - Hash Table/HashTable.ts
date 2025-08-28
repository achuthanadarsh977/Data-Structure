

const hashtable = new Map<Number,String>();


hashtable.set(1,'Tomato');
hashtable.set(2,'Potato');


hashtable.set(3,'Cucumber');

console.log(hashtable.get(1));

console.log(hashtable.has(2))


for (let key of hashtable.keys()){
    console.log(key,"->",hashtable.get(key))
}