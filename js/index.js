const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navbar
const navBar = document.querySelectorAll("nav a");
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[0].style.color = "green";
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[1].style.color = "green";
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[2].style.color = "green";
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[3].style.color = "green";
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[4].style.color = "green";
navBar[5].textContent = siteContent["nav"]["nav-item-6"];
navBar[5].style.color = "green";

const navItemZero = document.createElement("a");
navItemZero.textContent = "!!!";
navItemZero.href = "#";
navItemZero.style.color = "green";
document.querySelector("nav").prepend(navItemZero);

const navItemLast = document.createElement("a");
navItemLast.textContent = "???";
navItemLast.href = "#";
navItemLast.style.color = "green";
document.querySelector("nav").appendChild(navItemLast);

//Cta Section
const ctaTextH1 = document.querySelector(".cta-text h1");
ctaTextH1.textContent = siteContent["cta"]["h1"];
ctaTextH1.style.fontFamily = 'Bangers';
ctaTextH1.style.width = "40%";

const ctaTextButton = document.querySelector(".cta-text button");
ctaTextButton.textContent = siteContent["cta"]["button"];

const cta = document.querySelector("#cta-img");
cta.src = siteContent["cta"]["img-src"];

//Main Section
//Features
const topContentLeftH4 = document.querySelector(".text-content:nth-of-type(1) h4");
topContentLeftH4.textContent = siteContent["main-content"]["features-h4"]; 

const topContentLeft = document.querySelector(".text-content:nth-of-type(1) p");
topContentLeft.textContent = siteContent["main-content"]["features-content"]; 

//About
const topContentRightH4 = document.querySelector(".text-content:nth-of-type(2) h4");
topContentRightH4.textContent = siteContent["main-content"]["about-h4"]; 

const topContentRight = document.querySelector(".text-content:nth-of-type(2) p");
topContentRight.textContent = siteContent["main-content"]["about-content"]; 

//Banner image
const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

//Vision
const bottomContentRightH4 = document.querySelector(".text-content:nth-of-type(3) h4");
bottomContentRightH4.textContent = siteContent["main-content"]["vision-h4"]; 

const bottomContentRight = document.querySelector(".text-content:nth-of-type(3) p");
bottomContentRight.textContent = siteContent["main-content"]["vision-content"]; 

//Services
const bottomContentLeftH4 = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
bottomContentLeftH4.textContent = siteContent["main-content"]["services-h4"];

const bottomContentLeft = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");
bottomContentLeft.textContent = siteContent["main-content"]["services-content"]; 

//Product
const bottomContentMiddleH4 = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
bottomContentMiddleH4.textContent = siteContent["main-content"]["product-h4"];

const bottomContentMiddle = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
bottomContentMiddle.textContent = siteContent["main-content"]["product-content"]; 

//Contact Section
const contentTitle = document.querySelector(".contact h4");
contentTitle.textContent = siteContent["contact"]["contact-h4"];

const address = document.querySelector(".contact p:nth-of-type(1)");
address.textContent = siteContent["contact"]["address"];
address.style.width = "20%";

const phone = document.querySelector(".contact p:nth-of-type(2)");
phone.textContent = siteContent["contact"]["phone"];

const email = document.querySelector(".contact p:nth-of-type(3)");
email.textContent = siteContent["contact"]["email"];

//Footer
const foot = document.querySelector("footer p");
foot.textContent = siteContent["footer"]["copyright"];