// NYT Search js
// Andrew Ton & Azzy


$(document).ready(function() {




    $("#submitButton").on("click", generateResults);
 
    function generateResults() {
 
        var searchQuery = "california fires";
        var beginYear = 2017;
        var endYear = 2018;
        console.log(this);
 
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=38fecb31515a4473bc5a1d266bae863f&q=" + searchQuery;
        if (beginYear) {
            queryURL += "&begin_year=" + beginYear;
        }
        if (endYear) {
            queryURL += "&end_year=" + endYear;
        }
 
        console.log(queryURL);
 
        // ajax call
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(result) {
            console.log(result);
 
            var resultsArray = result.response.docs;
            console.log(resultsArray);
 
            //appending articles
 
 
 
        })
    }
 generateResults();
 })