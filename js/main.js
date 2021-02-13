window.addEventListener('DOMContentLoaded', () => {
  let content = document.querySelector('.content');
  let searchBtn = document.querySelector('.search__btn');
  let input = document.querySelector('.search__message');

  searchBtn.addEventListener('click', fetchGiphy);

  function fetchGiphy() {
    if (input.value == '') return;
    searchBtn.disabled = true;
    let sel = document.getElementById('mySelect').selectedIndex;
    let options = document.getElementById('mySelect').options;
    let url = `https://api.giphy.com/v1/${options[sel].value}/search?api_key=mTvqtbIswQrCRr28Cb3dHAHRSDrNwuZ8&q=${input.value}&limit=10`;

    removeChildeElemet();

    fetch(url)
      .then((data) => data.json())
      .then((json) => displayInfo(json.data));
  }

  function displayInfo(response) {
    if (response.length === 0) {
      alert('Не найдено');
      searchBtn.disabled = false;
    }
    response.forEach((item) => {
      let img = document.createElement('img');
      img.src = item.images.original.url;
      content.appendChild(img);
      searchBtn.disabled = false;
    });
  }

  function removeChildeElemet() {
    while (content.children.length) {
      content.removeChild(content.lastChild);
    }
  }
});
