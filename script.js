const favoriteButtons = document.querySelectorAll('.favorite-btn');

document.addEventListener('DOMContentLoaded', () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  favoriteButtons.forEach(button => {
    const articleId = button.dataset.articleId;
    if (favorites.includes(articleId)) {
      button.classList.add('favorite');
      button.textContent = 'Unfavorite';
    }
  });
});

favoriteButtons.forEach(button => {
  button.addEventListener('click', function () {
    const articleId = this.dataset.articleId;
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    
    if (favorites.includes(articleId)) {
      
      favorites = favorites.filter(id => id !== articleId);
      this.classList.remove('favorite');
      this.textContent = 'Favorite';
    } else {
      
      favorites.push(articleId);
      this.classList.add('favorite');
      this.textContent = 'Unfavorite';
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  });
});