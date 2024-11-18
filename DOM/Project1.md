# Projects related to DOM
## Project 1 code
### Backgroung color changing
### htmt
```html 
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="canvas">
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="black"></span>
      <span class="button" id="purple"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <span class="button" id="red"></span>
      <span class="button" id="green"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>
```
### Css code
```css
html {
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#black {
  background-color: black;
}

#purple {
  background-color:purple;
}
#blue {
  background-color: blue;
}
#yellow {
  background-color: yellow;
}
#red {
  background-color: red;
}
#green {
  background-color: green;
}
```
### JavaScript code
``` JavaScript code
let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body")
// console.log("happy");

buttons.forEach(function (button){
console.log(button);

button.addEventListener('click', function(e){
  console.log(e);
  console.log(e.target);

  if(e.target.id === "black") {
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === "purple") {
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === "blue") {
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === "yellow") {
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === "red") {
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === "green") {
    body.style.backgroundColor = e.target.id;
  }
})
}); 
```
## Project 2 code
### Calculating BMI
### HTML code
``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>BMI Calculator</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="container">
      <h1>BMI Calculator</h1>
      <form>
        <p><label>Height in CM: </label><input type="text" id="height" /></p>
        <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
        <button>Calculate</button>
        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
  </body>
  <script src="chaiaurcode.js"></script>
</html>
```
### Css code
``` CSS
.container {
  width: 575px;
  height: 825px;

  background-color: #797978;
  padding-left: 30px;
}
#height,
#weight {
  width: 150px;
  height: 25px;
  margin-top: 30px;
}

#weight-guide {
  margin-left: 75px;
  margin-top: 25px;
}

#results {
  font-size: 35px;
  margin-left: 90px;
  margin-top: 20px;
  color: rgb(241, 241, 241);
}

button {
  width: 150px;
  height: 35px;
  margin-left: 90px;
  margin-top: 25px;
  background-color: #fff;
  padding: 1px 30px;
  border-radius: 8px;
  color: #212121;
  text-decoration: none;
  border: 2px solid #212121;

  font-size: 25px;
}

h1 {
  padding-left: 15px;
  padding-top: 25px;
  
}

```
### JavaScript code
``` javascript
let form = document.querySelector('form');
form.addEventListener('submit', function(e){
  e.preventDefault()
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
results.innerText = "Please give a valid height";
  } else if(weight === '' || weight < 0 || isNaN(weight)){
results.innerText = "Please give a valid weight";
  } else {
    let bmi = (weight / ((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```