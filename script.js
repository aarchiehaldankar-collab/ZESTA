/* =========================================================
   ZESTA RESTAURANT + RESERVATION SYSTEM
========================================================= */


/* =========================================================
   DATA
========================================================= */

const cities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Goa",
    "Lucknow",
    "Chandigarh",
    "Kochi",
    "Indore",
    "Nagpur",
    "Surat",
    "Vadodara",
    "Coimbatore",
    "Visakhapatnam",
    "Bhopal",
    "Bhubaneswar",
    "Patna",
    "Guwahati",
    "Amritsar",
    "Udaipur",
    "Mysore",
    "Nashik",
    "Varanasi",
    "Dehradun",
    "Agra"
];


const cuisines = [
    "North Indian",
    "South Indian",
    "Chinese",
    "Italian",
    "Continental",
    "Asian",
    "Mexican",
    "Punjabi",
    "Mughlai",
    "Fast Food",
    "Cafe",
    "Biryani",
    "Street Food"
];


const restaurantNames = [
    "The Royal Kitchen",
    "Urban Spice",
    "The Food District",
    "The Courtyard",
    "Spice Route",
    "The Social Table",
    "Flavour House",
    "The Dining Room",
    "Saffron Kitchen",
    "The Gourmet Table"
];


const localities = [
    "City Centre",
    "MG Road",
    "High Street",
    "Main Road",
    "Market Area",
    "Central District",
    "Park Street",
    "Lake Road",
    "Downtown",
    "Station Road"
];


const restaurantImages = [

    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",

    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",

    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",

    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",

    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",

    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",

    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",

    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"

];


/* =========================================================
   MENU DATA
========================================================= */

const menuItems = {

    "North Indian": [
        ["Butter Chicken", "Creamy tomato gravy", 420],
        ["Paneer Tikka", "Tandoori cottage cheese", 320],
        ["Dal Makhani", "Slow cooked black lentils", 280],
        ["Garlic Naan", "Freshly baked naan", 90],
        ["Biryani", "Aromatic basmati rice", 350]
    ],

    "South Indian": [
        ["Masala Dosa", "Crispy dosa with potato filling", 180],
        ["Idli Sambar", "Soft idlis with sambar", 140],
        ["Medu Vada", "Crispy South Indian vada", 150],
        ["Ghee Roast", "Golden crispy dosa", 200],
        ["Filter Coffee", "Traditional South Indian coffee", 90]
    ],

    "Chinese": [
        ["Veg Hakka Noodles", "Wok tossed noodles", 260],
        ["Chicken Fried Rice", "Classic fried rice", 320],
        ["Spring Rolls", "Crispy vegetable rolls", 190],
        ["Chilli Paneer", "Spicy Indo-Chinese paneer", 280],
        ["Manchurian", "Crispy Manchurian balls", 240]
    ],

    "Italian": [
        ["Margherita Pizza", "Tomato, mozzarella and basil", 350],
        ["Penne Arrabbiata", "Pasta in spicy tomato sauce", 320],
        ["Alfredo Pasta", "Creamy white sauce pasta", 380],
        ["Garlic Bread", "Fresh baked garlic bread", 180],
        ["Tiramisu", "Classic Italian dessert", 240]
    ],

    "Continental": [
        ["Grilled Chicken", "Herb grilled chicken", 450],
        ["Veg Steak", "Grilled vegetables", 390],
        ["Cream Soup", "Chef special soup", 180],
        ["Fish & Chips", "Crispy fish with fries", 420],
        ["Pancakes", "Fluffy pancakes", 250]
    ],

    "Asian": [
        ["Sushi Platter", "Chef selection sushi", 650],
        ["Ramen", "Japanese noodle soup", 420],
        ["Thai Curry", "Thai curry with rice", 390],
        ["Dim Sum", "Steamed dumplings", 320],
        ["Teriyaki Bowl", "Rice and teriyaki protein", 420]
    ],

    "Mexican": [
        ["Veg Tacos", "Mexican street-style tacos", 280],
        ["Chicken Burrito", "Loaded Mexican burrito", 350],
        ["Nachos", "Cheesy loaded nachos", 260],
        ["Quesadilla", "Grilled cheese quesadilla", 290],
        ["Churros", "Cinnamon sugar churros", 180]
    ],

    "Punjabi": [
        ["Amritsari Kulcha", "Stuffed Punjabi kulcha", 220],
        ["Chole Bhature", "Classic Punjabi favourite", 220],
        ["Paneer Tikka", "Tandoori paneer", 320],
        ["Rajma Chawal", "Comfort Punjabi meal", 250],
        ["Lassi", "Traditional sweet lassi", 120]
    ],

    "Mughlai": [
        ["Chicken Korma", "Rich Mughlai curry", 450],
        ["Mutton Rogan Josh", "Slow cooked mutton", 520],
        ["Seekh Kebab", "Tandoori minced meat", 400],
        ["Shahi Paneer", "Royal creamy paneer", 350],
        ["Rumali Roti", "Thin Mughlai bread", 80]
    ],

    "Fast Food": [
        ["Classic Burger", "Loaded cheeseburger", 240],
        ["Peri Peri Fries", "Spicy crispy fries", 180],
        ["Chicken Burger", "Crispy chicken burger", 290],
        ["Loaded Nachos", "Cheesy nachos", 220],
        ["Cold Coffee", "Chilled creamy coffee", 150]
    ],

    "Cafe": [
        ["Cappuccino", "Freshly brewed coffee", 160],
        ["Cold Coffee", "Classic chilled coffee", 180],
        ["Club Sandwich", "Toasted cafe sandwich", 260],
        ["Pasta", "Cafe-style pasta", 300],
        ["Chocolate Cake", "Rich chocolate cake", 220]
    ],

    "Biryani": [
        ["Chicken Biryani", "Aromatic dum biryani", 350],
        ["Mutton Biryani", "Slow cooked mutton biryani", 450],
        ["Veg Biryani", "Aromatic vegetable biryani", 280],
        ["Egg Biryani", "Biryani with eggs", 300],
        ["Raita", "Cooling yoghurt side", 90]
    ],

    "Street Food": [
        ["Pani Puri", "Mumbai-style pani puri", 100],
        ["Vada Pav", "Classic Indian street food", 80],
        ["Pav Bhaji", "Buttery pav with bhaji", 150],
        ["Dahi Puri", "Crispy chaat", 130],
        ["Sev Puri", "Mumbai street classic", 120]
    ]

};


/* =========================================================
   CREATE RESTAURANTS
========================================================= */

let restaurants = [];

let restaurantID = 1;


cities.forEach((city, cityIndex) => {

    cuisines.forEach((cuisine, cuisineIndex) => {

        for (let i = 0; i < 10; i++) {

            const baseName =
                restaurantNames[i];

            const locality =
                localities[
                    (cityIndex + i + cuisineIndex)
                    % localities.length
                ];

            let type;

            if (i === 0 || i === 5) {
                type = "Fine Dining";
            }

            else if (i === 1 || i === 6) {
                type = "Cafe";
            }

            else if (i === 2 || i === 7) {
                type = "Pure Veg";
            }

            else {
                type = "Delivery";
            }


            const rating =
                Number(
                    (
                        4.0 +
                        ((i + cuisineIndex) % 10) / 10
                    ).toFixed(1)
                );


            const cost =
                500 +
                (
                    (i + cuisineIndex + cityIndex)
                    % 10
                ) * 150;


            restaurants.push({

                id: restaurantID++,

                name:
                    `${baseName} ${cuisine}`,

                city,

                cuisine,

                locality,

                rating,

                cost,

                type,

                image:
                    restaurantImages[
                        (cityIndex + cuisineIndex + i)
                        % restaurantImages.length
                    ]

            });

        }

    });

});


/*
    30 cities × 13 cuisines × 10 restaurants
    = 3900 restaurant records
*/


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let selectedType = "All";

let currentRestaurant = null;

let guestCount = 2;

let selectedMeal = "Dinner";

let selectedTime = "";

let currentBooking = null;


/* =========================================================
   INITIAL SETUP
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        populateCities();

        setupDate();

        checkLogin();

        renderRestaurants();

    }
);


/* =========================================================
   CITY DROPDOWN
========================================================= */

function populateCities() {

    const location =
        document.getElementById("location");


    cities.forEach(city => {

        const option =
            document.createElement("option");

        option.value = city;

        option.textContent =
            "📍 " + city;

        location.appendChild(option);

    });


    createCityButtons();

}


/* =========================================================
   CITY BUTTONS
========================================================= */

function createCityButtons() {

    const container =
        document.getElementById("cityButtons");

    container.innerHTML = "";


    const all =
        document.createElement("button");

    all.className =
        "city-btn active";

    all.textContent =
        "All India";

    all.onclick = function () {

        document
            .querySelectorAll(".city-btn")
            .forEach(btn =>
                btn.classList.remove("active")
            );

        all.classList.add("active");

        document.getElementById("location").value =
            "All India";

        renderRestaurants();

    };

    container.appendChild(all);


    cities.forEach(city => {

        const button =
            document.createElement("button");

        button.className =
            "city-btn";

        button.textContent =
            city;

        button.onclick = function () {

            document
                .querySelectorAll(".city-btn")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            document.getElementById("location").value =
                city;

            renderRestaurants();

        };

        container.appendChild(button);

    });

}


/* =========================================================
   RENDER RESTAURANTS
========================================================= */

function renderRestaurants() {

    const location =
        document.getElementById("location").value;

    const cuisine =
        document.getElementById("cuisine").value;

    const search =
        document
            .getElementById("search")
            .value
            .toLowerCase()
            .trim();

    const sort =
        document.getElementById("sort").value;


    let filtered =
        restaurants.filter(r => {

            const cityMatch =
                location === "All India" ||
                r.city === location;


            const cuisineMatch =
                cuisine === "All" ||
                r.cuisine === cuisine;


            const searchMatch =
                !search ||
                r.name.toLowerCase().includes(search) ||
                r.city.toLowerCase().includes(search) ||
                r.cuisine.toLowerCase().includes(search) ||
                r.locality.toLowerCase().includes(search);


            const typeMatch =
                selectedType === "All" ||
                r.type === selectedType;


            return (
                cityMatch &&
                cuisineMatch &&
                searchMatch &&
                typeMatch
            );

        });


    /* SORT */

    if (sort === "rating") {

        filtered.sort(
            (a,b) => b.rating - a.rating
        );

    }

    else if (sort === "low") {

        filtered.sort(
            (a,b) => a.cost - b.cost
        );

    }

    else if (sort === "high") {

        filtered.sort(
            (a,b) => b.cost - a.cost
        );

    }


    displayRestaurants(filtered);

}


/* =========================================================
   DISPLAY RESTAURANTS
========================================================= */

function displayRestaurants(data) {

    const grid =
        document.getElementById(
            "restaurantGrid"
        );

    const noResults =
        document.getElementById(
            "noResults"
        );

    const count =
        document.getElementById(
            "resultCount"
        );


    grid.innerHTML = "";


    count.textContent =
        `Showing ${data.length} restaurants`;


    if (data.length === 0) {

        noResults.style.display =
            "block";

        return;

    }


    noResults.style.display =
        "none";


    data.forEach(restaurant => {

        const card =
            document.createElement("div");

        card.className =
            "restaurant-card";


        card.innerHTML = `

            <div class="restaurant-image">

                <img
                    src="${restaurant.image}"
                    alt="${restaurant.name}"
                >

                ${
                    restaurant.type === "Pure Veg"
                    ?
                    `<span class="restaurant-badge">
                        PURE VEG
                    </span>`
                    :
                    ""
                }

            </div>


            <div class="restaurant-info">

                <h3>
                    ${restaurant.name}
                </h3>

                <p class="restaurant-location">
                    📍 ${restaurant.locality},
                    ${restaurant.city}
                </p>

                <p class="restaurant-cuisine">
                    ${restaurant.cuisine}
                </p>


                <div class="restaurant-meta">

                    <span class="rating">
                        ★ ${restaurant.rating}
                    </span>

                    <span class="cost">
                        ₹${restaurant.cost}
                        for two
                    </span>

                </div>


                <div class="card-actions">

                    <button
                        class="menu-button"
                        onclick="openMenu(${restaurant.id})"
                    >
                        View Menu
                    </button>

                    <button
                        class="reserve-button"
                        onclick="startReservation(${restaurant.id})"
                    >
                        Reserve Table
                    </button>

                </div>

            </div>
        `;


        grid.appendChild(card);

    });

}


/* =========================================================
   FILTER TYPE
========================================================= */

function setType(type, button) {

    selectedType = type;


    document
        .querySelectorAll(".filter")
        .forEach(btn =>
            btn.classList.remove("active")
        );


    button.classList.add("active");


    renderRestaurants();

}


/* =========================================================
   SEARCH
========================================================= */

document
    .getElementById("search")
    .addEventListener(
        "input",
        renderRestaurants
    );


document
    .getElementById("location")
    .addEventListener(
        "change",
        renderRestaurants
    );


document
    .getElementById("cuisine")
    .addEventListener(
        "change",
        renderRestaurants
    );


/* =========================================================
   RESET
========================================================= */

function resetFilters() {

    document.getElementById("location").value =
        "All India";

    document.getElementById("cuisine").value =
        "All";

    document.getElementById("search").value =
        "";

    document.getElementById("sort").value =
        "recommended";


    selectedType = "All";


    document
        .querySelectorAll(".filter")
        .forEach(btn =>
            btn.classList.remove("active")
        );


    document
        .querySelector(".filter")
        .classList.add("active");


    document
        .querySelectorAll(".city-btn")
        .forEach(btn =>
            btn.classList.remove("active")
        );


    document
        .querySelector(".city-btn")
        .classList.add("active");


    renderRestaurants();

}


/* =========================================================
   MENU
========================================================= */

function openMenu(id) {

    const restaurant =
        restaurants.find(r => r.id === id);

    if (!restaurant) return;


    const items =
        menuItems[restaurant.cuisine];


    const menuHTML =
        items.map(item => {

            return `

                <div class="menu-item">

                    <div class="menu-item-left">

                        <strong>
                            ${item[0]}
                        </strong>

                        <small>
                            ${item[1]}
                        </small>

                    </div>

                    <span class="menu-price">
                        ₹${item[2]}
                    </span>

                </div>

            `;

        }).join("");


    document.getElementById(
        "menuContent"
    ).innerHTML = `

        <div class="menu-header">

            <img
                src="${restaurant.image}"
            >

            <div>

                <h2>
                    ${restaurant.name}
                </h2>

                <p>
                    ${restaurant.cuisine}
                    · ${restaurant.city}
                </p>

                <p>
                    ★ ${restaurant.rating}
                </p>

            </div>

        </div>


        <h3>
            Menu
        </h3>

        <div class="menu-category">

            ${menuHTML}

        </div>


        <button
            class="primary-button full"
            onclick="closeModal('menuModal'); startReservation(${restaurant.id})"
        >
            Reserve Table
        </button>

    `;


    openModal("menuModal");

}


/* =========================================================
   LOGIN
========================================================= */

function openLogin() {

    openModal("loginModal");

}


function loginUser(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "loginName"
        ).value.trim();

    const phone =
        document.getElementById(
            "loginPhone"
        ).value.trim();

    const email =
        document.getElementById(
            "loginEmail"
        ).value.trim();


    if (phone.length !== 10) {

        alert(
            "Please enter a valid 10-digit phone number."
        );

        return;

    }


    const user = {

        name,
        phone,
        email

    };


    localStorage.setItem(
        "zestaUser",
        JSON.stringify(user)
    );


    updateUserUI();

    closeModal("loginModal");


    alert(
        `Welcome to ZESTA, ${name}!`
    );

}


function checkLogin() {

    updateUserUI();

}


function updateUserUI() {

    const stored =
        localStorage.getItem(
            "zestaUser"
        );


    const loginHeader =
        document.getElementById(
            "loginHeader"
        );

    const userMenu =
        document.getElementById(
            "userMenu"
        );


    if (!stored) {

        loginHeader.style.display =
            "block";

        userMenu.style.display =
            "none";

        return;

    }


    const user =
        JSON.parse(stored);


    loginHeader.style.display =
        "none";

    userMenu.style.display =
        "flex";


    document.getElementById(
        "headerUserName"
    ).textContent =
        user.name;


    document.getElementById(
        "userInitial"
    ).textContent =
        user.name
            .charAt(0)
            .toUpperCase();

}


/* =========================================================
   USER MENU
========================================================= */

function toggleUserMenu() {

    const stored =
        localStorage.getItem(
            "zestaUser"
        );

    if (!stored) {

        openLogin();

        return;

    }


    const user =
        JSON.parse(stored);


    const answer =
        confirm(
            `Logged in as ${user.name}\n\n` +
            `Press OK to logout.`
        );


    if (answer) {

        localStorage.removeItem(
            "zestaUser"
        );

        updateUserUI();

        alert("You have been logged out.");

    }

}


/* =========================================================
   START RESERVATION
========================================================= */

function startReservation(id) {

    const user =
        localStorage.getItem(
            "zestaUser"
        );


    if (!user) {

        alert(
            "Please login or sign up before reserving a table."
        );

        openLogin();

        return;

    }


    currentRestaurant =
        restaurants.find(
            r => r.id === id
        );


    if (!currentRestaurant) return;


    guestCount = 2;

    selectedMeal = "Dinner";

    selectedTime = "";


    document.getElementById(
        "bookingRestaurantName"
    ).textContent =
        currentRestaurant.name;


    document.getElementById(
        "bookingRestaurantLocation"
    ).textContent =
        `📍 ${currentRestaurant.locality}, ${currentRestaurant.city}`;


    document.getElementById(
        "guestCount"
    ).textContent =
        guestCount;


    document
        .querySelectorAll(".meal")
        .forEach(btn =>
            btn.classList.remove("active")
        );


    document
        .querySelector(".meal:nth-child(2)")
        .classList.add("active");


    createTimeSlots();


    goToBookingStep1();


    openModal(
        "reservationModal"
    );

}


/* =========================================================
   DATE
========================================================= */

function setupDate() {

    const input =
        document.getElementById(
            "bookingDate"
        );


    const today =
        new Date();


    const yyyy =
        today.getFullYear();


    const mm =
        String(
            today.getMonth() + 1
        ).padStart(2,"0");


    const dd =
        String(
            today.getDate()
        ).padStart(2,"0");


    const todayString =
        `${yyyy}-${mm}-${dd}`;


    input.min =
        todayString;


    input.value =
        todayString;

}


/* =========================================================
   GUESTS
========================================================= */

function changeGuests(amount) {

    guestCount += amount;


    if (guestCount < 1)
        guestCount = 1;


    if (guestCount > 20)
        guestCount = 20;


    document.getElementById(
        "guestCount"
    ).textContent =
        guestCount;

}


/* =========================================================
   MEAL
========================================================= */

function selectMeal(meal, button) {

    selectedMeal = meal;


    document
        .querySelectorAll(".meal")
        .forEach(btn =>
            btn.classList.remove("active")
        );


    button.classList.add("active");


    createTimeSlots();

}


/* =========================================================
   TIME SLOTS
========================================================= */

function createTimeSlots() {

    const container =
        document.getElementById(
            "timeSlots"
        );


    container.innerHTML = "";


    let times;


    if (selectedMeal === "Lunch") {

        times = [
            "12:00 PM",
            "12:30 PM",
            "1:00 PM",
            "1:30 PM",
            "2:00 PM",
            "2:30 PM"
        ];

    }

    else {

        times = [
            "6:30 PM",
            "7:00 PM",
            "7:30 PM",
            "8:00 PM",
            "8:30 PM",
            "9:00 PM",
            "9:30 PM",
            "10:00 PM"
        ];

    }


    times.forEach(time => {

        const button =
            document.createElement(
                "button"
            );


        button.className =
            "time-slot";


        button.textContent =
            time;


        button.onclick = function () {

            document
                .querySelectorAll(".time-slot")
                .forEach(btn =>
                    btn.classList.remove(
                        "selected"
                    )
                );


            button.classList.add(
                "selected"
            );


            selectedTime =
                time;

        };


        container.appendChild(
            button
        );

    });

}


/* =========================================================
   BOOKING STEP 1
========================================================= */

function goToBookingStep1() {

    document.getElementById(
        "bookingStep1"
    ).classList.remove("hidden");


    document.getElementById(
        "bookingStep2"
    ).classList.add("hidden");


    document.getElementById(
        "bookingStep3"
    ).classList.add("hidden");


    updateBookingIndicators(1);

}


/* =========================================================
   STEP 2
========================================================= */

function goToBookingStep2() {

    const date =
        document.getElementById(
            "bookingDate"
        ).value;


    if (!date) {

        alert(
            "Please select a date."
        );

        return;

    }


    if (!selectedTime) {

        alert(
            "Please select a time slot."
        );

        return;

    }


    const user =
        JSON.parse(
            localStorage.getItem(
                "zestaUser"
            )
        );


    document.getElementById(
        "bookingUserName"
    ).textContent =
        user.name;


    document.getElementById(
        "bookingUserPhone"
    ).textContent =
        "+91 " + user.phone;


    document.getElementById(
        "summaryRestaurant"
    ).textContent =
        currentRestaurant.name;


    document.getElementById(
        "summaryDate"
    ).textContent =
        formatDate(date);


    document.getElementById(
        "summaryGuests"
    ).textContent =
        guestCount;


    document.getElementById(
        "summaryTime"
    ).textContent =
        selectedTime;


    document.getElementById(
        "bookingStep1"
    ).classList.add("hidden");


    document.getElementById(
        "bookingStep2"
    ).classList.remove("hidden");


    document.getElementById(
        "bookingStep3"
    ).classList.add("hidden");


    updateBookingIndicators(2);

}


/* =========================================================
   PAYMENT
========================================================= */

function goToPayment() {

    document.getElementById(
        "bookingStep2"
    ).classList.add("hidden");


    document.getElementById(
        "bookingStep3"
    ).classList.remove("hidden");


    updateBookingIndicators(3);

}


/* =========================================================
   COMPLETE BOOKING
========================================================= */

function completeBooking() {

    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        ).value;


    const user =
        JSON.parse(
            localStorage.getItem(
                "zestaUser"
            )
        );


    const date =
        document.getElementById(
            "bookingDate"
        ).value;


    const bookingID =
        "ZST" +
        Math.floor(
            100000 +
            Math.random() * 900000
        );


    const booking = {

        id: bookingID,

        restaurant:
            currentRestaurant.name,

        city:
            currentRestaurant.city,

        date,

        time:
            selectedTime,

        guests:
            guestCount,

        meal:
            selectedMeal,

        payment,

        user:
            user.name,

        phone:
            user.phone,

        status:
            "Confirmed",

        request:
            document.getElementById(
                "specialRequest"
            ).value

    };


    /* SAVE BOOKING */

    const oldBookings =
        JSON.parse(
            localStorage.getItem(
                "zestaBookings"
            )
        ) || [];


    oldBookings.push(
        booking
    );


    localStorage.setItem(
        "zestaBookings",
        JSON.stringify(
            oldBookings
        )
    );


    /* CONFIRMATION */

    document.getElementById(
        "confirmRestaurant"
    ).textContent =
        booking.restaurant;


    document.getElementById(
        "confirmDate"
    ).textContent =
        formatDate(booking.date);


    document.getElementById(
        "confirmTime"
    ).textContent =
        booking.time;


    document.getElementById(
        "confirmGuests"
    ).textContent =
        booking.guests;


    document.getElementById(
        "confirmId"
    ).textContent =
        booking.id;


    closeModal(
        "reservationModal"
    );


    openModal(
        "confirmationModal"
    );

}


/* =========================================================
   BOOKING INDICATORS
========================================================= */

function updateBookingIndicators(step) {

    document
        .querySelectorAll(".booking-step")
        .forEach((element,index) => {

            if (index < step) {

                element.classList.add(
                    "active"
                );

            }

            else {

                element.classList.remove(
                    "active"
                );

            }

        });

}


/* =========================================================
   MY BOOKINGS
========================================================= */

function showBookings() {

    const user =
        localStorage.getItem(
            "zestaUser"
        );


    if (!user) {

        openLogin();

        return;

    }


    const bookings =
        JSON.parse(
            localStorage.getItem(
                "zestaBookings"
            )
        ) || [];


    const container =
        document.getElementById(
            "bookingsList"
        );


    if (bookings.length === 0) {

        container.innerHTML = `

            <div class="empty-bookings">

                <div style="font-size:45px">
                    📅
                </div>

                <h3>
                    No bookings yet
                </h3>

                <p>
                    Reserve a table and
                    your booking will appear here.
                </p>

            </div>

        `;

    }

    else {

        container.innerHTML =
            bookings
                .slice()
                .reverse()
                .map(booking => `

                    <div
                        class="booking-history-card"
                    >

                        <h3>
                            ${booking.restaurant}
                        </h3>

                        <p>
                            📍 ${booking.city}
                        </p>

                        <p>
                            📅 ${formatDate(booking.date)}
                        </p>

                        <p>
                            🕐 ${booking.time}
                        </p>

                        <p>
                            👥 ${booking.guests} guests
                        </p>

                        <p>
                            💳 ${booking.payment}
                        </p>

                        <p>
                            🎫 Booking ID:
                            <strong>
                                ${booking.id}
                            </strong>
                        </p>

                        <button
                            class="cancel-booking"
                            onclick="cancelBooking('${booking.id}')"
                        >
                            Cancel Booking
                        </button>

                    </div>

                `)
                .join("");

    }


    openModal(
        "bookingsModal"
    );

}


/* =========================================================
   CANCEL BOOKING
========================================================= */

function cancelBooking(id) {

    const answer =
        confirm(
            "Are you sure you want to cancel this booking?"
        );


    if (!answer) return;


    let bookings =
        JSON.parse(
            localStorage.getItem(
                "zestaBookings"
            )
        ) || [];


    bookings =
        bookings.filter(
            booking =>
                booking.id !== id
        );


    localStorage.setItem(
        "zestaBookings",
        JSON.stringify(
            bookings
        )
    );


    showBookings();

}


/* =========================================================
   MODALS
========================================================= */

function openModal(id) {

    document
        .getElementById(id)
        .classList.add("show");

}


function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("show");

}


/* CLOSE WHEN CLICKING OUTSIDE */

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "modal"
            )
        ) {

            event.target.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================================
   DATE FORMAT
========================================================= */

function formatDate(date) {

    const d =
        new Date(
            date + "T00:00:00"
        );


    return d.toLocaleDateString(
        "en-IN",
        {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );

}


/* =========================================================
   HOME
========================================================= */

function goHome() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}