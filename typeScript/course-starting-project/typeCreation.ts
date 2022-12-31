
type Combinable = number | string

const combine = function(n1:Combinable, n2:Combinable) {
  if (typeof n1 === "number" && typeof n2==='number') return n1 + n2
  else return n1.toString() + n2.toString()
}


const number = "aaaah"

console.log(combine(30, 25))

console.log(combine("test", "wait"))

//Litteral Type
type Role= "admin" | "employé" | "caissier"

let role : Role
role = "caissier"
role = "non"
