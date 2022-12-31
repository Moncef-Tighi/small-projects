enum Roles {admin = 0, employé = 2, caissié = 4}


const person: {
  name : string,
  age : number,
  hobbies : string[],
  random : any[],
  role : [string, number],
  roles : Roles,
} = {
  name: "Moncef",
  age : 23,
  hobbies: ["sports", "cooking"],
  random: ["gerg", 54, null],
  role : ["test", 5],
  roles : Roles.admin
}

// const person = {
//   name: "Moncef",
//   age : 23,
//   hobbies: ["sports", "cooking"],
//   random: ["gerg", 54, null],
//   role : Roles.admin
// }

console.log(person.age)


// console.log(person.role[0])
//Problème avec Tupple : Push n'est pas prit en compte
// person.role.push("aaa")

for (const hobbie of person.hobbies) {
  console.log(hobbie)
}