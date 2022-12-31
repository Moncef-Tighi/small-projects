
let userInput: unknown;
let anyValue : any;
let value: string;

userInput= "test"
anyValue = 5

value= anyValue

//Erreur parce que y a pas de check
value = userInput
const attributeUnkown = (string: string):string | never =>  {
  //Return never c'est throw une erreur
  if (typeof userInput==="string") {
    //Pas d'erreur parce que TS détecte que le check a eu lieu
    value=userInput
    return value
  } else {
    throw Error("Well, no.")
  }
}