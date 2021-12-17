// Build a webpage that compares the average rent in Paris to the average rent in Barcelona
/*--------------------------*/ HTML (index.html)
<!doctype html>
<html>
 <head>
  <link href="style.css" rel="stylesheet">
 </head>
 <body>
  <img src="/img/compare-cities.png">
  <h1>Rent Comparison</h1>
  <div class="container">
  <p class="city">
   <strong id="city1"></strong>
  </p>
  <p class="city">
   <strong id="city2"></strong>
  </p>
  <p id="comparison"></p>
  <p id="difference"></p>
  </div>
  <script src="script.js"></script>
 </body>
</html>

/*--------------------------*/ CSS (style.css)
body {
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 color: midnightBlue;
 text-align: center;
}

.container {
 display: flex;
 flex-direction: column;
 align-items: center;
}

h1 {
 font-size: 1.4em;
 color: white;
 background: midnightblue;
 padding: 8px;
 width: 100vw;
}

.city {
 background-color: plum;
 padding: 8px;
 margin-bottom:0px;
 width: 50vw;
}

#comparison {
 background-color:darkmagenta;
 color: white;
 border-radius:16px;
 padding: 8px;
 margin-top: 32px;
 width: 50vw;
}
/*--------------------------*/ JavaScript (script.js)
var currentCity = "Paris";
var compCity = "Barcelona";
var currentRent = 1200;
var compRent = 940;
var isMoreExpensive = currentRent > compRent;
var comparisonLabel = currentCity + " is more expensive: " + isMoreExpensive;
var difference = currentRent - compRent;
var differenceLabel = "Rent difference: &euro;" + difference;

document.getElementById("city1").innerHTML = currentCity + ": &euro;" + currentRent;
document.getElementById("city2").innerHTML = compCity + ": &euro;" + compRent;
document.getElementById("comparison").innerHTML = comparisonLabel;
document.getElementById("difference").innerHTML = differenceLabel;

console.log(comparisonLabel);
console.log(differenceLabel);




