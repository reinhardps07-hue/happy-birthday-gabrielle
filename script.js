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
text:"Karena senyummuu palingg bikin harikuu jadii senengg teruss."
},

{
title:"Your Kindness",
text:"Karena memeee selalu caree samaa akuuu."
},

{
title:"Your Presence",
text:"Karena adanyaa memeee bikinn banyak halll terasa lebih betterr."
},

{
title:"Your Laugh",
text:"Karenaa happyyymuu ituu the onee and onlyyy my favv."
},

{
title:"Your Strength",
text:"Karena kamu selaluu berusahaaa kuat walaupunn keadaan lagii ga gampanggg."
},

{
title:"Your Heart",
text:"Karena kamuuu punya hatii yangg baik polll."
},

{
title:"Your Support",
text:"Karena memeee selalu ada kapannpunnn."
},

{
title:"Your Dreams",
text:"Karena menurutttkuu memeee selalu punya semangattt untuk mengejar mimpiiimuu."
},

{
title:"Your Honesty",
text:"Karenaaa memeee selalu jadi diriii sendiriii."
},

{
title:"Your Warmth",
text:"Karenaaa memeee bikinn akuuu ngerasaa nyamann kaloo dideketmuu."
},

{
title:"Your Personality",
text:"Karenaaa gaaada orang lain yangg bisa gantiinn caramuuu menjadi dirimu sendiri."
},

{
title:"Your Effort",
text:"Karenaaa memee selaluu kasiii yang terbaik."
},

{
title:"Your Positivity",
text:"Karena memeee bawaaa energi positif ke akuuuu."
},

{
title:"Your Care",
text:"Karena memeee pedulii poll bahkan di hal-hal kecill."
},

{
title:"Your Uniqueness",
text:"Karena kamu bedaaa tapiii dengann cara yang indahhhh."
},

{
title:"Everything About You",
text:"Karena semuaaa bagian darii dirinyaa memeee punyaaa alasan untuk akuuu disyukurii."
},

{
title:"Because You're Youuu ❤️",
text:"Karenaaa alasan palingg besarr darii semuanyaa yaituu... kamu. Jadi dirimuu sendirii ajaa udahh cukupp poll buat acuu jatuhh cintaaa tiapp saat. Akuu ndaa butuhh alasann lainn selainn ituuu. ❤️"
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