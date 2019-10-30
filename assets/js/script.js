
// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=6w4Wjqf4AIIU9K23h16tGQ2WiS6GzlqZ
// https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=19890101&end_date=20190101&q=john%20doggle&sort=newest&api-key=6w4Wjqf4AIIU9K23h16tGQ2WiS6GzlqZ


$.ajax({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=19890101&end_date=20190101&q=john%20doggle&sort=newest&api-key=6w4Wjqf4AIIU9K23h16tGQ2WiS6GzlqZ",
    method: "GET"
}).then(function(response){
    console.log(response);
})
// Change the id to match HTML
var search = $("#").val();
var startYear = $("#").val();
var endYear = $("#").val();
var numberOfRecords = $("#").val();

var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + startYear + "0101&end_date=" + endYear + "0101&q=" + search + "&sort=newest&api-key=6w4Wjqf4AIIU9K23h16tGQ2WiS6GzlqZ"
