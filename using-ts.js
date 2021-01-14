var button = document.querySelector("button");
//Using exclamation sign and typecasting because we are in ts so its clearer picture
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
//+ is for converting the string to number
