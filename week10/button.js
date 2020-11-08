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
    document.querySelector('button[name="button1"]').textContent = "'How much do you make? Have you ever contemplated suicide? Are you now or have you ever been... ? Are you aware of the fact...? I have here before me.... Electrical information devices for universal, tyrannical womb-to-tomb surveillance are causing a very serious dilemma between our claim to privacy and the community's need to know.'";
}

function changeText2(){
    console.log("click detected!");
    document.querySelector('button[name="button2"]').textContent = "'Character no longer is shaped by only two earnest, fumbling experts. Now all the world's a sage.'";
}

function changeText3(){
    console.log("click detected!");
    document.querySelector('button[name="button3"]').textContent = "'Its message is Total Change, ending psychic, social, economic, and political parochialism.'";
}

function changeText4(){
    console.log("click detected!");
    document.querySelector('button[name="button4"]').textContent = "'Today's child is growing up absurd, because he lives in two worlds, and neither of them inclines him to grow up.'";
}

function changeText5(){
    console.log("click detected!");
    document.querySelector('button[name="button5"]').textContent = "'When this circuit learns your job, what are you going to do?'";
}

function changeText6(){
    console.log("click detected!");
    document.querySelector('button[name="button6"]').textContent = "'Politics offers yesterday's answers to today's questions.'";
}

function changeText7(){
    console.log("click detected!");
    document.querySelector('button[name="button7"]').textContent = "'In an electric information environment, minority groups can no longer by contained - ignored.'";
}