import './movies.js';
// eslint-disable-next-line import/no-cycle
import addComment from './addComment.js';
import listComment from './listComments..js';
import commentCounter from './commentCounter.js';

const comments = () => {
  const modal = document.getElementById('modal-wrap');
  const back = document.getElementById('test');
  const projectModal = document.createElement('div');
  projectModal.className = 'modal-container';
  const baseApi = 'https://api.tvmaze.com/shows/';
  const details = [{
    country: '', genre: [''], image: '', name: '', release: '', summary: '',
  }];

  const displayDetails = async (id) => {
    const number = await commentCounter(id);
    let num = 0;
    if (number) {
      num = number;
    }
    projectModal.innerHTML = '';
    document.getElementById('modal').style.display = 'block';
    back.style.filter = 'blur(.8rem)';
    const projectCode = `
<div class="mclose-btn">
<button onclick="modalClose()" id='close-modal' type="button">
<i class="fa fa-times fa-2x" aria-hidden="true"></i>
</button>
</div>
<div class="modal-image">
<img
  src="${details.image}"
  alt="cover picture"
  id="modal-cover"
/>
</div>
<div class="modal-head">
<div class="summary">${details.summary}</div>
</div>
<div class="movie-attributes">
<ul>
    <li><span>Name:</span> ${details.name}</li>
    <li><span>Country:</span> ${details.country}</li>
</ul>
<ul>
    <li><span>Genre:</span> ${details.genre.join(',')}</li>
    <li><span>Release:</span> ${details.release}</li>
</ul>
</div>
<div class="comment-display">
<h2>Comments(<span id="count">${num}</span>)</h2>
<ul id="comments-section">
    
</ul>
</div>
<div class="add-comment">
                <h2>Add Comments</h2>
                <ul>
                    <li><input type="text" id="finput" placeholder="Your Name" required></li>
                    <li><textarea cols="30" id="linput" rows="10" placeholder="Your insights" required></textarea></li>
                    <li><button type="button" id="submit" onclick="submitValue(${id})">Comment</button></li>
                </ul>
                </div>
  `;
    projectModal.innerHTML += projectCode;
    modal.appendChild(projectModal);

    addComment();
    listComment(id);
  };
  const fillDetails = async (id) => {
    const list = await fetch(`${baseApi}${id}`).then((response) => response.json());
    if (list.network === null) {
      details.country = 'N/A';
    } else {
      details.country = list.network.country.name;
    }
    if (list.summary === null) {
      details.summary = '';
    } else {
      details.summary = list.summary;
    }
    details.name = list.name;
    details.genre = list.genres;
    details.release = list.premiered;
    details.image = list.image.original;
    displayDetails(id);
  };
  window.checkme = function (id) {
    fillDetails(id);
  };

  window.modalClose = function () {
    document.getElementById('modal').style.display = 'none';
    back.style.filter = 'blur(0)';
  };
};
export default comments;