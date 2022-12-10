const setClickLink = (page) => {
    switch (page) {
        case 0:
            return window.location.href = 'ristoranti.html';
        case 1:
            return window.location.href = 'hotels.html';
        case 2:
            return window.location.href = 'voli.html';
        case 3:
            return window.location.href = 'luoghi.html';
    }
}

const renderMenuSection = (category) => {
    const menu1 = document.querySelectorAll('.menu-section');
    let w = document.createElement('div');
    const menu = document.querySelector('.navigation');
    let x = menu.querySelectorAll('.menu-section');
    let y = document.createElement('li');
    let z = document.createElement('span');
    switch (category) {
        case 0:
            w.innerHTML = `
            <center>
                <li class="active">
                    <span class="menu-item">Ristoranti</span>
                </li>
            </center>
            `;
            menu1[0].innerHTML = w.innerHTML;
            z.innerText = "Ristoranti";
            z.classList.add('menu-item');
            y.classList.add('menu-section');
            y.classList.add('active');
            y.append(z);
            x[0].replaceWith(y);
            return x;
        case 1:
            w.innerHTML = `
            <center>
                <li class="active">
                    <span class="menu-item">Hotels</span>
                </li>
            </center>
            `;
            menu1[1].innerHTML = w.innerHTML;
            z.innerText = "Hotels";
            z.classList.add('menu-item');
            y.classList.add('menu-section');
            y.classList.add('active');
            y.append(z);
            x[1].replaceWith(y);
            return x;
        case 2:
            w.innerHTML = `
            <center>
                <li class="active">
                    <span class="menu-item">Luoghi</span>
                </li>
            </center>
            `;
            menu1[2].innerHTML = w.innerHTML;
            z.innerText = "Voli";
            z.classList.add('menu-item');
            y.classList.add('menu-section');
            y.classList.add('active');
            y.append(z);
            x[2].replaceWith(y);
            return x;
        case 3:
            w.innerHTML = `
            <center>
                <li class="active">
                    <span class="menu-item">Luoghi</span>
                </li>
            </center>
            `;
            menu1[3].innerHTML = w.innerHTML;
            z.innerText = "Luoghi";
            z.classList.add('menu-item');
            y.classList.add('menu-section');
            y.classList.add('active');
            y.append(z);
            x[3].replaceWith(y);
            return x;
    }
}

const renderRestaurantSection = (data) => {
    const detailSection = document.querySelector('.detail-card');
    const elementSection = document.createElement('div');
    elementSection.innerHTML = `
    <div class="detail-card-header">
        <a class="link-home" onClick="setClickLink(0)">&#8592</a>
        <h2 class="title-section">${data.nameValue}</h2>
    </div>
    <div class="detail-card-body">
        <p class="t-paragraph">${data.descriptionValue}</p>
        <div class="detail-card-info-wrap">
            <div class="detail-card-info-item">
                <label class="t-label">City</label>
                <p class="t-text">${data.cityValue}</p>
            </div>
            <div class="detail-card-info-item">
                <label class="t-label">Address</label>
                <p class="t-text">${data.addressValue}</p>
            </div>
            <div class="detail-card-info-item">
                <label class="t-label">Opening Time</label>
                <p class="t-text">${data.openingValue}</p>
            </div>
            <div class="detail-card-info-item">
                <label class="t-label">Telphone Number</label>
                <p class="t-text">${data.telephoneValue}</p>
            </div>
        </div>
    </div>
    `;
    let x = renderMenuSection(0);
    detailSection.appendChild(elementSection);
}

const renderHotelSection = (data) => {
    const detailSection = document.querySelector('.content');
    const elementSection = document.createElement('section');
    elementSection.innerHTML = `
    <div class="detail-card">
        <div class="detail-card-header">
            <a class="link-home" onClick="setClickLink(1)">&#8592</a>
            <h2 class="title-section">${data.nameValue}</h2>
        </div>
        <div class="detail-card-body">
            <p class="t-paragraph">${data.descriptionValue}</p>
            <div class="detail-card-info-wrap">
                <div class="detail-card-info-item">
                    <label class="t-label">City</label>
                    <p class="t-text">${data.cityValue}</p>
                </div>
                <div class="detail-card-info-item">
                    <label class="t-label">Address</label>
                    <p class="t-text">${data.addressValue}</p>
                </div>
                <div class="detail-card-info-item">
                    <label class="t-label">Telphone Number</label>
                    <p class="t-text">${data.telephoneValue}</p>
                </div>
            </div>
        </div>
    </div>
    `;
    let x = renderMenuSection(1);
    detailSection.appendChild(elementSection);
}

const renderFlightSection = (data) => {
    const detailSection = document.querySelector('.content');
    const elementSection = document.createElement('section');
    elementSection.innerHTML = `
    <div class="detail-card">
        <div class="detail-card-header">
            <a class="link-home" onClick="setClickLink(2)">&#8592</a>
            <h2 class="title-section">${data.destinationValue}</h2>
        </div>
        <div class="detail-card-body">
            <p class="t-paragraph">${data.descriptionValue}</p>
            <div class="detail-card-info-wrap">
                <div class="detail-card-info-item">
                    <label class="t-label">Price</label>
                    <p class="t-text">${data.priceValue}</p>
                </div>
                <div class="detail-card-info-item">
                    <label class="t-label">Company</label>
                    <p class="t-text">${data.companyValue}</p>
                </div>
                <div class="detail-card-info-item">
                    <label class="t-label">Ticket Code</label>
                    <p class="t-text">${data.codeValue}</p>
                </div>
            </div>
        </div>
    </div>
    `;
    let x = renderMenuSection(2);
    detailSection.appendChild(elementSection);
}

const renderPlaceSection = (data) => {
    const detailSection = document.querySelector('.content');
    const elementSection = document.createElement('section');
    elementSection.innerHTML = `
    <div class="detail-card">
        <div class="detail-card-header">
            <a class="link-home" onClick="setClickLink(3)">&#8592</a>
            <h2 class="title-section">${data.placeValue}</h2>
        </div>
        <div class="detail-card-body">
            <p class="t-paragraph">${data.descriptionValue}</p>
            <div class="detail-card-info-wrap">
                <div class="detail-card-info-item">
                    <label class="t-label">Location</label>
                    <p class="t-text">${data.locationValue}</p>
            </div>
        </div>
    </div>
    `;
    let x = renderMenuSection(3);
    detailSection.appendChild(elementSection);
}

window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const category = urlParams.get('category');
    switch (category) {
        case "0":
            fetch(`http://localhost:3000/restaurants/${id}`)
                .then((response) => response.json())
                .then((data) => renderRestaurantSection(data));
            break;
        case "1":
            fetch(`http://localhost:3000/hotels/${id}`)
                .then((response) => response.json())
                .then((data) => renderHotelSection(data));
            break;
        case "2":
            fetch(`http://localhost:3000/flights/${id}`)
                .then((response) => response.json())
                .then((data) => renderFlightSection(data));
            break;
        case "3":
            fetch(`http://localhost:3000/places/${id}`)
                .then((response) => response.json())
                .then((data) => renderPlaceSection(data));
            break;
    }
})