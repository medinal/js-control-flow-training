console.log("sing.js loaded");

do {
  var numBottles = parseInt(prompt("How many bottles of beer are on the wall?"));
}
while (typeof numBottles != 'number');

while (numBottles > 0){
  if (numBottles > 2){
    console.log(numBottles + " bottles of beer on the wall,");
    console.log(numBottles + " bottles of beer!");
    console.log("Take one down and pass it around,");
    while (numBottles > 2){
      numBottles --;
      console.log(numBottles + " bottles of beer on the wall!");
      }
  } else if (numBottles === 2){
      numBottles --;
      console.log(numBottles + " bottle of beer on the wall!")
  } else if (numBottles === 1){
      console.log(numBottles + " bottle of beer on the wall,");
      console.log(numBottles + " bottle of beer!");
      console.log("Take one down and pass it around,");
      console.log("No bottles of beer on the wall!")
      numBottles--;
    }
};
