searchBtn.onclick = async () => {
    if(rowCard!==""){
        rowCard.innerHTML = "";
    }
    let movieName = search.value;
    let url = 'https://omdb-api.now.sh/?type=movie&s=' + movieName;
    let response = await fetch(url);
    let commits = await response.json();
    for (let movie of commits.Search){
        let avatar = movie.Poster;
        let title = movie.Title;
        let year = movie.Year;

        let card =
            `<div class="col-lg-2 overflow-auto my-4 border">
                    <img src = ${avatar} class="w-100" title="See profile">
                    <h4 class="text-center">${title}</h4>
                    <h5 class="text-center">${year}</h5>
            </div>`;

        rowCard.innerHTML += card
    }
};