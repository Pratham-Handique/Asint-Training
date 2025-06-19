const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "\n"; // <br> is used in Html
}
console.log(text);

const cars1 = ["BMW", "Volvo", "Saab", "Ford"];

let i = 0;
let text1 = "";
while (cars[i]) {
  text1 += cars[i] + "\n";
  i++;
}
console.log(text1);