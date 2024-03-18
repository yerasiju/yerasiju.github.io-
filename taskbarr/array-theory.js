//const names = ["rigga", "John", "William", "Elisa", "BEckls"];
//names.push("John");
//names.unshift("John");
//const firstName = names.shift();
//const name = names.pop();
//console.log("Names", names, firstName, name);

//console.log(names.reverse());
//const reversed = names.toReversed();
//console.log(reversed);

//console.log(names.sort());
//console.log(names);

// const letters = ["f", "b", "d", "e", "c", "a"];

//console.log(letters.sort());
// console.log(letters.toSorted());
// console.log(letters);

//console.log(names.splice(0, 2));
// console.log(names.toSpliced(0, 2));
// console.log(names);

// const greateWoman = "Elisa";
// const index = names.indexOf(greateWoman);
// console.log(index);
// const newNames = names.with(index, "Elisa kks");
// names[index] = "Elisa kks";
// console.log(names[index]); console.log(names);
//console.log(names);
//console.log(newNames);

// const capitalNames = names.map(function (name) {
//   const newNames = name + "!";
//   return newNames;
// });
// console.log(capitalNames);

// const capitalNames = names.map(function (name) {
//   return name.toUpperCase();
// });
// console.log(capitalNames);

// const capitalNames = names.map(function (name) {
//   return name.toLowerCase();
// });
// console.log(capitalNames);

// const capitalNames = names.map(function (name, index) {
//   if (index == 1) {
//     return "Elisa kks";
//   }
//   return name;
// });
// console.log(capitalNames);

//console.log(names.includes("rigga"));
//console.log(names.indexOf("rigga") !== -1);

const people = [
  { name: "rigga", budget: 5700 },
  { name: "John", budget: 15700 },
  { name: "BEckls", budget: 57300 },
  { name: "Elisa", budget: 27500 },
];

// let findedPeople;

// for (let person of people) {
//   if (person.budget == 57300) {
//     findedPeople = person;
//   }
// }

// console.log(findedPeople);    HARD WAY TO FIND INDEX BELOW THE EASY WAY

const findedPeople = people.find(function (person) {
  if (person.budget == 27500) {
    return true;
  }
});

console.log(findedPeople);

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined
