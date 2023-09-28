$(document).ready(function () {
  $("#book-search-form").submit(function (event) {
    event.preventDefault();

    // Fetch data from the form
    const searchQuery = $("#searchQuery").val();

    // Validate the form data
    if (!searchQuery) {
      $("#messageArea").text("At least one field must be filled out.");
      return;
    }

    // Google Books API URL
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      searchQuery
    )}`;

    // AJAX GET Request
    $.get(apiUrl, function (data) {
      if (!data.items) {
        $("#messageArea").text("No data returned from the server");
        return;
      }

      // Create the table content
      let tableContent = '<table class="table resultsTable">';
      tableContent +=
        "<thead><tr><th>Cover</th><th>Details</th></tr></thead><tbody>"; // Changed the headers

      // Populate the table with book data
      data.items.forEach(function (book) {
        const volumeInfo = book.volumeInfo;
        const authors = volumeInfo.authors
          ? volumeInfo.authors.join(", ")
          : "N/A";
        const title = volumeInfo.title || "N/A";
        const publishedDate = volumeInfo.publishedDate || "N/A"; // Added this line
        const coverImage = volumeInfo.imageLinks
          ? `<img src="${volumeInfo.imageLinks.thumbnail}" alt="Cover Image" />`
          : "N/A";
        const fullSummary = volumeInfo.description || "N/A";

        tableContent += `<tr>`;
        tableContent += `<td>${coverImage}</td>`;
        tableContent += `<td><strong>Title:</strong> ${title}<br>
                   <strong>Authors:</strong> ${authors}<br>
                   <strong>Published Date:</strong> ${publishedDate}<br>  <!-- Added this line -->
                   <a href="#" class="view-summary" data-summary="${fullSummary}" data-title="${title}" data-authors="${authors}" data-date="${publishedDate}">Summary</a></td>`;
        tableContent += `</tr>`;
      });

      tableContent += "</tbody></table>";
      $(".table-container").html(tableContent);

      // Add click event for "Read More" links
      $(".view-summary").click(function (e) {
        e.preventDefault();
        const fullSummary = $(this).data("summary");
        const title = $(this).data("title");
        const authors = $(this).data("authors");
        const date = $(this).data("date");
        $("#fullSummary").html(
          `<h3>${title}</h3><h4>${authors}</h4><h5>${date}</h5><p>${fullSummary}</p>`
        );
        $("#summaryModal").show();
      });

      // Close modal
      $("#closeModal").click(function () {
        $("#summaryModal").hide();
      });
    });
  });
});
