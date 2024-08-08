const form = document.getElementById("comment-form");
const inputName = document.getElementById("comment-form__name");
const inputComment = document.getElementById("comment-form__textarea");
const btn = document.getElementById("comment-form__button");

const commentsArray = [
  {
    avatarImage: "",
    fullName: "Victor Pinto",
    fullDate: "11/02/2023",
    comment: `This is art. This is inexplicable magic
              expressed in the purest way, everything
              that makes up this majestic work
              deserves reverence. Let us appreciate
              this for what it is and what it contains.`,
  },
  {
    avatarImage: "",
    fullName: "Christina Cabrera",
    fullDate: "10/28/2023",
    comment: `I feel blessed to have seen them in
              person. What a show! They were just
              perfection. If there was one day of my
              life I could relive, this would be it. What
              an incredible day.`,
  },
  {
    avatarImage: "",
    fullName: "Isaac Tadese",
    fullDate: "10/20/2023",
    comment: `I can't stop listening. Every time I hear
          one of their songs - the vocals - it gives
          me goosebumps. Shivers straight down
          my spine. What a beautiful expression of
          creativity. Can't get enough.`,
  },
];

function formatRelativeTime(date) {
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (days > 0) {
    return rtf.format(-days, "day");
  } else if (hours > 0) {
    return rtf.format(-hours, "hour");
  } else if (minutes > 0) {
    return rtf.format(-minutes, "minute");
  } else {
    return rtf.format(-seconds, "second");
  }
}

let currentDate = new Date();
currentDate = formatRelativeTime(currentDate);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = e.target.name.value;
  const comment = e.target.comment.value;

  inputName.classList.remove("error");
  inputComment.classList.remove("error");

  if (!fullName || !comment) {
    if (!fullName) {
      inputName.classList.add("error");
    }
    if (!comment) {
      inputComment.classList.add("error");
    }
    return;
  }

  const newComment = {
    fullName,
    fullDate: new Date(),
    comment,
  };

  commentsArray.unshift(newComment);
  displayComments();

  form.reset();
});

function createCommentCard(comment) {
  const cardFull = document.createElement("article");

  const cardAvatar = document.createElement("div");
  cardAvatar.className = "comment__logo";

  const divSection = document.createElement("div");

  const author = document.createElement("h3");
  author.innerText = comment.fullName;

  const dateComment = document.createElement("h4");

  if (comment.fullDate instanceof Date) {
    dateComment.innerText = formatRelativeTime(comment.fullDate);
  } else {
    dateComment.innerText = comment.fullDate;
  }

  const singleComment = document.createElement("p");
  singleComment.innerText = comment.comment;

  cardFull.appendChild(cardAvatar);
  cardFull.appendChild(divSection);
  divSection.appendChild(author);
  divSection.appendChild(dateComment);
  divSection.appendChild(singleComment);

  return cardFull;
}

function displayComments() {
  const commentsSection = document.getElementById("new-comments");
  commentsSection.innerText = "";

  commentsArray.forEach((comment) => {
    const commentCard = createCommentCard(comment);
    commentsSection.appendChild(commentCard);
  });
}

displayComments();
