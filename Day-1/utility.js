//1.  object relationships
function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry(
    {name: "Bob" }, 
    {name: "Anaya"}
);

console.log(family.father.name); // John
console.log(family.mother.name); // Anaya


// 2. nested objects
let company = {
  name: "Zenithive",
  address: {
    street: "Jagatpur Main St",
    city: "Ahmedabad",
    country: "India"
    },
    employees: [
        { name: "Alice", position: "Developer" },
        { name: "Bob", position: "Designer" }
    ]
};

console.log(company.address.city); // Metropolis
console.log(company.employees[0].name); // Alice    


// 3. use of optional chaining
let userProfile = {
  username: "johndoe",
  mail:"abc@gmail.com",
  contact:"1234567890",
  address: {
    street: "123 Main St",
    city: "Metropolis"
  }
};  

let user = {};

console.log(userProfile?.address?.city); // Metropolis
console.log(userProfile?.profile?.bio); // undefined
console.log(user?.username); // undefined



// 4. use of nullish coalescing
function display(user) {
  return user.displayName ?? "Guest User";
}
let user1 = { displayName: "JohnDoe" };
let user2 = {}; 

console.log(display(user1)); // JohnDoe
console.log(display(user2)); // Guest User


// 5.array  slice and splice methods
let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 4));

console.log(arr.splice(2, 1,-1,-2)); // remove 3 and add -1, -2

console.log(arr.splice(0, 0,0)); // add 0 at the start);



// 6. array map method
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

let names = ["Alice", "Bob", "Charlie"].map(name => name.length);
console.log(names); // [5, 3, 7]


// 7. array filter method
let mixedNum = [10, 15, 20, 25, 30];
let evenNum = mixedNum.filter(num => num % 2 === 0);
console.log(evenNum); // [10, 20, 30]

let longNames = ["Alice", "Bob", "Charlotte", "Dave"].filter(name => name.length > 4);
console.log(longNames); // ["Alice", "Charlotte"]



// 8. array reduce method
let values = [1, 2, 3, 4, 5];
let sum = values.reduce((res, current) => res + current, 0);
console.log(sum); // 15



// 9. promisses
let promise = new Promise((resolve,reject) => {
    setTimeout(() => resolve("2"), 2000);
})
.then(res => res*2)
.then(res => res*2)
.then(res => console.log(res))  
.catch(err => console.log(err));



// 10. async/await
async function getTotal(price, tax) {
  const basePrice = await new Promise(resolve => {
    setTimeout(() => resolve(price), 1000);
  });

  return basePrice + tax;
}

async function run() {
  const total = await getTotal(100, 20);
  console.log(total); // 120 (after 1 second)
}

run();



// 11. error handling with try/catch
async function f() {

  try {
    let response = await fetch('http://no-such-url');
  } catch(err) {
    console.log(err); // TypeError: failed to fetch
  }
}
f();



// 12. custom error throwing
function validateAge(age) {
  if (age < 0) {    
    throw new Error("Age cannot be negative");
 }
    return true;
}

try {
  validateAge(-5);
} catch (e) {   
    console.log(e.message); // Age cannot be negative
}


// 13. classes
class Animal {
  constructor(name,type,food) {
    this.name = name;
    this.type = type;
    this.food = food; 
  }

  about() {
    console.log(`${this.name} is a ${this.type} animal, eating ${this.food}!`);
  };
}

let lion = new Animal("Lion" , "wild", "meat");
let dog = new Animal("Dog" , "domestic", "dog food");

lion.about();   // Lion is a wild animal, eating meat!
dog.about();   // Dog is a domestic animal, eating dog food!


// 14. generatore functions
function* generateSequence(){
    yield 10;
    yield 20;
    yield 30;
}
let generator = generateSequence();

for(let value of generator) {
  console.log(value); 
}


function* generateIds (){
    let id = 1;
    while(true){
        if(id < 5){
            id++;
        }else{
            break;
        }
        yield id;
    }
}
let gen = [1,...generateIds()];
console.log(gen);


function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
let genSeq = generateSequence(5, 10);
for (let value of genSeq) {
  console.log(value); 
}
