//Changing home images 
document.addEventListener("DOMContentLoaded", function() {
    const slideRow = document.querySelector('.homeImgs');
    const images = [
        '../img/Sri Daladha Perahara, Kandy.jpeg',
        '../img/Kandy, Sri Lanka_.jpeg',
        '../img/The Absolute Best Things To Do In Kandy, Sri Lanka.jpeg',
        '../img/Light House.jpeg',
        '../img/colonial fortress.jpeg',
        '../img/Galle, Sri Lanka.jpeg',
        '../img/Colombo.jpeg',
        '../img/redmosque.jpeg',
        '../img/Colombo_ Sri Lanka’s Ocean City.jpeg',
    ]; 

    let index = 0;

    function changeSlide() {
        index = (index + 3) % images.length; 
        const newImages = images.slice(index, index + 3);
        const newImagesHTML = newImages.map(image => `<img src="${image}" alt="Photo">`).join('');
        slideRow.innerHTML = newImagesHTML;

        slideRow.querySelectorAll('img')[0].classList.add('active');
    }

    setInterval(changeSlide, 5000); 
});

//