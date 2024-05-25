const movies = [
    { title: "Inception", genre: "Sci-Fi" },
    { title: "The Dark Knight", genre: "Action" },
    { title: "Interstellar", genre: "Sci-Fi" },
    { title: "Titanic", genre: "Romance" },
    { title: "The Notebook", genre: "Romance" },
    { title: "Avengers: Endgame", genre: "Action" },
    { title: "Forrest Gump", genre: "Drama" },
    { title: "The Shawshank Redemption", genre: "Drama" }
];

function getRecommendations() {
    const genreInput = document.getElementById('genre-input').value.toLowerCase();
    const recommendations = document.getElementById('recommendations');
    recommendations.innerHTML = '';

    const filteredMovies = movies.filter(movie => movie.genre.toLowerCase() === genreInput);

    if (filteredMovies.length > 0) {
        filteredMovies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.className = 'movie';
            movieElement.innerText = movie.title;
            recommendations.appendChild(movieElement);
        });
    } else {
        recommendations.innerText = 'No recommendations available for this genre.';
    }
}
