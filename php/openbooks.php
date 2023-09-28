<?php
// Check if the POST data exists
if (isset($_POST['search_query']) && isset($_POST['search_type'])) {
    $query = $_POST['search_query'];
    $searchType = $_POST['search_type'];

    // Define the search field based on searchType
    $searchField = '';
    switch ($searchType) {
        case 'author':
            $searchField = 'author';
            break;
        case 'title':
            $searchField = 'title';
            break;
        case 'genre':
            $searchField = 'subject';
            break;
        default:
            // Invalid search type
            http_response_code(400);
            echo json_encode(['error' => 'Invalid search type']);
            exit;
    }

    // Prepare the API URL
    $api_url = "http://openlibrary.org/search.json?" . urlencode($searchField) . "=" . urlencode($query);

    // Fetch the data from the API
    $response = file_get_contents($api_url);

    // Send back the JSON response
    echo $response;
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Search query or type not provided']);
}
