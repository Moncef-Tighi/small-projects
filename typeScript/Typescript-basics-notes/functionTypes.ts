
const log = function(text:string):void {
  console.log(text)
} 

log('test')

let combineValues: (listOfNumbers: number[]) => number;

combineValues = (numbers: number[])=> numbers.reduce((total, number)=> total+=number, 0) 
const remove = (numbers: number[])=> numbers.reduce((total, number)=> total-=number, 0) 
// combineValues = add;
combineValues = console.log()

const operation = function(fonction: (num: number[])=> number, ...numbers: number[]) {
  return fonction(numbers)
}

const adding = operation(combineValues, 5, 9, 10)
const removing = operation(remove, 5, 9, 10)

console.log(adding)
console.log(removing)