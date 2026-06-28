/* ==========================
   MUSIC
========================== */

const music = document.getElementById("bgMusic");
const musicBtn = document.querySelector(".music-btn");

function toggleMusic() {

    if (music.paused) {

        music.play().catch(() => {});
        musicBtn.innerHTML = "🎵";

    } else {

        music.pause();
        musicBtn.innerHTML = "🔇";

    }

}

/* ==========================
   OPEN GIFT
========================== */

function openGift() {

    music.play().catch(() => {});
    musicBtn.innerHTML = "🎵";

    document.getElementById("hero").scrollIntoView({
        behavior: "smooth"
    });

}

/* ==========================
   17 REASONS
========================== */

const reasons = [

{
title:"Your Smile",
text:"Karena senyummu selalu berhasil membuat hariku terasa lebih baik."
},

{
title:"Your Kindness",
text:"Karena kamu selalu peduli pada orang lain dengan tulus."
},

{
title:"Your Presence",
text:"Karena kehadiranmu membuat banyak hal terasa lebih berarti."
},

{
title:"Your Laugh",
text:"Karena tawamu adalah salah satu suara favoritku."
},

{
title:"Your Strength",
text:"Karena kamu selalu berusaha kuat meskipun keadaan tidak selalu mudah."
},

{
title:"Your Heart",
text:"Karena kamu punya hati yang begitu baik."
},

{
title:"Your Support",
text:"Karena kamu selalu ada di saat yang penting."
},

{
title:"Your Dreams",
text:"Karena kamu selalu punya semangat untuk mengejar impianmu."
},

{
title:"Your Honesty",
text:"Karena kamu selalu menjadi dirimu sendiri."
},

{
title:"Your Warmth",
text:"Karena kamu membuat orang merasa nyaman di dekatmu."
},

{
title:"Your Personality",
text:"Karena tidak ada orang lain yang bisa menggantikan caramu menjadi dirimu sendiri."
},

{
title:"Your Effort",
text:"Karena kamu selalu mencoba memberikan yang terbaik."
},

{
title:"Your Positivity",
text:"Karena kamu membawa energi baik ke banyak orang."
},

{
title:"Your Care",
text:"Karena kamu sering peduli bahkan pada hal-hal kecil."
},

{
title:"Your Uniqueness",
text:"Karena kamu berbeda dengan cara yang indah."
},

{
title:"Everything About You",
text:"Karena setiap bagian dari dirimu memiliki alasan untuk disyukuri."
},

{
title:"Because You're Gabrielle ❤️",
text:"Karena alasan terbesar dari semuanya adalah karena kamu adalah Gabrielle Kelly Pranata."
}

];

let currentReason = 0;

function updateReason() {

    const card = document.querySelector(".reason-card");

    card.style.opacity = "0";

    setTimeout(() => {

        document.getElementById("reasonCount").innerHTML =
        `Reason ${currentReason + 1} of ${reasons.length}`;

        document.getElementById("reasonTitle").innerHTML =
        reasons[currentReason].title;

        document.getElementById("reasonText").innerHTML =
        reasons[currentReason].text;

        card.style.opacity = "1";

    }, 180);

}

function nextReason() {

    currentReason++;

    if (currentReason >= reasons.length) {

        currentReason = 0;

    }

    updateReason();

}

function prevReason() {

    currentReason--;

    if (currentReason < 0) {

        currentReason = reasons.length - 1;

    }

    updateReason();

}

updateReason();

/* ==========================
   FLOATING HEARTS
========================== */

const floatingContainer =
document.querySelector(".floating-hearts");

function createHeart() {

    if (!floatingContainer) return;

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️","💖","💕","🤍","💗"];

    heart.innerHTML =
    hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left =
    Math.random()*100 + "%";

    heart.style.fontSize =
    (Math.random()*18 + 16) + "px";

    heart.style.animationDuration =
    (Math.random()*3 + 5) + "s";

    floatingContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },8000);

}

setInterval(createHeart,1000);

/* ==========================
   FINAL SURPRISE
========================== */

function showFinalMessage(){

    const finalMessage =
    document.getElementById("finalMessage");

    finalMessage.style.display="block";

    finalMessage.style.opacity="0";

    setTimeout(()=>{

        finalMessage.style.opacity="1";

        finalMessage.style.transition="1s";

    },100);

    for(let i=0;i<60;i++){

        setTimeout(()=>{

            createHeart();

        },i*100);

    }

}

/* ==========================
   SCROLL ANIMATION
========================== */

const sections =
document.querySelectorAll("section");

const sectionObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="all 1s ease";

    sectionObserver.observe(section);

});

/* ==========================
   GALLERY ANIMATION
========================== */

const galleryItems =
document.querySelectorAll(".gallery .item");

if(galleryItems.length>0){

const galleryObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

galleryItems.forEach(item=>{

    galleryObserver.observe(item);

});

}

/* ==========================
   IMAGE CLICK ZOOM
========================== */

const galleryImages =
document.querySelectorAll(".gallery img");

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        const overlay =
        document.createElement("div");

        overlay.style.position="fixed";
        overlay.style.top="0";
        overlay.style.left="0";
        overlay.style.width="100%";
        overlay.style.height="100%";
        overlay.style.background="rgba(0,0,0,.9)";
        overlay.style.display="flex";
        overlay.style.justifyContent="center";
        overlay.style.alignItems="center";
        overlay.style.zIndex="9999";
        overlay.style.cursor="pointer";

        const image =
        document.createElement("img");

        image.src=img.src;

        image.style.maxWidth="90%";
        image.style.maxHeight="90%";
        image.style.borderRadius="20px";
        image.style.boxShadow="0 20px 60px rgba(0,0,0,.6)";
        image.style.animation="fadeUp .5s ease";

        overlay.appendChild(image);

        document.body.appendChild(overlay);

        overlay.addEventListener("click",()=>{

            overlay.remove();

        });

    });

});