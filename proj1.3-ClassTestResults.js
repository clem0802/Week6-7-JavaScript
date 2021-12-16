/*----------------------------*/ Class Test Results (2021.12.16)
/*----------------------------*/ HTML
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <div class="main-container">
      <h2>Class Test Results</h2>
      <ul>
        <li class="title"></li>
        <li></li>
        <li></li>
        <li></li>
        <li class="title"></li>
        <li></li>
        <li></li>
        <li></li>
        <li class="title"></li>
        <li></li>
        <li></li>
        <li></li>
        <li class="title"></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <script src="script.js"></script>
  </body>
</html>

/*----------------------------*/ CSS
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  background-color: #F9FAFE,
}

h2{
  font-size: 115%;
  padding: 10px 40px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #62D76B;
  color: #fff;
  text-align: center;
}
.main-container {
  margin: 5% auto;
  width: 80%;
  max-width: 650px;
}

ul {
  list-style-type: none;
  background-color: #fff;
  width: 100%;
  border: 2px solid #eeeeee;
  padding: 20px;
  border-radius: 6px;
  font-size: 100%;
}

li {
  margin-left: 20px;
}

.entry-textarea {
  height: 200px;
  display: block;
  margin: 3% auto;
}

.title {
  background-color: #3E416D;
  color: #fff;
  padding: 10px 15px;
  border-radius: 4px;
  margin: 10px;;
  font-size: 110%;
}

/*----------------------------*/ JavaScript
var maxPoints = 120;
var passingPoints = 70;
var samPoints = 84;
var alexPoints = 45;
var jessiePoints = 99;
var didAlexPass = false;

listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";

var listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Raw Points:";

var samPointsDisplay = "Sam earned " + samPoints + " out of " + maxPoints;
console.log(samPointsDisplay);
var alexPointsDisplay = "Alex earned " + alexPoints + " out of " + maxPoints;
console.log(alexPointsDisplay);
var jessiePointsDisplay = "Jessie earned " + jessiePoints + " out of " + maxPoints;
console.log(jessiePointsDisplay);

var samPercentage = (samPoints/maxPoints)*100;
var samPercentDisplay = "Sam Scored " + samPercentage + "%";
console.log(samPercentDisplay);
var alexPercentage = (alexPoints/maxPoints)*100;
var alexPercentDisplay = "Alex Scored " + alexPercentage + "%";
console.log(alexPercentDisplay);
var jessiePercentage = (jessiePoints/maxPoints)*100;
var jessiePercentDisplay = "Jessie Scored " + jessiePercentage + "%";
console.log(jessiePercentDisplay);

var samMissedPoints = maxPoints - samPoints;
var samMissedPointsDisplay = "Sam missed" + samMissedPoints + " point(s)";
console.log(samMissedPointsDisplay);
var alexMissedPoints = maxPoints - alexPoints;
var alexMissedPointsDisplay = "Alex missed" + alexMissedPoints + " point(s)";
console.log(alexMissedPointsDisplay);
var jessieMissedPoints = maxPoints - jessiePoints;
var jessieMissedPointsDisplay = "Jessie missed" + jessieMissedPoints + " point(s)";
console.log(jessieMissedPointsDisplay);

var classAveragePoints = (samPoints + alexPoints + jessiePoints) / 3;
var classAveragePercent = (classAveragePoints / maxPoints) * 100;
var classAvgDisplay = "The class average was " + classAveragePoints + " points or " + classAveragePercent.toFixed(2);
console.log(classAvgDisplay);

alexPoints = 75;
didAlexPass = !didAlexPass;
var alexPointsUpdated = "Alex failed initially but did extra credit. Their new score is " + alexPoints + " out " + maxPoints;
console.log(alexPointsUpdated);



