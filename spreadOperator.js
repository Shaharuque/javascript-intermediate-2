
//default parameter and spreadOperator
function maxNumber(number=[]){  //default parameter given and as default perameter is empty array so we will get -Infinity as answer bt atleast will not get the error
    let max=Math.max(...number)
    console.log(max)
}

const number=[1,2,3,4,5]
maxNumber()