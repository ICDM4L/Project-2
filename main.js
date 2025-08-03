document.addEventListener("DOMContentLoaded", () => {
const apiKey = "XRkcxOda39gj5SyRsYjZBDTKDrZGXITj"; 
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("submit");
const resultsDiv = document.getElementById("results");

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (!query) return alert("Please enter a search term");
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=5`)
        .then(res => res.json())
        .then(data => {
            resultsDiv.innerHTML = ""; // clear old results
            data.data.forEach(gif => {
                const img = document.createElement("img");
                img.src = gif.images.fixed_height.url;
                img.alt = gif.title;
                resultsDiv.appendChild(img);
            });
        })
        .catch(err => console.error("Error fetching GIFs:", err));
});
});