let tblCountries = document.getElementById("tblCountries");

let row = document.getElementById("card-row");

let cardBody = "";

let tableBody = `<tr>
                    <th>Name</th>
                    <th>Flag</th>
                </tr>`;

fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then(data => {
        data.forEach(element => {
            cardBody += `<div class="col-12 mb-3">
                            <div class="card" style="width: 100%;">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="${element.flags.png}" class="img-fluid rounded-start" alt="Flag of ${element.name.official}">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">${element.name.official}</h5>
                                            <p class="card-text">${element.flags.alt}</p>
                                            <p class="card-text">Region: ${element.region}</p>
                                            <p class="card-text">Population: ${element.population}</p>
                                            <a href="${element.maps.googleMaps}" class="btn btn-primary">Go to Map</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;

            tableBody += `<tr>
                            <td>
                                <h1>${element.name.common}</h1> <br>
                                <p>Official Name: ${element.name.official}</p>
                                <p>Region: ${element.region}</p>
                                <p>Population: ${element.population}</p>
                                <a class="btn btn-primary" href="${element.maps.googleMaps}">Go To Map</a>
                            </td>
                            <td><img src="${element.flags.png}" alt=""></td>
                        </tr>`;
        });

        row.innerHTML = cardBody;

        tblCountries.innerHTML = tableBody;
    });

function searchCountry() {
    let userInput = document.getElementById("txtInput").value;

    let flagImg = document.getElementById("flagImg");
    let name = document.getElementById("name");
    let officialName = document.getElementById("officialName");
    let region = document.getElementById("region");
    let population = document.getElementById("population");

    fetch(`https://restcountries.com/v3.1/name/${userInput}`)
        .then(res => res.json())
        .then(data => {
            data.forEach(obj => {
                flagImg.src = obj.flags.png;
                name.innerText = obj.name.common;
                officialName.innerText = obj.name.official;
                region.innerText = obj.region;
                population.innerText = obj.population;
            });
        });
}