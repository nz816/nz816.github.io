var count = 0;

$('.expand-one').click(function(){
    $('.submission').slideToggle('slow');
}
);

$(".btn").click(function(){
    console.log("button clicked");
    count += 1;
    console.log("Number of inputs: " + count);
    $("#" + count).text($("#affirmationInput").val());

    $("#flower-image").attr("src","image" + String(count+1) + ".png")

    if(count == 6){
        $('.message').show();
        $('.submission-container').remove();
    } 
}
);



