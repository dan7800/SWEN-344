# jQuery REST Example

## Running

To run this example, upload the two files to a directory on your SE public_html. Normally it would work from anywhere,
but the browser's Cross-origin resource sharing (CORS) security policy prevents pages from making XMLHTTP requests to a different domain in most cases.

Or view it live at: http://www.se.rit.edu/~kwm4385/rest/

## About

This example uses a simple html page and javascript to load data from the weather API and display it, both using jQuery. 
$.getJSON() retrieved the JSON from the specified URL and then uses selectors to insert the information into the approriate elements in the page.

To make the zip search work, a click event handler is attached to the submit button and triggers an API query with the value of the search box.
