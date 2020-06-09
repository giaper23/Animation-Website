$(document).ready(function () {

    load_data(); // Loads the data on the page

    /* ACCORDION */

    $('.accordion').fadeToggle(); // Hide accordion on page load

    $('#modules').click(function(){ 

        $('.accordion').fadeToggle(); // Show accordion when you click on #modules

    });

    /* MODULES */

    $('#nav-modules').click(function(){

        $('.accordion').fadeToggle(); // When you click on the modules option open the accordion while sliding down

    });

    /* MAP */

    $('#map').fadeToggle(); // Hide the map on page load

    $('#open-map').click(function(){

        $('#map').fadeToggle(); // Show the map

        /* Scroll to map */

        $('html, body').animate({
            scrollTop: ($('#map').offset().top) 
        },500);

    });

    $('#nav-map').click(function(){

        $('#map').fadeToggle(); // Open the map when selecting it from the nav

    });

    /* TITLE */

    $('#title').slideDown("slow"); // Slides down to reveal the title

    /* BACK TO TOP BUTTON */

    $('#top-button').click(function(){

        $('html, body').animate({scrollTop : 0}, 800);

    });

    /* HIDING & SHOWING BACK TO TOP BUTTON */

    $(window).scroll(function(){

        /* Check for scroll */

        if ($(this).scrollTop() > 40){

            $('#top-button').fadeIn();

        }

        else {

            $('#top-button').fadeOut();

        }

    });

    /* AJAX */

    function load_data() {

        $.ajax({

            url: "data/info.json", // The JSON's file directory
            method: "GET", // We don't need POST here so GET is the way to go
            dataType: "json", // We specify that we are looking for a JSON file so that it returns as an object
            success: function (data) {

                $('#address').text("Address: " + data.address);
                $('#phone').text("Phone: " + data.phone);
                $('#email').text("Email: " + data.email);

                /* We use for loops to get the data from arrays */

                for (let i = 0; i < data.backend.length; i++) {

                    $('#module1').append("<li>" + data.backend[i] + "</li>"); // We use append to add data at the bottom of a list

                }

                for (let i = 0; i < data.frontend.length; i++) {

                    $('#module2').append("<li>" + data.frontend[i] + "</li>");

                }

                for (let i = 0; i < data.interaction.length; i++) {

                    $('#module3').append("<li>" + data.interaction[i] + "</li>");

                }

            }

        });

    }

});