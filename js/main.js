let person = {
    firstName: "Andrey",
    lastName: "Ivanov",
    age: 20,
    isStudent: true
}

let jsonObj = JSON.stringify(person)
console.log(jsonObj)

let personFromJson = JSON.parse(jsonObj)
console.log(personFromJson)