var nasaApotd = 'https://api.nasa.gov/planetary/apod?api_key=rp5xMerplzvRvWDUFzwiTECBEwbvMxz7ZiNasiQQ';

function getDataFromApi(searchTerm, callback) {
  var settings = {
    url: 'https://api.nasa.gov/planetary/apod?api_key=rp5xMerplzvRvWDUFzwiTECBEwbvMxz7ZiNasiQQ',
    information: {
      s: searchTerm,
      r: 'json'
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
};

function displaySearchData(data) {
  var resultElement = '';
  if (data.Search) {
    data.Search.forEach(function(result) {
     resultElement += '<p>' + result.explanation + '</p>';
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}



function lookForInput() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displaySearchData);
  });
}

$(function(){lookForInput();});



 







/*
$.ajax({
  url: apotdUrl,
  success: function(result){
  if("galaxy" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
  
  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none"); 
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none"); 
    $("#apod_img_id").attr("src", result.url);
  }
  $("#reqObject").text(apotdUrl);
  $("#returnObject").text(JSON.stringify(result, null, 4));  
  $("#apod_explaination").text(result.explanation);
  $("#apod_title").text(result.title);
}
});
*/