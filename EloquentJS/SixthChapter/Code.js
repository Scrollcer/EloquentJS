//-----------------------------------------------------
//First task
//-----------------------------------------------------
class Vec{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(anotherX, anotherY){
        let newArray = [0,0];
        newArray[0] = (this.x + anotherX);
        newArray[1] = (this.y + anotherY);
        return newArray;
    }
    minus(anotherX, anotherY){
        let newArray = [0,0];
        newArray[0] = (this.x - anotherX);
        newArray[1] = (this.y - anotherY);
        return newArray;
    }
    get length(){
        let len = this.x * this.x + this.y * this.y;
        len = Math.sqrt(len);
        if(len < 0){len *= -1;};
        return len;
    }
}
let object = new Vec(3,-4);
console.log(object.length)
//-----------------------------------------------------
//Second and third tasks
//-----------------------------------------------------
class Group{
    constructor() {
        this.groupArray = [];
        this.length = 0;
    }
    add(value){
        for(let element in this.groupArray){
        if(value === this.groupArray[element]){return this.groupArray;}
        }
        this.groupArray[this.groupArray.length] = value;
        return this.groupArray;
    }
    delete(value){
        for(let element in this.groupArray){
            if(value === this.groupArray[element]){this.groupArray.splice(element, 1);}
        }
        return this.groupArray;
    }
    has(value){
        for(let element in this.groupArray){
            if(value === this.groupArray[element]){return true;}
        }
        return false;
    }
    from(object){
        let newGroup = [];
        for(let element in object){
            newGroup[element] = object[element];
        }
        return newGroup;
    }
    next(){
        if(this.groupArray.length == this.length ) return {done: true};
        let returnValue = this.groupArray[this.length];
        this.length++;
        return {returnValue, done: false}
    }
}
let object2 = new Group();
console.log(object2.add(1));
object2.add(1);
console.log(object2.add(3));
object2.add(2);
console.log(object2.delete(1));
console.log(object2.has(3));
let iterObject = [0,1,1,3,4,9];
console.log(object2.from(iterObject));
console.log(object2.next())
console.log(object2.next())
console.log(object2.next())

let person = {name: vasia, age: 12};
