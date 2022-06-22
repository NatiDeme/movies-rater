import './movies.js';

const comments = () => {
  const modal = document.getElementById('modal-wrap');
  const supper = document.getElementById('btn');
  const projectModal = document.createElement('div');
  projectModal.className = 'modal-container';
  const baseApi = 'https://api.tvmaze.com/shows/';
  const details = [{
    country: '', genre: ['Comedy'], image: '', name: '', release: '', summary: '',
  }];

  const displayDetails = (id) => {
    projectModal.innerHTML = '';
    document.getElementById('modal').style.display = 'block';
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
<div>${details.summary}</div>
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
<h2>Comments</h2>
<ul>
    <li>Comments</li>
    <li>Comments</li>
    <li>Comments</li>
</ul>
</div>
<div class="add-comment">
                <h2>Add Comments</h2>
                <ul>
                    <li><input type="text" name="" id="" placeholder="Your Name"></li>
                    <li><textarea name="" id="" cols="30" rows="10" placeholder="Your insights"></textarea></li>
                    <li><button>Comment</button></li>
                </ul>
                </div>
  `;
    projectModal.innerHTML += projectCode;
    modal.appendChild(projectModal);
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
  };
};
export default comments;