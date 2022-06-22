const listComment = (id) => {
  const commentsSection = document.getElementById('comments-section');
  let scoreArray = [];
  const COMMENTLLIST_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eeE9kmiK9ON5LxnmgZ0i/comments?item_id=';
  const addToList = async () => {
    const result = await fetch(`${COMMENTLLIST_URL}${id}`).then((res) => res.json());
    return result;
  };
  addToList().then((res) => {
    commentsSection.innerHTML = '';
    if (res) {
      scoreArray = res;
      for (let i = 0; i < scoreArray.length; i += 1) {
        commentsSection.innerHTML += `
              <li class="comment-items"> <p>${scoreArray[i].creation_date}</p><p>${scoreArray[i].username}:</p><p>${scoreArray[i].comment}</p></li>
      
                `;
      }
    }
  });
};

export default listComment;