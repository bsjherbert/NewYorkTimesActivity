// Change the id to match HTML
var search = $("#searchInput").val();
var startYear = $("#startYear").val();
var endYear = $("#endYear").val();
var numberOfRecords = $("#searchLimits").val();

var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + startYear + "0101&end_date=" + endYear + "0101&q=" + search + "&sort=newest&api-key=6w4Wjqf4AIIU9K23h16tGQ2WiS6GzlqZ"