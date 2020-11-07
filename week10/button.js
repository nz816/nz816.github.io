console.log("button stuff!");

let theButton1 = document.querySelector('button[name="button1"]');
theButton1.addEventListener('click', changeText1);

let theButton2 = document.querySelector('button[name="button2"]');
theButton2.addEventListener('click', changeText2);

let theButton3 = document.querySelector('button[name="button3"]');
theButton3.addEventListener('click', changeText3);

let theButton4 = document.querySelector('button[name="button4"]');
theButton4.addEventListener('click', changeText4);

let theButton5 = document.querySelector('button[name="button5"]');
theButton5.addEventListener('click', changeText5);

let theButton6 = document.querySelector('button[name="button6"]');
theButton6.addEventListener('click', changeText6);

let theButton7 = document.querySelector('button[name="button7"]');
theButton7.addEventListener('click', changeText7);


function changeText1(){
    console.log("click detected!");
    document.querySelector('button[name="button1"]').textContent = "you pressed the button1!";
}

function changeText2(){
    console.log("click detected!");
    document.querySelector('button[name="button2"]').textContent = "you pressed the button2!";
}

function changeText3(){
    console.log("click detected!");
    document.querySelector('button[name="button3"]').textContent = "you pressed the button3!";
}

function changeText4(){
    console.log("click detected!");
    document.querySelector('button[name="button4"]').textContent = "you pressed the button4!";
}

function changeText5(){
    console.log("click detected!");
    document.querySelector('button[name="button5"]').textContent = "you pressed the button5!";
}

function changeText6(){
    console.log("click detected!");
    document.querySelector('button[name="button6"]').textContent = "you pressed the button6!";
}

function changeText7(){
    console.log("click detected!");
    document.querySelector('button[name="button7"]').textContent = "you pressed the button7!";
}