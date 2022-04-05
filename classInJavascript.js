class Suppport{
    name;
    designaation;
    constructor(name,designaation){
        this.name=name
        this.designaation=designaation
    }
    startSession(){       //class a aivabey method declare kora lagey
        console.log('support session has started by:',this.name)
    }
}

//creating new object
let obj1=new Suppport('amin','web-developer')
console.log(obj1)
obj1.startSession() //startSession() call using obj1

//creating new object
let obj2=new Suppport('shaik','software-developer')
console.log(obj2)
obj2.startSession()