const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");


let indexNum = 0;
slides [indexNum].classList.add("active");


nextBtn.addEventListener("click",function(){
    slides[indexNum].classList.remove("active");

    indexNum = (indexNum === slides.length -1)? 0 :indexNum + 1;
    slides[indexNum].classList.add("active");
    slider.style.transform = `translateX(-${indexNum * 100}%)`;
});






prevBtn.addEventListener("click",function(){
    slides[indexNum].classList.remove("active");

    indexNum = (indexNum === 0)? slides.length -1 :indexNum - 1;
    slides[indexNum].classList.add("active");
    slider.style.transform = `translateX(-${indexNum * 100}%)`;
});


setInterval(function(){
    slides[indexNum].classList.remove("active");

    indexNum = (indexNum === slides.length -1)? 0 :indexNum + 1;
    slides[indexNum].classList.add("active");
    slider.style.transform = `translateX(-${indexNum * 100}%)`;
},1000);