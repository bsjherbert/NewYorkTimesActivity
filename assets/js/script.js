
// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=6w4Wjqf4AIIU9K23h16tGQ2WiS6GzlqZ
// https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=19890101&end_date=20190101&q=john%20doggle&sort=newest&api-key=6w4Wjqf4AIIU9K23h16tGQ2WiS6GzlqZ


$.ajax({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=19890101&end_date=20190101&q=fires&sort=newest&api-key=6w4Wjqf4AIIU9K23h16tGQ2WiS6GzlqZ",
    method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.response.docs[0].snippet)
    console.log(response.response.docs[0].source)
})
// Convenience variables for the for loop
var result = response.response


// Change the id to match HTML
var search = $("#searchInput").val();
var startYear = $("#startYear").val();
var endYear = $("#endYear").val();
var numberOfRecords = $("#searchLimits").val();

var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + startYear + "0101&end_date=" + endYear + "0101&q=" + search + "&sort=newest&api-key=6w4Wjqf4AIIU9K23h16tGQ2WiS6GzlqZ"


// for loop, going thru the API and using this loop to display the entries

for (let i = 0; i < numberOfRecords.length; i++) { //this will loop a number of times equal to the numberOfRecords (the input of the user)
    
    
}