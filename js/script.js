// script slides
const reviews = document.querySelectorAll('.review');
let currentSlide = 0;

showSlide(currentSlide);

function showSlide(currentSlide) {
    reviews.forEach(review => {
        review.style.display = 'none';
    });
    reviews[currentSlide].style.display = 'block';
}

function autoSlide() {
    currentSlide++;
    if (currentSlide >= reviews.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}
setInterval(autoSlide, 3000);

// script validasi
function validateForm(){
    const name = document.forms['myform']['name'].value;
    const email = document.forms['myform']['email'].value;
    const product = document.forms['myform']['product'].value;

    if(name == "" || email == "" || product == ""){
        alert("Please fill out all fields!");
        return false;
    }
    var modalMsg = "Dear " + name + ",\n\nThank you for choosing " + product + ". Our team will be in touch with you within 24 hours.\n\nBest regards,\nThe Catventure Co. Team";
    alert(modalMsg);
    return false;
}