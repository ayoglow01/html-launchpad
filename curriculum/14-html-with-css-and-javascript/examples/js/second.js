console.log("second.js ran after first.js (defer preserves order).");

const button = document.querySelector("#like");
const count = document.querySelector("#count");

button.addEventListener("click", () => {
  const liked = button.dataset.liked === "true";
  button.dataset.liked = String(!liked);
  button.setAttribute("aria-pressed", String(!liked));
  count.textContent = liked ? "0 likes" : "1 like";
  console.log("post id from data-post-id:", button.dataset.postId);
});
