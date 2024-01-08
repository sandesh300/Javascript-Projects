// API URLs for fetching movies
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

// DOM elements
const movieBox = document.querySelector("#movie-box");

// Function to fetch movies from the API
const getMovies = async (url) => {
    // Fetch data from the API
    const response = await fetch(url);
    const data = await response.json();
    
    // Display the fetched movies
    showMovies(data);
};

// Initial call to fetch popular movies when the page loads
getMovies(APIURL);

// Function to display movies in the movie box
const showMovies = (data) => {
    // Clear previous movie data
    movieBox.innerHTML = "";

    // Loop through the movie data and create movie boxes
    data.results.forEach((result) => {
        // Set the image path based on whether there is a poster path available
        const imagePath = result.poster_path === null ? "img/image-missing.png" : IMGPATH + result.poster_path;

            // <div class="box">
            //     <img src="${IMGPATH+result}" alt="" />
            //     <div class="overlay">
            //         <h2>Overview:</h2>
            //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis iste doloribus quam voluptatum, illum unde nostrum dignissimos, mollitia, sapiente porro natus neque cupiditate distinctio quod possimus aliquid reiciendis vel. Soluta?
            //     </div>
            // </div>
            // `
            // Create a box element for each movie
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
            <img src="${imagePath}" alt="" />
            <div class="overlay">
                <div class="title"> 
                    <h2>${result.original_title}</h2>
                    <span>${result.vote_average}</span>
                </div>
                <h3>Overview:</h3>
                <p>${result.overview}</p>
            </div>
        `;

        // Append the box to the movie box container
        movieBox.appendChild(box);
    });
};

// Event listener for the search input
document.querySelector("#search").addEventListener(
    "keyup",
    function (event) {
        // Check if the search input is not empty
        if (event.target.value != "") {
            // Fetch movies based on the search query
            getMovies(SEARCHAPI + event.target.value);
        } else {
            // If search input is empty, fetch popular movies
            getMovies(APIURL);
        }
    }
);