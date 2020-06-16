
$("ul").on("click", "li" ,function(){ // ovde smo tacno specificirali da kad je klik nes u ul i da vazi za svaki tren i buduci li//
    $(this).toggleClass("Zavrsen");
})


$("ul").on("click", "span",function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();// da se ne bi stvorio buble problem//
})


$("input[type='text'").keypress(function(e){
    // which predstavlja koji je key na tast pritisnut, svaki tast ima odredjeni br
    if(e.which === 13){
        // dodeljujemo ovoj promenjivu vrednost unetu u inputu
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText +"</li>");
    }
})


$(".fa-plus-circle").on("click", function(){
    $("input[type='text'").fadeToggle(250);
})