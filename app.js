var nasaApotd = 'https://api.nasa.gov/planetary/apod?api_key=rp5xMerplzvRvWDUFzwiTECBEwbvMxz7ZiNasiQQ';

function getDataFromApi(searchTerm, callback) {

  var settings = {
    url: nasaApotd + '&date=' + searchTerm + '&hd=true',
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
};

function displaySearchData(data) {
 console.log(data);
  var resultElement = '';
  var titleElement = '';
  var imageElement = ''.toString();
  var imageCredits ='';

  
  if (data.url) {
     resultElement += '<p>' + data.explanation + '</p>';
    
  }

   if (data.url) {
    titleElement += '<p>' + data.title + '</p>';
  }

  if (data.url) {
    imageElement += '<img src="' + data.url + '">'; 
    console.log(imageElement)  
  }

  if (data.url) {
    imageCredits += '<p>' + "Photgraph by: " + data.copyright + '</p>';
    

  }

  else {
    resultElement += '<p>' + "NO RESULTS" + '</P>';
  }
  
  $('.js-search-results').html(resultElement);
  $('.js-title-results').html(titleElement);
  $('.js-image-results').html(imageElement);
  $('.js-credits').html(imageCredits);


};

$("button").click(function() {
  $("h2").hide(200);
  });


function lookForInput() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = new Date($('.js-query').val());
    var searchDate = query.getFullYear().toString().concat("-", query.getMonth().toString(), "-", query.getDate().toString()) 
    getDataFromApi(searchDate, displaySearchData);
  });
}

$(function(){lookForInput();});





 






