'use strict';

document.addEventListener('DOMContentLoaded', function () {
    console.log('hello world');

    const menuContainer = document.querySelector('.menu-container');
    const menuItem = document.querySelectorAll(".menu-item");
    const bar = document.querySelectorAll(".myBar");
    let left = 360;
    const menuTitle = document.querySelectorAll('.menu-title');
    const menuIcon = document.querySelectorAll('.menu-icon');

    function move(i) {
        var id = setInterval(frame, 1);

        function frame() {
                if (left == 80) {
                    clearInterval(id);
                    return left;
                } else {
                    left = left - 8;
                    bar[i].style.left = left + 'px';
                }
        }
    }
    function remove(i) {
        var id = setInterval(frame, 1);
        function frame() {
                if (left == 360) {
                    clearInterval(id);
                    return left;
                } else {
                    left = left + 8;
                    bar[i].style.left = left + 'px';
                }
        }
    }


    menuItem.forEach(function(item) {
        item.addEventListener('mouseenter', function(e) {
            if(e.target == menuItem[0]){
                setTimeout(function() {
                    if (left == 360){
                        move(0);
                    } 
                }, 400);
                menuTitle[0].style.color = 'black';
            } else if(e.target == menuItem[1]){
                setTimeout(function() {
                    if (left == 360){
                        move(1);
                    } 
                }, 400);
                menuTitle[1].style.color = 'black';
            } else if(e.target == menuItem[2]){
                setTimeout(function() {
                    if (left == 360){
                        move(2);
                    } 
                }, 400);
                menuTitle[2].style.color = 'black';
            } else if(e.target == menuItem[3]){
                setTimeout(function() {
                    if (left == 360){
                        move(3);
                    } 
                }, 400);
                menuTitle[3].style.color = 'black';
            }
        });
        item.addEventListener('mouseleave', function(e) {
            if(e.target == menuItem[0]){
                    if (left == 80){
                        remove(0);
                    } 
                menuTitle[0].style.color = 'white';
            } else if(e.target == menuItem[1]){
                    if (left == 80){
                        remove(1);
                    } 
                menuTitle[1].style.color = 'white';
            } else if(e.target == menuItem[2]){
                    if (left == 80){
                        remove(2);
                    } 
                menuTitle[2].style.color = 'white';
            } else if(e.target == menuItem[3]){
                    if (left == 80){
                        remove(3);
                    } 
                menuTitle[3].style.color = 'white';
            }
        });
    });
    // menuItem[0].addEventListener('mouseenter', function(e){
    //     move();
    //     menuTitle[0].style.color = 'black';
    // });
    // menuItem[0].addEventListener('mouseleave', function(){
    //     remove();   
    //     menuTitle[0].style.color = 'white';
    // });
});