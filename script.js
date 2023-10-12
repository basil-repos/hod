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
    
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        button.disabled = true;
        loaderIcon.style.display = "block";

        // Get form data
        const formData = new FormData(event.target);

        const data = {
            name: formData.get('name'),
            contact_number: formData.get('contact_number')
        }
        
        // Make an AJAX request using the fetch API
        fetch('http://api.artistrymedia.agency/save-lead', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            if(data.status == 200){
                const inputName = document.getElementById('name');
                const inputNumber = document.getElementById('contact_number');
                const successElement = document.getElementById('success-message');
                button.disabled = false;
                loaderIcon.style.display = "none";
                successElement.style.display = 'block';
                inputName.value = '';
                inputNumber.value = '';
                
                setTimeout(function() {
                    successElement.style.display = 'none';
                }, 2000);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    const scrollButton = document.getElementById("callback_btn");

    scrollButton.addEventListener("click", function() {
        const targetDiv = document.getElementById('formContainer');
        targetDiv.scrollIntoView({
            behavior: "smooth"
        })
    });
});

document.getElementById('phoneNumber').addEventListener('click', function() {
    window.location.href = 'tel:'+document.getElementById('phoneNumber').value;
});

document.getElementById('phoneNumber_bm').addEventListener('click', function() {
    window.location.href = 'tel:'+document.getElementById('phoneNumber').value;
});