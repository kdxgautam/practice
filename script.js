const btn1=document.querySelector(".all_button")
const btn2=document.querySelector(".core_button")
const btn3=document.querySelector(".advi_button")
console.log(btn1);
btn1.addEventListener("click",()=>{
    window.scrollTo(0,350);
    btn1.style.backgroundColor="white";
    btn1.style.color="#a41034";
    btn2.style.backgroundColor="#a41034";
    btn2.style.color="white";
    btn3.style.backgroundColor="#a41034";
    btn3.style.color="white";
})


btn2.addEventListener("click",()=>{
    window.scrollTo(0,350);
    btn1.style.backgroundColor="#a41034";
    btn1.style.color="white";
    btn2.style.backgroundColor="white";
    btn2.style.color="#a41034";
    btn3.style.backgroundColor="#a41034";
    btn3.style.color="white";
})



btn3.addEventListener("click",()=>{
    window.scrollTo(0,1400);
    btn1.style.backgroundColor="#a41034";
    btn1.style.color="white";
    btn2.style.backgroundColor="#a41034";
    btn2.style.color="white";
    btn3.style.backgroundColor="white";
    btn3.style.color="#a41034";
})
