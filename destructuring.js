//object destructring 
//example-1
const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: '01717555555555', address: 'Chandpur', dress: 'silver' };
//normally we can get the object value
// console.log(fish)
// console.log(fish.name)
// console.log(fish.id)
//using destructuring method
//suppose we need fish object ar id name and phone
const {id,name,phone}=fish
console.log(`id:${id}, name:${name}, phone:${phone}`)

//example-2
const company={
    companyname:'GP house',
    ceo: { id: 1, user_name: 'ajmol', food: 'fuchka' }, //object ar vitor object 
    webTeam:{team_name:'dev-Op',ceo:'Mr.monim',employee: 22,
    framework: 'react',tech: {
        first: 'html',
        second: 'css',
        third: 'js'
    }} 
}
//normally value accessing of object
// const food=company.ceo.food
// console.log(food)
//console.log(company.ceo.name)

//using destructring method
//remember key jei name a asey sei name e use kora lagbey destructruing method a 
 const {user_name,food}=company.ceo
 console.log('ceo:',user_name,food)
 const {team_name,employee,ceo,tech}=company.webTeam
 console.log('webTeam:',team_name,employee,ceo,tech)
 const {first,second}=company.webTeam.tech
 console.log(first,second)