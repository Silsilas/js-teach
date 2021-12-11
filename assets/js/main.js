// // "use trick"

// // console.log("hello world")

// // varriable data in js
// // let, var, const

// // const message; //initialization

// // message = "yey we are learning js" //assignment

// // console.log(message);

// // message = "silas"

// // console.log(message);

// // number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
// // bigint is for integer numbers of arbitrary length.
// // string for strings. A string may have zero or more characters, there’s no separate single-character type.
// // boolean for true/false.
// // null for unknown values – a standalone type that has a single value null.
// // undefined for unassigned values – a standalone type that has a single value undefined.
// // object for more complex data structures.
// // symbol for unique identifiers.

// // let name = prompt("Whats your name")
// // alert("My name is " + name)

// // let me = 1345

// // typeof(me)

// // me = Number(me)

// // typeof(me)

// // Addition +,
// // Subtraction -,
// // Multiplication *,
// // Division /,
// // Remainder %,
// // Exponentiation **.

// // let val = 10;

// // console.log(val%4) = 2

// // console.log(Number("1") + 1 + 1) = 3

// // if(1 > 2){  //false
// //     console.log("Yes it")
// // }

// // == > < >= <= != ===

// // null == undefined //true

// // null === undefined //false

// // let num = 2;

// // if(num === 1){
// //     console.log("Yes it 2")
// // }else{
// //     console.log("Its not 2")

// // }

// // ||  && !

// // let a = 2
// // let b = 1

// // if(a || b == 2){
// //     console.log("Yes it 2")
// // }else{
// //     console.log("Its not 2")

// // }

// for(let i=0; i < 100; i++){
//     callMyNAme()
// }

// let i = 10
// // while(i){
// //     console.log("Silas")
// //    i--
// // }

// // do{
// //     console.log(i)
// //     i++
// // }while(i<5)

// let name = prompt("Whats your age")

// // let names = ["soil", "sil"]
// // names.push("Hay")
// // names.pop("")

// // names[0]

// function callMyNAme(name){
//     let str = "My is " + name
//     return str
// }

// const callMySecondName = () => {
//   callMyNAme
// }

// alert("Aler Hey")

// document.body.style.background="green"

const input = document.getElementById("input");
const callName = document.getElementById("names");
const p = document.getElementById("display");
const sec = document.getElementById("sec");

callName.addEventListener("click", (e) => {
  e.preventDefault();

  let myName = input.value;

  p.innerHTML = myName;

  console.log(myName);
  displayColor();
});

const displayColor = () => {
  let colors = [
    "#30cc29",
    "#e3394c",
    "#97257d",
    "#20207b",
    "#dd6137",
    "#17d13f",
    "#f9936e",
    "#659b16",
    "#24428f",
    "#206063",
    "#b264f9",
    "#744629",
    "#909fa7",
    "#88eb55",
    "#2adda3",
    "#f7e78b",
    "#e0d8af",
    "#f484a0",
    "#44003a",
    "#d34d08",
    "#ce3f99",
    "#326eda",
    "#cc1651",
  ];

  let myName = input.value;

  if (myName.length > colors.length) {
    let cl = myName.length % colors.length;
    console.log(colors[cl]);
    sec.style.background = colors[cl];
  } else {
    let col = colors[myName.length - 1];
    sec.style.background = col;

    console.log(col);
  }

  const start = () => {
    setTimeout(function () {
      confetti.start();
    }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
  };

  //  Stop

  const stop = () => {
    setTimeout(function () {
      confetti.stop();
    }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
  };

  start();
  stop();
};
