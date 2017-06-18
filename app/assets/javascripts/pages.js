// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

function changeColors(){
  setTimeout(function(){
    document.getElementById('first').style.color = 'red';
    setTimeout(function(){
      document.getElementById('second').style.color = 'blue';
    }, 1000);
  }, 1000);
}

function getData() {
  var foodtrucksDiv = document.getElementById('foodtrucks');

  $.get('https://data.sfgov.org/resource/jjew-r69b.json', function(response){
    console.log(response);
    var htmlString = '';
    for (var i = 0; i < response.length; i++) {
      var foodtruck = response[i];
      htmlString += '<div onclick="changeFoodtruckColor(this)">';
      htmlString += '<h4>' + foodtruck.applicant + '</h4>';
      htmlString += '<p>' + foodtruck.optionaltext + '</p>';
      htmlString += '<p>' + foodtruck.dayofweekstr + '</p>';
      htmlString += '<p>' + foodtruck.starttime + '</p>';
      htmlString += '</div>';
    }
    foodtrucksDiv.innerHTML = htmlString;
  });
}

function changeFoodtruckColor(foodtruckDiv) {
  foodtruckDiv.classList.toggle('blue-text');
  // if (foodtruckDiv.style.color == 'blue') {
  //   foodtruckDiv.style.color = '';
  // } else {
  //   foodtruckDiv.style.color = "blue";
  // }
}
















