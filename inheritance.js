

class Team{
    name;           //name,designation these are instance
    designation;
    constructor(name,designation){
        this.name=name;
        this.designation=designation;
    }
    startSession(){       //class a aivabey method declare kora lagey
        console.log('support session has started by:',this.name)
    }
}

class Developer extends Team{
    time;
    constructor(name,designation,time){
        super(name,designation)
        this.time=time
    }
    supportSession(){
        console.log('Session will be started on',this.time)
    }
}

class StudentCare extends Team {        //as StudentCare inherite Team so Team ar object property can be accessed by StudentCare
    //no new instance
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}

class NeptuneDev extends Team {

    codeEditor;  //new instance
    constructor(name, designation, editor) {
        super(name, designation);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}

class Foods extends Team{
    type;
    constructor(name,designation,type){
        super(name,designation)
        this.type=type
    }
    eating(){
        console.log(`${this.name} loves eating ${this.type} foods`)
    }
}


//creating object using parent class and the object can access only its methods and instance varibles
let parent=new Team('rofiq','tester') 
parent.startSession()

//creating object using child class(Developer) and these objects can access parent methods and instance varibles as well as their own methods and varibles bcz child class inherites parent class
let team1=new Developer('amin','web-developer',10)
team1.startSession()
team1.supportSession()

// //another object
// let team2=new Developer('kalam','software-developer',12)
// team2.startSession()
// team2.supportSession()

// //object of StudentCare
// let student1=new StudentCare('amin','student')
// student1.buildARoutine('Alia')

// //object of NeptuneDev
// let dev1=new NeptuneDev('monir','NeptuneDev','code-jam')
// dev1.releaseApp(12.0)

// //object of Foods
// let food1=new Foods('shaik','web-dev','junk')
// console.log(food1)
// food1.eating()