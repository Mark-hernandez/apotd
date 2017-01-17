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
  var imageElement = " ";

  if (data.url) {
     resultElement += '<p>' + data.explanation + '</p>';
    
  }

   if (data.url) {
    titleElement += '<p>' + data.title + '</p>';
  }

  if (data.url) {
    imageElement =+ '<img src="' + data.hdurl + '">' 
  }

  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
  $('.js-title-results').html(titleElement);
  $('.js-image-results').html(imageElement);


}



/*function displayImageData(data) {
  console.log(data);
  var imageElement = ''
}
*/

/*function displayTitleData(data) {
  var titleElement = '';
  if (data.url) {
    titleElement += '<p>' + data.title + '</p>';
  }

 
 else {
  titleElement =+ '<p> No results</p>';
 }

 $('js-title-results').html(titleElement);
  
}
*/



function lookForInput() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = new Date($('.js-query').val());
    var searchDate = query.getFullYear().toString().concat("-", query.getMonth().toString(), "-", query.getDate().toString()) 
    getDataFromApi(searchDate, displaySearchData);
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