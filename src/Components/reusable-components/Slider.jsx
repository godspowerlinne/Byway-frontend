import React from 'react'

const Slider = () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('#slider .sliderComps');
    const totalSlides = slides.length;
    const indicators = document.querySelectorAll('.indicatorButton');

    const updateIndicators = ()=> {
        indicators.forEach((indicatorButton, index) => {
            indicator.classList.toggle('bg-gray-800', index === currentSlide);
            indicator.classList.toggle('bg-white', index !== currentSlide);
        });
    }
    

    function showSlide(index) {
        const slider = document.getElementById('slider');
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateIndicators();
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function goToSlide(index) {
        showSlide(index);
    }

    setInterval(nextSlide, 5000);

    showSlide(currentSlide);
    return (
        <div>Slider</div>
    )
}

export default Slider