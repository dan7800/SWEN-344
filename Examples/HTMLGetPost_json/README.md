# HTMLGetPost - Author: Aidan Sawyer

Homework 01 for Web Engineering involving basic Get and GET requests via HTML forms.

Hosted at http://www.se.rit.edu/~aks5238/html/software/swen344/02-WebTechnologies/PHP/.

Notes:
- this activity is meant to demonstrate two methods (GET and POST) of transfering information using HTTP Requests via basic forms. The first method, (GET) passes the data directly and visibly in the url insecurely, while the latter (POST) does not. Both methods effectively transmit data over TCP and are stored, processed, displayed in a similar fashion by some basic PHP.
- 'form_body.php' holds the five input fields shared across both forms, including the states dropdown which demonstrates loading data from the 'states.json' json object server-side using PHP. the abstraction of these five shared fields and their subsequent inclusion in 'form_get.php' and 'form_post.php' are a testament to the power of PHP to drastically simplify code and decrease code duplication.
- 'response.php' demonstrates some basic functionality of PHP, and again the helpfulness/power of the 'include_once'  functionality to prevent code duplication.
