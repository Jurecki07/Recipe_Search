// let main = document.querySelector(".main");
let searchInput = document.querySelector("#searchInput");
let recipeDisplay = document.querySelector(".recipes");

function searchRecipes() {
    event.preventDefault();
    recipeDisplay.innerHTML = "";
    let searchValue = searchInput.value;
    console.log('searchValue: ', searchValue);

    fetch("http://recipepuppyproxy.herokuapp.com/api/?q=" + searchValue)
        // Data is fetched and we get a promise.
        .then(
        // The promise returns a response from the server.
        function (response) {
            // We process the response accordingly.
            return response.json()
                .then(function (data) {
                    console.log("Here is the data:", data);
                    let results = data.results;

                    // loop through results
                    // create a div with a class of recipe
                    // create an h4 and give it the recipe title and append it to the new div
                    // create an a give it an href of the recipe href
                    // add the new a to the new div
                    // create an img and give it a src with the recipe image & append it to the new a
                    // append the new div to the recipeDisplay 

                    for (let i = 0; i < results.length; i++) {
                        let divOne = document.createElement("div");
                        divOne.classList.add("recipeBox");

                        let hFour = document.createElement("h4");
                        hFour.textContent = results[i].title
                        divOne.appendChild(hFour);

                        let aTag = document.createElement("a");
                        aTag.href = results[i].href
                        divOne.appendChild(aTag);
                        // aTag.textContent = results[i].href

                        

                        let getImg = document.createElement("img")
                        // if !results[i].thumbnail ...use a default image
                        // if (results[i].thumbnail === ""){
                        // let placeholder = document.createElement("img")
                        // placeholder.src = link?
                        // } what about a .then? 
                        getImg.src= results[i].thumbnail
                        aTag.appendChild(getImg);
                        







                        recipeDisplay.appendChild(divOne);
                    }

                })
        })
}
