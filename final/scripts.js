var count = 0;

$('.expand-one').click(function(){
    $('.submission').slideToggle('slow');
}
);

$(".btn").click(function(){
    console.log("button clicked");
    count += 1;
    console.log("Number of inputs: " + count);

    new Audio("sparkle.mp3").play();

    $("#" + count).text($("#affirmationInput").val());

    $("#flower-image").attr("src","image" + String(count+1) + ".png")

    $("#flower" + String(count)).show("slow");

    if(count == 6){
        $('.message').show(4000);
        $('.footer').show();
        $('.submission-container').remove();
        $('.expand-one').text("🌼");
    } 
}
);



