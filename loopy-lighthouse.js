var num = 100;
var message = ["Loopy", "Lighthouse"];
for (var i = num; i < 201; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log(message.join(""));
  } else if ( i % 3 === 0) {
    console.log(message[0]);
  } else if ( i % 4 === 0) {
    console.log(message[1]);
  } else {
    console.log(i);
  }}


