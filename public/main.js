
let poke = ["a","b","c","d","e","f"] 

    , infoBoxes = ["one","two","three","four","five","six"];

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("h3").forEach( c => c.addEventListener("click", function(event){
       event.target.parentNode.style.display = "none";
       document.querySelector(".container").style.top = "0";
    }) );
    poke.forEach( function(poke,index){
        let elpoke = document.getElementById(poke);
            elpoke.addEventListener("click",function(){
                let el = document.getElementById(infoBoxes[index]);
                el.style.display = "block";
                el.style.top = (elPoke.offsetTop + 30) + "px";
                el.style.left = (elPoke.offsetLeft - 10) + "px";
            });
    });
});

// let crepes = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v"]
//   , infoBoxes = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twentyone","twentytwo"];


// document.addEventListener("DOMContentLoaded", function(){
//     document.querySelectorAll("h3").forEach( c => c.addEventListener("click", function(event){
//        event.target.parentNode.style.display = "none";
//        document.querySelector(".container").style.top = "0";
//     }) );
//     crepes.forEach( function(crepe,index){
//         let elCrepe = document.getElementById(crepe);
//         // (function(elCrepe){
//             // console.log(elCrepe)
//             elCrepe.addEventListener("click",function(){
//                 let el = document.getElementById(infoBoxes[index]);
//                 // el.style.position = "relative";
//                 // console.log(elCrepe)
//                 // console.log("offsetTop", elCrepe.offsetTop)
//                 el.style.display = "block";
//                 el.style.top = (elCrepe.offsetTop + 50) + "px";
//                 el.style.left = (elCrepe.offsetLeft - 17) + "px";
//             });
//         // })(elCrepe);
//     });
// });