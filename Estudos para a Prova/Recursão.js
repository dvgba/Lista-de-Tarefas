// -- Recursão é o ato de uma função invocar a si mesma
//-- 
//-- function dontDothat(value){
//--     return dontDothat(value)
//-- }

const getFactorial = number =>{
    if(number === 1) {
        return 1
    }

    return number * getFactorial(number - 1)
}

export default getFactorial