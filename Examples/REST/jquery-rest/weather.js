$(document).ready(function() {
    
    // Get the zip list and add the links
    $.getJSON({
      url: "http://www.se.rit.edu/~swen-344/activities/rest/RESTAPI-Weather.php?action=get_weather_list",
    }).done(function(data) {
        for(z of data) {
            $("#ziplist").append(`<li><a href="?zip=${z.zip}">${z.zip}</a></li>`);
        }
    });
    
    // Hook up the search actions
    $('#submit-zip').click(function() {
        var search = $('#zip-input').val();
        document.location = `?zip=${search}`;
    });
    
    // If theres a query param for the zip, get and display its weather
    var zip = parseQueryString(window.location.search).zip;
    if (zip) {   
        $.getJSON({
          url: `http://www.se.rit.edu/~swen-344/activities/rest/RESTAPI-Weather.php?action=get_weather&zip=${zip}`,
        }).done(function(data) {
            console.log(data);
            if (data.name) {
                $('#name').text(data.name);
                $('#forecast').text(data.forecast);
                $('#image').attr('src', data.image);
            } else {
                $('#forecast-section').html(`
                    <h2 style="color:red">Uh oh! This zip doesn't exist. (${zip})</h2>
                `);
            }          
            $('#forecast-section').show();
        });
    }

});

//  Function to get query params as an object
var parseQueryString = function( queryString ) {
    var params = {}, queries, temp, i, l;

    // Split into key/value pairs
    queries = queryString.split("&amp;");

    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        key = temp[0].replace('?', '');
        params[key] = temp[1];
    }

    return params;
};