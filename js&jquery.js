let hotel = {
  name: "Park",
  rooms: 120,
  booked: 77,
  checkAvailabilty: function () {
    console.log("check");
  },
};

hotel.gym = true;
hotel.pool = false; // Adding Property

console.log(hotel);
delete hotel.booked; // Deleting Propery
console.log(hotel);

const h1 = document.querySelector("#hotelName");
const pool = document.querySelector("#pool");
const gym = document.querySelector("#gym");

h1.innerHTML = hotel.name;
pool.innerHTML = "Pool : " + hotel.pool;
gym.innerHTML = "Gym : " + hotel.gym;

function Car(name, wheel, door, color) {
  this.name = name;
  this.wheel = wheel;
  this.door = door;
  this.color = color;
}

let toyota = new Car("Toyota", "4", "4", "brown");

var msg = "Home sweet home";

console.log(msg.length);
