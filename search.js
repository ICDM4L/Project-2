document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submit");
    const searchInput = document.getElementById("search");
    const postersDiv = document.getElementById("posters");

    submitBtn.addEventListener("click", () => {

        postersDiv.innerHTML = "";
        const userInput = searchInput.value.trim();
        if (!userInput) {
            alert("Please enter a movie name");
            return;
        }

        fetch(`https://www.omdbapi.com/?apikey=dbff4d94&s=${encodeURIComponent(userInput)}`)
            .then(res => res.json())
            .then(data => {
                if (data.Search) {
                    displayMovies(data.Search);
                } else {
                    postersDiv.innerHTML = "<p>No movies found.</p>";
                }
            })
            .catch(err => console.error("Error fetching movies:", err));
    });

    function displayMovies(movies) {
        movies.forEach(movie => {
            let poster = movie.Poster;
            console.log("element", movie);
            console.log("poster", poster);

            if (poster && poster !== "N/A") {
                const img = document.createElement("img");
                img.src = poster;
                img.alt = "movie poster";
                postersDiv.appendChild(img);
            }
        });
    }
});



/*let script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
document.head.appendChild(script);

$(document).ready(()=>{

    $("#submit").click(()=>{
        alert('clicked!')
    })
       $("#posters").empty();
        let userInput = $("#search").val()

         $.ajax({
            url: `https://www.omdbapi.com/?apikey=dbff4d94&s=${userInput}`
        })
            .done((res)=>{
                let movies =res.Search;
                 displayMovies(movies);
            })
    })

    function displayMovies(movies){
            $.each(movies, (i, e)=>{
                    let poster = e.posteroster
                    console.log("element", e)
                    console.log("poster", poster)
                    if(poster !== "N/A"){
                    $("#posters").append(`<img src="${poster}" 
                        alt="movie poster"/>`)
                    }
                })
    }
})*/