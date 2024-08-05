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

function formatDate(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

let currentDate = new Date();
currentDate = formatDate(currentDate);

//here i am getting values from form and putting them into an //array 'commentsArray'
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = e.target.name.value;
  const comment = e.target.comment.value;

  inputName.classList.remove('error');
  inputComment.classList.remove('error');

  //here i am checking if everyhting is filled, if it's not it will display an alert to fill.
  if (!fullName || !comment) {
    alert("Please fill all the boxes!");

    if (!fullName) {
      inputName.classList.add('error');
    }
    if (!comment) {
      inputComment.classList.add('error');
    }
    return;
  }

  const newComment = {
    fullName,
    fullDate: currentDate,
    comment,
  };

  commentsArray.unshift(newComment);
  displayComments();

  form.reset();
  
});

function createCommentCard(comment) {
  //Here i am creating each element of the comment section
  const cardFull = document.createElement("article");

  const cardAvatar = document.createElement("div");
  cardAvatar.className = "comment__logo";

  const divSection = document.createElement("div");

  const author = document.createElement("h3");
  author.innerHTML = comment.fullName;

  const dateComment = document.createElement("h4");
  // dateComment.innerHTML = currentDate;
  dateComment.innerHTML = comment.fullDate;

  const singleComment = document.createElement("p");
  singleComment.innerHTML = comment.comment;

  cardFull.appendChild(cardAvatar);
  cardFull.appendChild(divSection);
  divSection.appendChild(author);
  divSection.appendChild(dateComment);
  divSection.appendChild(singleComment);

  return cardFull;
}

//Function to display all comments
function displayComments() {
  const commentsSection = document.getElementById("new-comments");
  commentsSection.innerHTML = "";

  commentsArray.forEach((comment) => {
    const commentCard = createCommentCard(comment);
    commentsSection.appendChild(commentCard);
  });
}

displayComments();
