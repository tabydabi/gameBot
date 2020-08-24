"use strict";
function number(){
    //let what = Math.floor(Math.random() * 10);
    let q = prompt('Угадай число от 1 до 100');
    if (isNaN(q) || q.trim() === '' || q === null){
        alert('Введи число!');
        return number();
    }
    
    function terms(x){
         if (q>x){
            alert('Загаданное число меньше') ;
            return number();}
         if (q<x){
         alert('Загаданное число больше');
         return number();}
        
         if (q == x){
         alert('Вы угадали!');}
         
        
    }
    terms(55);
}
number();














































