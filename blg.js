document.getElementById("new-post-btn").addEventListener("click", function() {
  document.getElementById("new-post-form").style.display = "block";
});

document.getElementById("cancel-new-post").addEventListener("click", function() {
  document.getElementById("new-post-form").style.display = "none";
});

document.getElementById("new-post-form").addEventListener("submit", function(e) {
  e.preventDefault();
  let title = document.getElementById("post-title").value;
  let content = document.getElementById("post-content").value;
  createPost(title, content);
});

function createPost(title, content) {
  // Code to add the post to the website
  // This function should be replaced with actual code that adds the post to the website's database
}
