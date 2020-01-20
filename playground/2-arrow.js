// Normally

// const square = function(x){
//     return x * x
// }

// Arrow function

// const square = x => {
//   return x * x;
// };

// if function is simple
// const square = x => x * x;

// console.log(square(3));

// Object

const event = {
  name: "Birthday Party",
  guestList: ["Çağatay", "Berke", "Uslu"],
  printGuestList() {
    console.log("Guest List for " + this.name);

    this.guestList.forEach(guest => {
      console.log(guest + " is attending " + this.name);
    });
  }
};

event.printGuestList();
