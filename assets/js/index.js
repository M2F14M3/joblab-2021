const setClickListeners = (event, category) => {
    const element = event.target;
    const id = element.dataset.id;
    return window.location.href = `detail-page.html?category=${category}&id=${id}`;
}

const renderRestaurantsCards = (restaurants) => {
    const cardContainer = document.querySelector('.card-container');
    restaurants.forEach((restaurants) => {
        const elementCard = document.createElement('div');
        elementCard.innerHTML = `
        <h2 class="card-title">${restaurants.nameValue}</h2>
        <div class="card-body">
            <div class="card-info">
                <label class="t-label">City</label>
                <p class="t-text">${restaurants.cityValue}</p>
            </div>
            <div class="card-info">
                <label class="t-label">Address</label>
                <p class="t-text">${restaurants.addressValue}</p>
            </div>
            <div class="card-info">
                <label class="t-label">Opening Time</label>
                <p class="t-text">${restaurants.openingValue}</p>
            </div>
            <div class="card-info">
                <label class="t-label">Telphone Number</label>
                <p class="t-text">${restaurants.telephoneValue}</p>
            </div>
        </div>
        <div class="card-footer">
            <a class="read-more-cta" data-id="${restaurants.id}" onClick="setClickListeners(event,${restaurants.category})">View More</a>
        </div>
        `;
        elementCard.classList.add('card');
        cardContainer.appendChild(elementCard);
    });
}

const renderHotelsCards = (hotels) => {
    const cardContainer = document.querySelector('.card-container');
    hotels.forEach((hotels) => {
        const elementCard = document.createElement('div');
        elementCard.innerHTML = `
        <h2 class="card-title">${hotels.nameValue}</h2>
        <div class="card-body">
            <div class="card-info">
                <label class="t-label">City</label>
                <p class="t-text">${hotels.cityValue}</p>
            </div>
            <div class="card-info">
                <label class="t-label">Address</label>
                <p class="t-text">${hotels.addressValue}</p>
            </div>
            <div class="card-info">
                <label class="t-label">Telphone Number</label>
                <p class="t-text">${hotels.telephoneValue}</p>
            </div>
        </div>
        <div class="card-footer">
            <a class="read-more-cta" data-id="${hotels.id}" onClick="setClickListeners(event,${hotels.category})">View More</a>
        </div>
        `;
        elementCard.classList.add('card');
        cardContainer.appendChild(elementCard);
    });
}

const renderFlightsCards = (flights) => {
    const cardContainer = document.querySelector('.card-container');
    flights.forEach((flights) => {
        const elementCard = document.createElement('div');
        elementCard.innerHTML = `
        <h2 class="card-title">${flights.destinationValue}</h2>
        <div class="card-body">
            <div class="card-info">
                <label class="t-label">Price</label>
                <p class="t-text">${flights.priceValue}</p>
            </div>
            <div class="card-info">
                <label class="t-label">Company</label>
                <p class="t-text">${flights.companyValue}</p>
            </div>
            <div class="card-info">
                <label class="t-label">Ticket Code</label>
                <p class="t-text">${flights.codeValue}</p>
            </div>
        </div>
        <div class="card-footer">
            <a class="read-more-cta" data-id="${flights.id}" onClick="setClickListeners(event,${flights.category})">View More</a>
        </div>
        `;
        elementCard.classList.add('card');
        cardContainer.appendChild(elementCard);
    });
}

const renderPlacesCards = (places) => {
    const cardContainer = document.querySelector('.card-container');
    places.forEach((places) => {
        const elementCard = document.createElement('div');
        elementCard.innerHTML = `
        <h2 class="card-title">${places.placeValue}</h2>
        <div class="card-body">
            <div class="card-info">
                <label class="t-label">Location</label>
                <p class="t-text">${places.locationValue}</p>
            </div>
        </div>
        <div class="card-footer" class="pointer">
            <a class="read-more-cta" data-id="${places.id}" onClick="setClickListeners(event,${places.category})">View More</a>
        </div>
        `;
        elementCard.classList.add('card');
        cardContainer.appendChild(elementCard);
    });
}

window.addEventListener('load', () => {
    const pageName = window.location.pathname;
    switch (pageName) {
        case "/ristoranti.html":
            fetch('http://localhost:3000/restaurants')
                .then((response) => response.json())
                .then((data) => renderRestaurantsCards(data));
            break;
        case "/hotels.html":
            fetch('http://localhost:3000/hotels')
                .then((response) => response.json())
                .then((data) => renderHotelsCards(data));
            break;
        case "/voli.html":
            fetch('http://localhost:3000/flights')
                .then((response) => response.json())
                .then((data) => renderFlightsCards(data));
            break;
        case "/luoghi.html":
            fetch('http://localhost:3000/places')
                .then((response) => response.json())
                .then((data) => renderPlacesCards(data));
            break;
    }
})