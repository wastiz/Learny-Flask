'use strict';

document.addEventListener('DOMContentLoaded', function () {
    

    const menuContainer = document.querySelector('.menu-container');
    const menuItem = document.querySelectorAll(".menu-item");
    const bar = document.querySelectorAll(".myBar");
    let left = [360, 360, 360, 360];
    const menuTitle = document.querySelectorAll('.menu-title');
    const menuIcon = document.querySelectorAll('.menu-icon');


    menuItem.forEach(function (item) {
        item.addEventListener('mouseover', function(e){
            if(e.target == menuItem[0]){
                bar[0].classList.remove('barStart');
                bar[0].classList.add('barAnimation');
                menuTitle[0].style.color = 'black';
            } else if(e.target == menuItem[1]){
                bar[1].classList.remove('barStart');
                bar[1].classList.add('barAnimation');
                menuTitle[1].style.color = 'black';
            } else if(e.target == menuItem[2]){
                bar[2].classList.remove('barStart');
                bar[2].classList.add('barAnimation');
                menuTitle[2].style.color = 'black';
            } else if(e.target == menuItem[3]){
                bar[3].classList.remove('barStart');
                bar[3].classList.add('barAnimation');
                menuTitle[3].style.color = 'black';
            }
        });
        item.addEventListener('mouseleave', function(e){
            if(e.target == menuItem[0]){
                bar[0].classList.remove('barAnimation');
                bar[0].classList.add('barStart');
                menuTitle[0].style.color = 'white';
            } else if(e.target == menuItem[1]){
                bar[1].classList.remove('barAnimation');
                bar[1].classList.add('barStart');
                menuTitle[1].style.color = 'white';
            } else if(e.target == menuItem[2]){
                bar[2].classList.remove('barAnimation');
                bar[2].classList.add('barStart');
                menuTitle[2].style.color = 'white';
            } else if(e.target == menuItem[3]){
                bar[3].classList.remove('barAnimation');
                bar[3].classList.add('barStart');
                menuTitle[3].style.color = 'white';
            }  
        });
        item.addEventListener('click', function(e) {
            if(e.target == menuItem[0]){
                window.open("home", "_self");
            } else if (e.target == menuItem[1]){
                window.open("login", "_self");
            }
        });
    });


    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'Loading',
        success: 'Success',
        failure: 'Failure',
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', function(e){
            e.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);
            const request =  new XMLHttpRequest();
            request.open('POST', '../server.php');
            //request.setRequestHeader('Content-Type', 'multipart/form-data');
            //Когда мы используем связку XMLHttpRequest + formData, тогда заголовок не надо делать, ведь он создается автоматически
            const formData = new FormData(form); //Более упрощенный вариант для отправки данных с форм.
            //в верстке в динамических элементов, с которых мы хотим отпраить данные ставим атрибут name
            request.send(formData);
            request.addEventListener('load', function(){
                if(request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                    form.reset();
                    setTimeout(function(){
                        statusMessage.remove();
                    }, 2000);
                } else {
                    statusMessage.textContent = message.failure;
                }
            });
        });
    }




});