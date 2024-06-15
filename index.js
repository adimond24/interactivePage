
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

const card = document.getElementById('outside-container')

draw(){
    c.fillStyle = 'blue'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
}

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("Name");
  let favFood = document.getElementById("fav food");

  if (name.value == "" || favFood.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a name of ${name.value} and favorite food of ${favFood.value}`
    );

    name.value = "";
    favFood.value = "";
  }
});

function returnText(){
    let input = document.getElementById("input").value;
    alert(input)
}