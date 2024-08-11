import BandSiteApi from "./band-site-api.js";

const form = document.getElementById("comment-form");
const inputName = document.getElementById("comment-form__name");
const inputComment = document.getElementById("comment-form__textarea");
const commentsSection = document.getElementById("new-comments");

const apiKey = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";
const api = new BandSiteApi(apiKey);

async function loadComments() {
  try {
    const comments = await api.getComments();
    commentsSection.innerHTML = "";
    comments.forEach((comment) => {
      const commentCard = createCommentCard(comment);
      commentsSection.appendChild(commentCard);
    });
  } catch (error) {
    console.error("Error loading comments:", error);
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = e.target.name.value;
  const commentText = e.target.comment.value;

  inputName.classList.remove("error");
  inputComment.classList.remove("error");

  if (!fullName || !commentText) {
    if (!fullName) {
      inputName.classList.add("error");
    }
    if (!commentText) {
      inputComment.classList.add("error");
    }
    return;
  }

  const newComment = {
    name: fullName,
    comment: commentText,
    timestamp: new Date().toISOString(),
  };

  try {
    await api.postComment(newComment);
    await loadComments();
    form.reset();
  } catch (error) {
    console.error("Error posting comment:", error);
  }
});

function createCommentCard(comment) {
  const cardFull = document.createElement("article");

  const cardAvatar = document.createElement("div");
  cardAvatar.className = "comment__logo";

  const divSection = document.createElement("div");

  const author = document.createElement("h3");
  author.innerText = comment.name;

  const dateComment = document.createElement("h4");
  const formattedDate = newFormatDate(new Date(comment.timestamp));
  dateComment.innerText = formattedDate;

  const singleComment = document.createElement("p");
  singleComment.innerText = comment.comment;

  cardFull.appendChild(cardAvatar);
  cardFull.appendChild(divSection);
  divSection.appendChild(author);
  divSection.appendChild(dateComment);
  divSection.appendChild(singleComment);

  return cardFull;
}

function newFormatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

loadComments();
