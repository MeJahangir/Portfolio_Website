// javascript informantion add
function myFunciton() {
    document.getElementsByClassName("form-control").innerHTML ="jahangir alam";
}
// dark and light info
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})