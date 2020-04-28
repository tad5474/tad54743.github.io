// Add id to each one of your headers so that when you hover over and then move off it changes color//
function colorTextone()
{
document.querySelector("#one").style.color="black";
document.querySelector("#one").style.fontWeight="bold";
}

function returnTextone()
{
document.querySelector("#one").style.color="#DB504A";
document.querySelector("#one").style.fontWeight="normal";
}
function colorTexttwo()
{
document.querySelector("#two").style.color="black";
document.querySelector("#two").style.fontWeight="bold";
}

function returnTexttwo()
{
document.querySelector("#two").style.color="#DB504A";
document.querySelector("#two").style.fontWeight="normal";
}
function colorTextthree()
{
document.querySelector("#three").style.color="black";
document.querySelector("#three").style.fontWeight="bold";
}

function returnTextthree()
{
document.querySelector("#three").style.color="#DB504A";
document.querySelector("#three").style.fontWeight="normal";
}
function colorTextfour()
{
document.querySelector("#four").style.color="black";
document.querySelector("#four").style.fontWeight="bold";
}

function returnTextfour()
{
document.querySelector("#four").style.color="#DB504A";
document.querySelector("#four").style.fontWeight="normal";
}

function colorTextfive()
{
document.querySelector("#five").style.color="black";
document.querySelector("#five").style.fontWeight="bold";
}

function returnTextfive()
{
document.querySelector("#five").style.color="#DB504A";
document.querySelector("#five").style.fontWeight="normal";
}

function colorTextsix()
{
document.querySelector("#six").style.color="black";
document.querySelector("#six").style.fontWeight="bold";
}

function returnTextsix()
{
document.querySelector("#six").style.color="#DB504A";
document.querySelector("#six").style.fontWeight="normal";
}

function colorTextseven()
{
document.querySelector("#seven").style.color="black";
document.querySelector("#seven").style.fontWeight="bold";
}

function returnTextseven()
{
document.querySelector("#seven").style.color="#DB504A";
document.querySelector("#seven").style.fontWeight="normal";
}

function colorTexteight()
{
document.querySelector("#eight").style.color="black";
document.querySelector("#eight").style.fontWeight="bold";
}

function returnTexteight()
{
document.querySelector("#eight").style.color="#DB504A";
document.querySelector("#eight").style.fontWeight="normal";
}

//api found through this video https://www.youtube.com/watch?v=uXjGjk1Y8ng

$.ajax({
  type:"get",
  url: "https://fcc-weather-api.glitch.me/api/current?lat=40.80&lon=-77.86",
  success: function(data){
    var weather = data.weather[0].description;
    var temp = data.main.temp;
    var temperature = Math.round((temp*(9/5))+32);
    document.getElementById("currentWeather").innerHTML = 'Condition:' + weather;
    document.getElementById("currentTemperature").innerHTML = 'Temperature:' + temperature + '°F';
    console.log(weather);
  }
});

$.ajax({
  type:"get",
  url: "http://127.0.0.1:3000/idea",
  success: function(data){
    console.log("Successful call to get");
  }
});

$(document).ready(function() {
  loadIdeaList();
});

function loadIdeaList(){
  $.ajax({
    url: "http://127.0.0.1:3000/idea",
    success: function (data) {
      var ideaList = document.getElementById("ideaList");
      if (ideaList) {
        while (ideaList.firstChild) {
          ideaList.removeChild(ideaList.firstChild);
        }
      }
      for (var i = 0; i < data.length; i++) {
        var ideaActivity = data[i].activity;
        var ideaDescription = data[i].description;
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(ideaActivity + ": " + ideaDescription));
        ideaList.appendChild(li);
      }
    },
    error: function(data){
      alert("error" + data.error)
    }
  });
}

$(document).ready(function () {
  $("submit").click(function (e) {
    var formActivity = $("#activity").val();
    var formDescription = $("#description").val();
    e.preventDefualt();
    var data = {};
    data.activity = formActivity;
    data.description = formDescription;
    console.log("Data values are: " + data.activity + " and " + data.description);
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: 'http://127.0.0.1:3000/idea',
      success: function (data) {
        loadIdeaList();
        document.getElementById("ideaForm").reset();
      },
      error: function(data){
        alert("error" + data.error)
      }
    });
  });
});
