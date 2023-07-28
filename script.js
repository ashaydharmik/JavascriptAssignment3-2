
var count = 0;

function updateCounter(){
   count = count + 1;
   let increment = document.getElementById("count")
   increment.innerHTML = count;
}