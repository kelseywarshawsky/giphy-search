$("#add-subject").on("click", function(event) {
            event.preventDefault();
            var search = $("#search").val().trim();
            var Button = $("<button>");
            Button.addClass("btn-lg info");
            Button.attr("data-name", search);
            Button.text(search);
            $("#buttons").append(Button);

    });


           $(document).on("click", ".btn-lg", function () {
                var search = $(this).attr("data-name");
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                    search + "&api_key=dc6zaTOxFJmzC&limit=10";

                $.ajax({
                        url: queryURL,
                        method: "GET"
                    })
                    .then(function (response) {
                        var results = response.data;


                        for (var i = 0; i < results.length; i++) {
                            var giphDiv = $("<div>");
                            var giphImage = $("<img>");
                            var rating = results[i].rating;
                            giphImage.attr("src", results[i].images.fixed_height.url);
                            giphImage.attr("data-still",results[i].images.fixed_height_still.url);
                            giphImage.attr("data-animate",results[i].images.fixed_height.url);
                            giphImage.addClass("image");
                            giphDiv.append(giphImage);
                            $("#gifs-appear-here").prepend(giphDiv);
                            $("#gifs-appear-here").prepend("rating: " +rating);

                        }
                    });

                })

                $(document).on("click", ".image", function(){
                   var state = $(this).attr('data-state');
                   if ( state === 'still'){
                       $(this).attr('src', $(this).data('animate'));
                       $(this).attr('data-state', 'animate');
                   }else{
                       $(this).attr('src', $(this).data('still'));
                       $(this).attr('data-state', 'still');
                            }

                        })


                