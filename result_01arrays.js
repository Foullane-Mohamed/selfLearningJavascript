const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland'
]

// - Find the length of your array
let findLength = countries.length;
// - Get the first item, the middle item and the last item of the array
let firstItem = countries[0];
// - Declare an array called `mixedDataTypes`, put different data types in the array and find the length of the array. The array size should be greater than 5


let mixedDataTypes = [1,true,'hello',["hello",3],  { name: 'mohamed', age: 28 },null];

let lengthArr =  mixedDataTypes.length;
// - Declare an array variable name `itCompanies` and assign initial values `Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle` and `Amazon`

let itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
// - Print the array using `console.log()`
console.log(itCompanies);
// - Print the number of companies in the array
let NumberCompanies = itCompanies.length;
// - Print the first company, middle and last company
let firstCompany = itCompanies[0]
let middleCompany = itCompanies[itCompanies.length/2]
let lastCompany = itCompanies[itCompanies.length-1]
// - Print out each company
for (let i = 0; i < itCompanies.length; i++) {
console.log(itCompanies[i]);
}
// - Change each company name to uppercase one by one and print them out

for (let i = 0; i < itCompanies.length; i++) {
  itCompanies[i].toUpperCase()
  }
  // - Check if a certain company exists in the `itCompanies` array. If it exists, return the company else return "Company is not found"

function findCompany(xCompany){
  for (let i = 0; i < itCompanies.length; i++) {
    if(xCompany ===itCompanies[i]){
      return `the ${xCompany} exists`
    }
    }
    return `the ${xCompany} not fond`
}
// - Filter out companies which have more than one 'o' without the `filter` method



