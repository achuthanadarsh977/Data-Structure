



const map = new Map<string,number>();


map.set('Apple',1);

map.set('Banana',2);


map.set('Grapes',3);

map.set('Peach',4);

console.log(map.get('Apple'));

console.log(map.has('Banana'));



for (let key of map.keys()) {
  console.log(key, "→", map.get(key));
}
