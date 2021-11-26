// const btn = document.querySelectorAll(".black");
// btn.onmousemove = function(e){
//     const x = e.pageX - btn.offsetLeft;
//     const y = e.pageY - btn.offsetTop;

//     btn.style.setProperty('--x',x + 'px');
//     btn.style.setProperty('--y',y + 'px');
// }

const btn = document.querySelector(".black");

btn.onmousemove = function(e){
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    btn.style.setProperty('--x',x + 'px');
    btn.style.setProperty('--y',y + 'px');
}
const btn2 = document.querySelector(".black2");


// const btns = document.querySelectorAll(".black");
// btns.forEach(btn => {
//     btn.addEventListener('mouseenter', function(e){

//         let x = e.clientX - e.target.offsetLeft;
//         let y = e.clientY - e.target.offsetTop;

//         let ripples = docuent.createElements('span');
//     })
// })