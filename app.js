let main = document.querySelector(".main");


fetch("http://www.recipepuppy.com/api/")
    // Data is fetched and we get a promise.
    .then(
    // The promise returns a response from the server.
    function (response) {
        // We process the response accordingly.
        return response.json()
            .then(function (data) {
                console.log("Here is the data:", data);

                for (let i = 0; i < data.results.length; i++) {
                    let currentImgSrc = data.results[i].thumbnail

                    let newImg = `<img src=${currentImgSrc} alt="noImage">`
                    main.innerHTML += newImg

                }

            })
    });
