const carousel = document.querySelector(".testimonials-content-list");
const arrowBtns = document.querySelectorAll(".slider-arrow i");
const firstCardWidth = carousel.querySelector(".testimonial-card").offsetWidth;
const carouselChildrens = [...carousel.children];
const totalWidth = carousel.scrollWidth;

// get the number of cards that can fit in the carousal at once
let cardPerView = Math.random(carousel.offsetWidth / firstCardWidth);
let cardCount = 3;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if(cardCount == 10 && btn.id === "right"){
            carousel.scrollLeft = 0;
            cardCount = 3;
        }else{
            if(btn.id === "left" && cardCount == 3){
                carousel.scrollLeft = totalWidth;
                cardCount = 10;
            }else{
                btn.id === "left" ? cardCount--: cardCount++;
                carousel.scrollLeft += btn.id === "left" ? -(firstCardWidth + 30) : (firstCardWidth + 30);
            }
        }
    });
});

const intervalId = setInterval(function() {
    if(cardCount == 10){
        carousel.scrollLeft = 0;
        cardCount = 3;
    }else {
        cardCount++;
        carousel.scrollLeft += firstCardWidth + 30;
    }
}, 5000);

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("callback_form");
    const button = document.querySelector('.submit-btn');
    const loaderIcon = document.querySelector('.loader-icon');
    const input = document.getElementById("contact_number");
    const errorMessage = document.getElementById("error-message");
    
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(event.target);

        if (input.value.length != 10) {
            errorMessage.textContent = "Mobile number must be 10 digits long";
            e.preventDefault();
            return;
        }

        button.disabled = true;
        loaderIcon.style.display = "block";

        const data = {
            name: formData.get('name'),
            contact_number: formData.get('contact_number')
        }
        
        // Make an AJAX request using the fetch API
        // fetch('https://api.artistrymedia.agency/save-lead', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Handle the response data
        //     if(data.status == "Success"){
                const inputName = document.getElementById('name');
                const inputNumber = document.getElementById('contact_number');
                const successElement = document.getElementById('success-message');
                const formElement = document.getElementById('callback_form');
                button.disabled = false;
                loaderIcon.style.display = "none";
                formElement.style.display = 'none';
                successElement.style.display = 'flex';
                inputName.value = '';
                inputNumber.value = '';
            // }
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        // });
    });

    const scrollButton = document.getElementById("callback_btn");

    scrollButton.addEventListener("click", function() {
        const targetDiv = document.getElementById('formContainer');
        targetDiv.scrollIntoView({
            behavior: "smooth"
        })
    });

    document.querySelector('#contact_number').addEventListener('input', function(event) {
        const inputElement = event.target;
        const inputValue = event.target.value;
        
        const sanitizedValue = inputValue.replace(/[^0-9]/g, '');
        inputElement.value = sanitizedValue;

        if (input.value.length == 10) {
            errorMessage.textContent = "";
        }
    });
    
    const newSubmitElement = document.getElementById("new-submit");
    newSubmitElement.addEventListener("click", function() {
        const successElement = document.getElementById('success-message');
        const formElement = document.getElementById('callback_form');
        successElement.style.display = 'none';
        formElement.style.display = 'flex';
    });
    
    document.querySelector('#name').addEventListener('input', function(event) {
        const inputElement = event.target;
        const inputValue = event.target.value;
        
        const sanitizedValue = inputValue.replace(/[^a-zA-Z .'" ]/g, '');
        inputElement.value = sanitizedValue;
    });
});

document.getElementById('phoneNumber').addEventListener('click', function() {
    window.location.href = 'tel:'+document.getElementById('phoneNumber').value;
});

document.getElementById('phoneNumber_bm').addEventListener('click', function() {
    window.location.href = 'tel:'+document.getElementById('phoneNumber').value;
});