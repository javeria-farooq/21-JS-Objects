/*we create simple objects */

/*let obj = {
    id : " : 01" ,
    name : " : Javeria",
    age : " : 20",
    roll : " : GCS1-Cm-E0124sc",
    depart : " : IT",
}*/

/*we print obj in console */
// console.log(obj)
/*obj keys printing */
// console.log(obj.name)

/*replace obj key */
// obj.name = "aliza"
// console.log(obj)
// console.log(obj.name)

/*obj loop */

/*for(let key in obj) {
    console.log(`${key} : ${obj[key]}`)
}*/

/*another object inside an object */

/*let obj = {
    fname : "javeria",
    lname : "farooq",
    living : {
        city: "karachi",
        country : "pakistan"
    }
}

console.log(obj)
console.log(obj["fname"])
console.log(obj.fname)*/

/**obj literals (means we create object properties from variables)*/

/*let firstName = "javeria"
let lastName = " farooq"
let age = 20
let course = "web development"

let student = {
    firstName,
    lastName,
    age,
    course
}

console.log(student)

for(let key in student) {
    console.log(`${key} : ${student[key]}`)
}*/

/*obj with array and function */

/*let obj = {
    age : '20',
    rollNo: '133517',
    arr : ['javeria ', 'farooq ', 'intermediate'],
    course : "web development",
    dressPayment : function () {
        return 2000
    }
}

for(let key in obj) {
    if(key === "arr") {
        console.log("enter array")
        for(let i = 0; i < obj[key].length; i++) {
            console.log(obj[key][i])
        }
        console.log("exit array")
    }

    else if(key === "dressPayment") {
        document.write(obj[key]())
    }

    else{
        console.log(`${key} : ${obj[key]}`)
    }
}
console.log(obj)


for(var key in obj) {
    document.write(key, ' : ', obj[key], '<br>')
    for (var i = 0; i < obj.arr.length; i++) {
    document.write(obj.arr[i], '<br>')
    }
}*/

//object.values

/*let objValues = Object.values(obj)
document.write(objValues)
document.write(Object.values(obj.arr))*/