class Hashample{
    private map: Map<string,number>

    constructor(){
        this.map = new Map<string,number>();
    }

    put(key:string,value:number):void{

        this.map.set(key,value);
    }

    get(key:string):number | undefined{
        return this.map.get(key);
    }

    containskey(key:string):boolean{
        return this.map.has(key);
    }


    remove(key:string):void{
        this.map.delete(key)
    }

    print():void{
        for(let [key,value] of this.map){
            console.log(`${key}:${value}`)

        }
    }
}

const a = new Hashample();
a.put("Alice",25);
a.put("John",23);
a.put("KJ",34);
a.put('Jack',45);
console.log(a.containskey('Jack'))
console.log(a.get('Alice'))
a.remove('Alice')
a.print()
