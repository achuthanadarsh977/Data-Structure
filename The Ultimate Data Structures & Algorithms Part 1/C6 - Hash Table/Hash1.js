"use strict";
const map = new Map();
map.set('Apple', 1);
map.set('Banana', 2);
map.set('Grapes', 3);
map.set('Peach', 4);
console.log(map.get('Apple'));
console.log(map.has('Banana'));
for (let key of map.keys()) {
    console.log(key, "→", map.get(key));
}
//# sourceMappingURL=Hash1.js.map