class PGroup{
    constructor() {
        this.group = []
    }
    add(value){
        let has = this.has(value)
        if(has){
            console.log("Such value is already in group!")
            return this.group
        }
        else {
            let object = this.copy(this)
            object.group.push(value)
            return object
        }
    }
    delete(value){
        let has = this.has(value)
        if(has){
            let object = this.copy(this)
            let index = this.group.indexOf(value)
            object.group.splice(index, 1)
            return object.group
        }
        else {
            console.log("There are no such value in group!")
            return this.group
        }
    }
    has(value){
        for(let i = 0; i < this.group.length; i++){
            if(this.group[i] === value) {
                return true
            }
        }
        return false
    }
    copy(object){
        let newObject = new PGroup()
        for(let i = 0; i < object.group.length; i++)
        {
            newObject.group[i] = object.group[i]
        }
        return newObject
    }
}
let example = new PGroup()
example.add(11)
example.add(12)
example.add(13)
console.log(example.delete(11))