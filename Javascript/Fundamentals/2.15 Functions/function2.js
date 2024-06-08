
//! Return an object inside a function
const getBrand = function(brand) {
    console.log(brand);
    return{
        brand: brand,
        website: `www.${brand}.com`
    }
}

const brand = getBrand("Nike")
console.log(JSON.stringify(brand, null, 1));



//! Arrow Functions with Objects
const getEmail = email => ({
    email: email,
    emailAddress: `www.${email.toLowerCase()}.com`
}
)

const add = (a, b) => a + b;

const email = getEmail("LongTang")
console.log(JSON.stringify(email, null, 1));

//! Regular Arrow Function
const calculate = (a, b, sign) => {
    switch(sign){
        case '+':
            return a + b;
        case '-':
            return a - b;
        default:
            console.log("Not a valid sign")
    }
}

//! Function Default Parameters
const checkHealth = (health = "deterioating") => ({
    health: health,
})

const health = checkHealth("Healthy")
console.log(JSON.stringify(health, null, 1));