//IHp122Ym4VWZWroBGB8Cgg3aLU4QMpT1 API KEY*
$(document).ready(function() {

var politicians = ["kamala harris", "barack obama", "donald trump", "cory booker"]

    function displayPix() {

        $("#display-image").empty();
        var input = $(this).attr("data-name");
        var limit = 10;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
        input + "&api_key=IHp122Ym4VWZWroBGB8Cgg3aLU4QMpT1&limit=10";
    
        $.ajax({
            url: queryURL,
            method: "GET",
        }).done(function(x) {
            for (var i = 0; i < limit; i++) {
                var display = $("<div>");
                display.addClass("holder");

                var image = $("<img>");
                image.attr("src", x.data[i].images.original_still.url);
                image.attr("data-still", x.data[i].images.original_still.url);
                image.attr("data-animate", x.data[i].images.original.url);
                image.attr("data-state", "still");
                image.attr("class", "gif");
                display.append(image);

                var rating = x.data[i].rating;
                console.log(x);
                var pRating = $("<p>").text("Rating " + rating);
                display.append(pRating);

                
                $("#display-image").append(display);
            }
        });
    
    }

    function makeButtons () {
        $("#buttons").empty();

        for (var i = 0; i < politicians.length; i++) {
            var newButton = $("<button>");
            newButton.attr("class", "btn btn-warning");
            newButton.attr("id", "input");
            newButton.attr("data-name", politicians[i]);
            newButton.text(politicians[i]);
            $("#buttons").append(newButton);
        }
    }
        
function imgOnOff() {
    var state = $(this).attr("data-state");
    var imgOn = $(this).attr("data-animate");
    var imgOff = $(this).attr("data-still");

    if (state == "still") {
        $(this).attr("src", imgOn);
        $(this).attr("data-state", "animate");
    } else if (state == "animate") {
        $(this).attr("src", imgOff);
        $(this).attr("data-state", "still");
    }
}
    

$("#add-input").on("click", function() {
    var input = $("#gif-input").val().trim();
    form.reset();
    politicians.push(input);

    makeButtons();

    return false;
})

makeButtons();

$(document).on("click", "#input", displayPix);
$(document).on("click", ".gif", imgOnOff);



});
