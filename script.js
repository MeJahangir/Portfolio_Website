// javascript informantion add
function myFunciton() {
    document.getElementsByClassName("form-control").innerHTML ="jahangir alam";
}
// dark and light info
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})
// Date and time add 
function doDate() {
  var str = "";
  var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  var now = new Date();

  str += days[now.getDay()] + "<br> " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById("demo").innerHTML = str;
}
setInterval(doDate, 1000);