//Array Destructuring, nested object Optional chaining

//Array destructuring 
// const [a,b,c]=[1,5,6]
// console.log(a,b,c)

// const[x,y,z,...args]=[1,2,3,4,5,6,4] //after 1,2,3 remaining will be saved in args
// console.log(x,y,z)
// console.log(...args) 

//optional chaining(important to debug the error)

const myObject={x:5,y:6,p:7,q:8}
//object destructuring
// const {x,y}=myObject
// console.log(x,y)
// console.log(myObject.a.b) //myObject ar moddhey a ar value khujtese as a ar value nai undefined dibey kinto undefine 'a' ar moddhey abr 'b' search korley "Cannot read properties of undefined (reading 'b')" amn error dey so amn type error handle ar jnno optional chaining use kora lagbey 
//optional chaining(?.)
console.log(myObject?.a?.b)  //shudu undefine show korbey now
console.log(myObject?.p)  //console myObject.p if exits otherwise undefined