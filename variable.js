// const a="bhuwan"
// a="rahul"
// console.log(a);

// console.log(x);
// var x=10;

// let a=true;
// console.log(typeof{a});
// console.log(typeof a)

// let count = 0;
// count = count + 5;
// count = count - 2;
// console.log(count);

// {
//     let a1=34;
// }
// console.log(a1);
// const pi=3.14
// pi=45;
// console.log(pi)
// console.log(typeof foo);
// var foo = "bar";


// function test() {
//   console.log(a);
//   var a = 5;
// }
// test();

// var x = 1;
// function outer() {
//   var x = 2;
//   function inner() {
//     console.log(x);
//   }
//   inner();
// }
// outer();



//OBJECT
//Objects are a data type it is a collection of key value pairs the keys are string also called properties
// value can be any type of value 



// let obj={
//   name:"raju",
//   age:34,
//   place:"uttarakhand",
  

// }
// console.log(obj["name"]);
// obj.class="rich"
// console.log(obj);
// obj.height=5.6;
// console.log(obj);




/*let person={
  name:"raghav",
  age:25,
  city:"delhi",
  height:5.6,
  state:"delhi"
}

//upadating a value of a key in the existing object
person.name="vinay";// Dot notation
person["name"]="vijay"//Bracket notation
console.log(person);

//delete a property
delete person.name ;
console.log(person);

//Check if a Key Exists
console.log("name" in person );

//Get All Keys or Values as Arrays

console.log(Object.keys(person));
console.log(Object.values(person));

//Get All Entries (key-value pairs)
console.log(Object.entries(person));*/


let person={
  name:"raghav",
  age:25,
  city:"delhi",
  height:5.6,
  state:"delhi"
}

for (let key in person){
  console.log(key)
  console.log(person[key])///Prints the values inside the brackets key will treated as a variable 
}
console.log("name" in person);


let a1={
  name:"boby",
  age:24,
  sayhi:function(){
    console.log("hello, i am "+ this .name)
  }
}
a1.sayhi();

let student={
  name:"ravi",
  type:"yes",
  sound:function (){
    console.log("hello")
  }
}
student.sound()


// data type
// variable
//object
// Variable
// 2. Operator
// 3.Data type
// 4.Conditional(If else, switch)
// 5.Object
// 6.Loop
// 7.Function
// 8.String



// data type 


