function pow(x,y) {
    let power = 1;
    let powerA = 1;
    if(y%1 === 0 && y > 0){          //приведння до степеня натуральних числе
        for (let i = 1; i <= y; i++) {
        power *= x 
        }
    } else if (y%1 === 0 && y < 0){   //приведення до негативного степеня натуральних чисел
        for (let i = 0; i > y; i--) {
        powerA *= x
        
        }
        power = 1/powerA
    } 
    return power

}

console.log(pow(2,3))