:root {
    --primary-color: #bfc305; /* Yellow-green for primary elements */
    --secondary-color: #676562; /* Medium gray for secondary elements */
    --accent-color: #2b2d33; /* Dark blue-gray for accents */
    --highlight-color: #333231; /* Dark gray for highlights */
    --background-color: #0f1117; /* Almost black for background */
    --text-color: #ffffff; /* White for main text */
    --highlight-text-color: #676562; /* Medium gray for highlighted text */
    --button-background: #2b2d33; /* Dark blue-gray for buttons */
    --button-hover-background: #bfc305; /* Medium gray for button hover */
    --box-shadow-color: rgba(43, 45, 51, 0.5); /* Dark blue-gray shadow */
    --grid-size: 20px; /* Size of the grid lines */
    --grid-color: rgba(255, 255, 255, 0.1); /* Grid line color with opacity, adjusted for better visibility */
    --box-shadow-color-light: rgba(183, 159, 204, 0); /* Light shadow color */
    --highlight-hover-color: #bfc305; /* Hover highlight color */
    --button-shadow-inset: rgba(255, 255, 255, 0.2); /* Inset shadow for buttons */
    --button-shadow-outset: rgba(0, 0, 0, 0.2); /* Outset shadow for buttons */
    --button-hover-shadow-inset: #bfc305; /* Inset shadow on hover */
    --button-hover-shadow-outset: #bfc305; /* Outset shadow on hover */
    --hero-overlay-color: rgba(15, 17, 23, 0.5); /* Hero section overlay */
    --faq-border-color: #676562; /* FAQ item border color */
    --step-box-shadow-color: rgba(0, 0, 0, 0.1); /* Step box shadow color */
    --back-to-top-color: #bfc305; /* Back to top button color */
    --toggle-icon-color: #676562; /* FAQ toggle icon color */
}

/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Bricolage Grotesque', sans-serif;
    background: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
    font-size: 100%;
    background-image:
    linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
    background-size: var(--grid-size) var(--grid-size);    
}

/* Infographic */
.infographic {
    display: flex;
    margin: 0 auto;
    width: 33%;
    background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
}

#infographic-image.fullscreen {
    position: flex;
    top: 0;
    left: 0;
    width: 70%;
    height: 70%;
    background-color: var(--background-color);
}

p {
    font-size: 1.3em;
    margin-bottom: 30px;
    color: var(--text-color);
}

/* Iframe Container */
.iframe-container {
    width: 1000px;
    height: 563px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 20px var(--box-shadow-color), 0 0 40px var(--box-shadow-color), 0 0 60px var(--box-shadow-color);
}

.iframe-container iframe {
    width: 100%;
    height: 100%;
    border: none;
    position: relative;
    z-index: 1;
}

.iframe-container::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background: linear-gradient(to top, var(--box-shadow-color), var(--box-shadow-color-light));
    pointer-events: none;
    z-index: 2;
}

/* Container */
.container {
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
}

/* Header */
header {
    background: var(--background-color);
    color: var(--text-color);
    padding: 20px 0;
    border-bottom: 3px solid var(--highlight-color);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    position: relative;
    z-index: 10;
}

header .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px; /* Adjust as needed */
    padding: 0 20px;
}

header img.logo {
    height: 50px;
    margin-right: auto; /* Aligns the logo to the left */
    border-radius: 50%;
    z-index: 11; /* Ensure it stays above the burger menu */
}

header nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1; /* Allow nav to take remaining space */
}

header nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
    background: var(--background-color);
    padding: 10px 20px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
}

header nav ul li {
    position: relative;
}

header nav ul li a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: bold;
    padding: 10px 20px;
    display: block;
}

header nav ul li a:hover {
    background: var(--highlight-hover-color);
    border-radius: 5px;
    transition: background 0.3s ease-in-out;
}

header .btn {
    background: var(--button-background);
    color: var(--text-color);
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    box-shadow: inset 0 -3px 0 var(--button-shadow-inset), 0 2px 4px var(--button-shadow-outset);
    transition: transform 0.2s, box-shadow 0.2s;
    font-size: 0.9em;
}

header .btn:hover {
    transform: scale(1.05);
    box-shadow: inset 0 -3px 0 var(--button-hover-shadow-inset), 0 4px 8px var(--button-hover-shadow-outset);
    background: var(--button-hover-background);
}

/* Hero Section */
.hero {
    background: var(--background-color);
    color: var(--text-color);
    padding: 100px 0;
    text-align: center;
    position: relative;
}

.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--hero-overlay-color);
    z-index: 1;
}

.hero-content {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.hero h1 {
    font-size: 2em;
    margin-bottom: 20px;
    line-height: 1.2;
    color: var(--primary-color);
}

.hero p {
    font-size: 1.2em;
    margin-bottom: 30px;
    color: var(--text-color);
}

.hero .btn {
    display: inline-block;
    margin-top: 20px;
    background: var(--button-background);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px var(--box-shadow-color);
    padding: 15px 30px;
    border-radius: 5px;
    color: var(--text-color);
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
    font-size: 0.9em;
}

.hero .btn:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px var(--primary-color);
}

.btn-container {
    display: inline-block;
    padding: 33px; /* Add padding to avoid cropping */
    background: var(--background-color); /* Same as the hero background to blend in */
}

/* Video Embed */
.video-embed {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px var(--box-shadow-color);
}

/* Performance Wrapper */
.perfWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55%;
    margin: 0 auto;
}

.perfWrap2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55%;
    margin: 0 auto;
    white-space: pre-line;
}

/* Sections */
.section, .section3, .section2, .section4 {
    padding: 50px 0;
    background: var(--background-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    
}

.section2{
    background-image:
    linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
    background-size: var(--grid-size) var(--grid-size);    
}

.section h2, .section2 h2, .section3 h2, .section4 h2 {
    color: var(--primary-color);
    font-size: 2.3em;
}

/* Features Section */
#solution {
    text-align: center;
}

.features {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 80%;
    margin: 0 auto;
}

.feature-box {
    width: 30%;
    background: var(--accent-color);
    padding: 20px;
    border-radius: 10px;
    margin: 10px 1%;
    box-shadow: 0 0 0px var(--box-shadow-color), 0 0 10px var(--highlight-color), 0 0 0px var(--box-shadow-color);
    text-align: center;
    flex: 0 1 calc(30% - 2%);
    position: relative;
    padding-top: 60px;
}

.feature-box img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
}

.feature-box h3 {
    margin-bottom: 10px;
    font-size: 1.5em;
    color: var(--highlight-color);
}

.feature-box p {
    color: var(--text-color);
    font-size: 1em;
}

.profilePic {
    width: 333px;
    height: 333px;
    object-fit: contain;
    margin-bottom: 10px;
}

/* Social Media Icons */
.logo-icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 10px;
}

.logo-icon2 {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 10px;
}

.logo-icon-socials {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-left: 33px;
}

/* FAQ Section */
#faqs {
    text-align: center;
    color: var(--text-color);
    background-color: var(--background-color);
    padding: 40px 0;
}

#faqs h2 {
    font-size: 2em;
    margin-bottom: 20px;
    color: var(--primary-color);
}

.faq-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
}

.faq-item {
    border-bottom: 1px solid var(--faq-border-color);
    padding: 20px 0;
    cursor: pointer;
}

.faq-item h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5em;
    margin: 0;
    color: var(--text-color);
}

.faq-item .toggle-icon {
    font-size: 1.5em;
    transition: transform 0.3s ease;
    color: var(--toggle-icon-color);
    color: var(--primary-color);
}

.faq-item.active .toggle-icon {
    transform: rotate(45deg);
}

.faq-details {
    display: none;
    padding-top: 10px;
    font-size: 1em;
    background: var(--button-background)
}

#read-more-btn {
    background-color: var(--accent-color);
    color: var(--text-color);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    display: block;
}

#read-more-btn:hover {
    background-color: var(--button-hover-background);
}

/* Social Media Section */
.social-media {
    display: flex;
    justify-content: center;
    margin: 20px 0;  
}

.social-media a {
    margin: 0 10px;
}

/* Footer */
footer {
    background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
    color: var(--background-color);
    text-align: center;
    padding: 10px 0;    
}

footer p {
    color: var(--highlight-text-color);
}

/* Process Section */
#process {
    text-align: center;
    padding: 50px 0;
}

#process h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
}

#process p {
    font-size: 1.2em;
    margin-bottom: 40px;
    color: var(--text-color);
}

.steps {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.step {
    background: var(--accent-color);
    box-shadow: 0 4px 15px var(--box-shadow-color);
    border-radius: 10px;
    padding: 20px;
    width: 30%;
    margin: 20px 0;
    text-align: left;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.step-icon img {
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
}

.step-content h3 {
    margin-bottom: 10px;
    font-size: 1.5em;
    color: var(--primary-color);
}

.step-content p {
    font-size: 1em;
    margin-bottom: 20px;
    color: var(--text-color);
}

.step-button {
    background-color: var(--background-color);
    color: var(--text-color);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.step-button2 {
    background-color: var(--highlight-color);
    color: var(--text-color);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.step-button:hover {
    background-color: var(--primary-color);
}

.counter {
    font-size: 48px;
    text-align: center;
    margin-top: 0px;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Styles for burger menu */
.burger-menu {
    display:absolute;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 12;
    margin-right: 20px;
    
}

.burger-bar {
    height: 3px;
    width: 100%;
    background-color: var(--text-color);
    border-radius: 3px;
}

header {
    position: relative;
    z-index: 10;
}

header nav {
    display: flex;
    align-items: center;
}

@media (max-width: 768px) {
    .burger-menu {
        display: none;
        position: relative;
    }
    header nav ul {
        display: none;
    }

    header nav ul.active {
        display: flex;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        z-index: 200;
    }

    header nav ul li {
        width: 100%;
        text-align: center;
    }

    header nav ul li a {
        display: block;
        padding: 15px 0;
        color: var(--text-color);
        text-decoration: none;
    }

    .logo-icon-socials {
        width: 40px; /* Adjust width for better fit on mobile */
        height: 40px; /* Adjust height for better fit on mobile */
        margin-left: 10px; /* Adjust margin for better spacing on mobile */
    }
}

/* General styles for iframe container */
.iframe-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
}

.iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

/* Media Queries for Tablets */
@media (max-width: 768px) {
    .steps {
        flex-direction: column;
        align-items: center;
    }

    .step {
        width: 80%;
        margin: 10px 0;
    }

    .container {
        width: 90%;
    }

    .hero h1 {
        font-size: 2em;
    }

    .hero p {
        font-size: 0.9em;
    }

    .hero .btn {
        padding: 10px 20px;
        font-size: 0.675em;
    }

    .section h2 {
        font-size: 1.5em;
    }

    .perfWrap, .perfWrap2 {
        width: 100%;
    }

    .infographic {
        width: 100%;
    }

    .counter {
        font-size: 1.25em;
        text-align: center;
        margin-top: 0px;
    }
}

/* Back to Top Button Styles */
#back-to-top {
    display: none;
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: var(--highlight-text-color);
    color: var(--text-color);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 4px 15px var(--box-shadow-color);
    transition: background-color 0.3s ease;
}

#back-to-top:hover {
    background-color: var(--back-to-top-color);
}



/* Add these specific styles to your existing CSS */

/* Flexbox layout for the side-by-side sections */
.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.col-md-6 {
    flex: 1;
    padding: 20px;
    min-width: 300px; /* Ensures sections stack on smaller screens */
}

.goal-section, .not-for-you-section {
    background: var(--accent-color);
    padding: 20px;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 0 0 10px var(--box-shadow-color);
    text-align: ri;
}

.goal-section h2, .not-for-you-section h2 {
    color: var(--primary-color);
    margin-bottom: 20px;
}

/* Align bullet points to the left */
.goal-section p, .not-for-you-section p {
    color: var(--text-color);
    font-size: 1.2em;
    text-align: left; /* Align text to the left */
    margin-left: 20px; /* Optional: Add left margin for better alignment */
    margin-right: 20px; /* Optional: Add right margin for balance */
}

.hero-content {
    text-align: center;
}

/* Ensure the Calendly widget is centered */
.calendly-inline-widget {
    margin: 0 auto;
}
