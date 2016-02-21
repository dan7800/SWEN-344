<?php
  $input_json = file_get_contents('php://input'); // read the body of the message
  $input = json_decode($input_json, true); // get an associative array out

  // set the response type to json
  header('Content-Type: application/json');

  // server side validation
  if (!is_numeric($input['num1']) || !is_numeric($input['num2'])) {
    echo json_encode(array('error' => 'num1 and num2 must be numeric'));
    http_response_code(422); // unprocessible entry

    return; // don't execute further
  }

  echo json_encode(array('sum' => $input['num1'] + $input['num2']));
?>
