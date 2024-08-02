const form = document.getElementById('comment-form');
const inputName = document.getElementById('comment-form__name');
const inputComment = document.getElementById('comment-form__textarea');
const btn = document.getElementById('comment-form__button');

const commentsArray = [];


//here i am getting values from form and putting them into an //array 'commentsArray'
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const fullName = e.target.name.value;
  const addComment = e.target.comment.value;

  //here i am checking if everyhting is filled, if it's not it will display an alert to fill.
  if (!fullName || !addComment){
    alert('Please fill all the boxes!');
    return;
  }

  
  const comment = {fullName, addComment};

  commentsArray.push(comment);
  console.log(commentsArray);

  form.reset();

});

function createCommentCard(commentsArray){
  //Here i am creating each element of the comment section
  const cardFull = document.createElement('article');

  const cardAvatar = document.createDiv('div');
  cardAvatar.className=".new-comments__logo";

  const divSection = document.createDiv('div');

  const author= document.createElement('h3');

  const dateComment = document.createElement('h4');

  const singleComment = document.createElement('p');

  cardFull.appendChild(cardAvatar);
  cardFull.appendChild(divSection);
  divSection.appendChild(author);
  divSection.appendChild(dateComment);
  divSection.appendChild(singleComment);

  return cardFull;
}


// Function to display all comments
// function displayComments(){

//   const commentsSection = document.getElementById('new-comments');
//   commentsSection.innerHTML='';
  

//   commentsArray.forEach(comment => {

//     const commentCard = createCommentCard(comment);
//     commentsSection.appendChild(commentCard);
//   });
// }

// Initial display
// displayComments();