let next = document.getElementById("nex");
let prev = document.getElementById("prev");
let first = document.getElementById("fi");
let second = document.getElementById("sec");
next.addEventListener('click' , function(){
    first.style.display = 'none';
    second.style.display = 'grid';
    second.style.left = '-70px';
});
prev.addEventListener('click' , function(){
    second.style.display = 'none';
    first.style.display = 'grid';
    first.style.left = '-70px';
});