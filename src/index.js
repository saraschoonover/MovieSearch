const list = document.querySelector('.d-flex');

const insertMovies = (data) => {
  data.Search.forEach((result) => {
    const movieTag = `<div class="card m-3" style="width: 18rem;">
    <img class="card-img-top" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))" src="${result.Poster}" alt="Card image cap">
    <div class="card-body">
      <p class="card-text d-flex justify-content-center font-weight-bold">${result.Title}</p>
    </div>
  </div>

    </div>
    `;
    list.insertAdjacentHTML('beforeend', movieTag);
  });
};

const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

fetchMovies('harry potter'); // on 1st page load

const form = document.querySelector('#search-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
});
