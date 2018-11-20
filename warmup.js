// console.log("Hola mundo")

// for(let i=0; i <=10; i++){
//   console.log("HOLA MUNDO")
// }

let fun = false

// console.log (fun ? "estoy divirtiendome" : "estoy triste")

// if (fun) {
//   console.log("Estoy divirtiendome")
// } else {
//   console.log("Estoy triste")
// }

room = {
  people: 10,
  fun: true,
  table: "wood",
  wall: 2,
  teach: function(){
    console.log("Aquí es donde tiene la clase Makeit")
  },
  calculateSmartness: function(){
    console.log(`la inteligencia de este salón es de: ${this.people * 100}` )
  }
}

  // room.calculateSmartness()
  // room.teach()
  console.log(room.people)
  console.log(room.fun)
  console.log(room.table)
  console.log(room.wall)
