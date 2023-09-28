$(document).ready(function () {
  $("#book-search-form").submit(function (event) {
    event.preventDefault();

    const searchQuery = $("#searchQuery").val();

    if (!searchQuery) {
      $("#messageArea").text("At least one field must be filled out.");
      return;
    }

    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      searchQuery
    )}&AIzaSyB9Aqx8I7N-EDkzdUEPzRFyu8QdWukPDyk`;

    $.get(apiUrl, function (data) {
      if (!data.items) {
        $("#messageArea").text("No data returned from the server");
        return;
      }

      let tableContent = '<table class="table">';
      tableContent +=
        "<thead><tr><th>Cover</th><th>Title</th><th>Summary</th><th>Authors</th><th>Published Date</th></tr></thead>";
      tableContent += "<tbody>";

      data.items.forEach(function (book) {
        const volumeInfo = book.volumeInfo;
        const authors = volumeInfo.authors
          ? volumeInfo.authors.join(", ")
          : "N/A";
        const title = volumeInfo.title || "N/A";
        const publishedDate = volumeInfo.publishedDate || "N/A";
        const coverImage = volumeInfo.imageLinks
          ? `<img src="${volumeInfo.imageLinks.thumbnail}" alt="Cover Image" />`
          : "N/A";
        const fullSummary = volumeInfo.description || "N/A";
        const summary =
          fullSummary.length > 100
            ? `${fullSummary.substring(
                0,
                100
              )}... <a href="#" class="view-summary">Read More</a><span class="hidden full-summary">${fullSummary}</span>`
            : fullSummary;

        tableContent += `<tr>`;
        tableContent += `<td>${coverImage}</td>`;
        tableContent += `<td>${title}</td>`;
        tableContent += `<td>${summary}</td>`;
        tableContent += `<td>${authors}</td>`;
        tableContent += `<td>${publishedDate}</td>`;
        tableContent += `</tr>`;
      });

      tableContent += "</tbody></table>";
      $(".table-container").html(tableContent);

      $(".view-summary").click(function (e) {
        e.preventDefault();
        const fullSummary = $(this).siblings(".full-summary").text();
        $("#fullSummary").text(fullSummary);
        $("#summaryModal").show();
      });

      $("#closeModal").click(function () {
        $("#summaryModal").hide();
      });
    });
  });
});
