//exercise 01 version 01
for (var triangle = "#"; triangle.length <= 7; triangle += "#")
   console.log(triangle);

//exercise 01 version 02
for (var triangle = "#" ; triangle += "#") {
  if (triangle.length <= 7)
    break;
}
console.log(triangle);

//exercise 02aa
for (var number = 1; number <= 100; number++) {
  var word = "";
  if (number % 3 == 0)
    word += "Fizzzz";
  if (number % 5 == 0)
    word += "Buzzzz";
  console.log(word || number);
}