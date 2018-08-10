// NYT Search js
// Andrew Ton & Azzy


$(document).ready(function() {


    $("#clearForm").on("click", function() {
        $(".articleContainer").empty();

    })


    $("#submitForm").on("click", generateResults);
 
    function generateResults() {
 
        event.preventDefault();
        $(".articleContainer").empty();


        var searchQuery = $("#searchTerm").val();
        var numArticles = $("#numRecords").val();
        var beginYear = $("#startYear").val();;
        var endYear = $("#endYear").val();
        console.log(this);
 
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a137abd0d47f4c6b8037df3a92c7b8a3&q=" + searchQuery;
        if (beginYear) {
            queryURL += "&begin_date=" + beginYear+"0101";
        }
        if (endYear) {
            queryURL += "&end_date=" + endYear+"1231";
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
            for (i = 0; i < numArticles; i++){
                var tempJumbo =  $("<div class='jumbotron p-4 mx-3 mb-3'>");
                var tempA = $('<a href='+ resultsArray[0].web_url +'><h2><span class="badge badge-secondary darkBlue mr-2">'+(i+1)+'</span>' +resultsArray[i].headline.main+ '</h2></a>');
                var tempP =  $("<p>").text(resultsArray[i].byline.original);
                tempJumbo.append(tempA);
                tempJumbo.append(tempP);
                $(".articleContainer").append(tempJumbo);
            }
            
        //     <!-- <div class="jumbotron p-4 mx-3 mb-3">
        //     <a href="https://www.nytimes.com/"><h2><span class="badge badge-secondary darkBlue">1</span> Sample Title</h2></a>
        //     <p>By Richard Painter</p>
        //   </div>
        //   <div class="jumbotron p-4 mx-3 mb-3">
        //     <a href="https://www.nytimes.com/"><h2><span class="badge badge-secondary darkBlue">1</span> Sample Title</h2></a>
        //     <p>By Richard Painter</p>
        //   </div> -->
        })
    }
//  generateResults();
 })