import tvmaze from '../asset/tvmaze.png';

const myImage = new Image();
myImage.src = tvmaze;

const header = () => {
  const header = document.getElementById('nav');
  header.innerHTML = `
    <div><img src= ${tvmaze} alt="logo" id="logo"></div>
    <ul class="header-list">
    <li><a href="#">Home</a></li>
    <li><a href="#">Action</a></li>
    <li><a href="#">Comedy</a></li>
</ul>
    `;
};
export default header;