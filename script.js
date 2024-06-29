document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('header nav ul');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                navLinks.style.display = 'flex';
            } else {
                navLinks.style.display = 'none';
            }
        });
    }
});

function toggleContent(element) {
    const details = element.nextElementSibling;
    const icon = element.querySelector('.toggle-icon');
    if (details && icon) {
        if (details.style.display === 'none' || !details.style.display) {
            details.style.display = 'block';
            icon.textContent = '-';
        } else {
            details.style.display = 'none';
            icon.textContent = '+';
        }
    }
}

function goToHome() {
    window.location.href = '#hero';
}

function toggleContent(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector(".toggle-icon");
    const allFaqItems = document.querySelectorAll(".faq-item");

    allFaqItems.forEach(item => {
        const currentContent = item.querySelector(".faq-details");
        const currentIcon = item.querySelector(".toggle-icon");

        if (currentContent !== content && currentContent && currentIcon) {
            currentContent.style.display = "none";
            currentIcon.innerHTML = "+"; 
            item.classList.remove("active");
        }
    });

    if (content && icon) {
        if (content.style.display === "none" || !content.style.display) {
            content.style.display = "block";
            icon.innerHTML = "−"; 
            element.parentElement.classList.add("active");
        } else {
            content.style.display = "none";
            icon.innerHTML = "+"; 
            element.parentElement.classList.remove("active");
        }
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToHome() {
    window.location.href = '/'; 
}

window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        if (window.scrollY > 500) { 
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    }
});

function startCounter() {
    let counterElement = document.getElementById('counter');
    let targetPercentage = 86;
    let currentPercentage = 0;

    const updateCounter = () => {
        if (counterElement && currentPercentage <= targetPercentage) {
            counterElement.textContent = " " + currentPercentage + "%" + " Higher Conversion Rates";
            currentPercentage++;
            setTimeout(updateCounter, 20); 
        }
    };

    updateCounter();
}

const scrollHandler = () => {
    const counter = document.getElementById('counter');
    const isCounterVisible = counter && counter.getBoundingClientRect().top <= window.innerHeight;

    if (isCounterVisible) { 
        startCounter();
        window.removeEventListener('scroll', scrollHandler); 
    }
};

window.addEventListener('scroll', scrollHandler);
