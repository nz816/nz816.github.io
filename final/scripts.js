var count = 0;

// click flower to reveal submission box
$('.expand-one').click(function(){
    $('.submission').slideToggle('slow');
}
);

// submission things
$(".btn").click(function(){
    console.log("button clicked");
    //increment nuber of affirmations
    count += 1;
    console.log("Number of inputs: " + count);
    //sparkle sound plays
    new Audio("sparkle.mp3").play();
    //changes text of affirmation to user input
    $("#" + count).text($("#affirmationInput").val());
    //updates flower stage
    $("#flower-image").attr("src","image" + String(count+1) + ".png")
    //reveals rotating flower next to affirmation
    $("#flower" + String(count)).show("slow");
    //things that happen once all affirmations are entered
    if(count == 6){
        $('.message').show(4000);
        $('.footer').show();
        $('.submission-container').remove();
        $('.expand-one').text("🌼");
    } 
}
);



