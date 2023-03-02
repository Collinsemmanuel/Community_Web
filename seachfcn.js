document.getElementById("search-form").addEventListener("submit", function(e) {
  e.preventDefault();
  let query = document.getElementById("search-query").value;
  let category = document.getElementById("search-category").value;
  let results = searchMembers(query, category);
  displayResults(results);
});

function searchMembers(query, category) {
  // Perform the search and return the results
  // This function should be replaced with actual code that search the member's data and
