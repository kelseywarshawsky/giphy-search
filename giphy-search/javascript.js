$("#add-subject").on("click", function(event) {
            event.preventDefault();
            var search = $("#search").val().trim();
            var Button = $("<button>");
            Button.addClass("btn-lg info");
            Button.attr("data-name", search);
            Button.text(search);
            $("#buttons").append(Button);

    });


            $(".btn-lg info").on("click", function () {
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
                            giphImage.attr("src", results[i].images.fixed_height.url);
                            giphDiv.append(giphImage);
                            $("#gifs-appear-here").prepend(giphDiv);

                        }
                    });

                })

                $(".gif").on("click", function() {
                    var state = $(this).attr("data-state");

                            var state = $(this).attr("data-state");
                            if (state === "still") {
                                $(this).attr("src", $(this).attr("data-animate"));
                                $(this).attr("data-state", "animate");
                            } else {
                                $(this).attr("src", $(this).attr("data-still"));
                                $(this).attr("data-state", "still");
                            }

                        })


                