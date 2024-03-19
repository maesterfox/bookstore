import fetch from "node-fetch";

// Function to create an HTML table row with a header and data cell
function createTableRow(key, value) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const td = document.createElement("td");

  th.textContent = key;
  td.textContent = value;

  tr.appendChild(th);
  tr.appendChild(td);

  return tr;
}

// Function to fetch data from an API and display it in the console
function fetchDataAndLog(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// Function to fetch data from an API and display it in an HTML table
function fetchDataAndDisplayTable(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const table = document.createElement("table");
      const tbody = document.createElement("tbody");

      for (const key in data) {
        const tr = createTableRow(key, data[key]);
        tbody.appendChild(tr);
      }

      table.appendChild(tbody);
      document.body.appendChild(table);
    });
}

// Fetching data from the Pokemon API and displaying it in the console
fetchDataAndLog("https://pokeapi.co/api/v2/pokemon/ditto");

// Fetching data from the Pokemon API and displaying it in an HTML table
fetchDataAndDisplayTable("https://pokeapi.co/api/v2/pokemon/ditto");

// Fetching data from a public API and displaying it in the console
fetchDataAndLog("https://jsonplaceholder.typicode.com/posts/1");

// Fetching data from a public API and displaying it in an HTML table
fetchDataAndDisplayTable("https://jsonplaceholder.typicode.com/posts/1");
