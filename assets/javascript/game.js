var crystal1;
var crystal2;
var crystal3;
var crystal4;
var finalscore = 0;
var computerscore = 0;
var wins = 0;
var losses = 0;

function reset(){
    finalscore = 0;
};    

$(document).ready(function() {

    $('#computer').on('click', function() {
        console.log('before click');
        console.log('1: ' + crystal1 + '2: ' + crystal2 + '3: ' + crystal3 + '4: ' + crystal4);
        computerscore = Math.floor((Math.random() * 100));
        crystal1 = Math.floor((Math.random() * 10) +1);
        crystal2 = Math.floor((Math.random() * 10) +1);
        crystal3 = Math.floor((Math.random() * 10) +1);
        crystal4 = Math.floor((Math.random() * 10) +1);
        console.log('after click')
        $('#computerscore').html(computerscore);
        $('#score').html(finalscore);    
        reset();
    });

    $(".add").on("click", function(){
        var crystalscore = $(this).attr("id");

        if (crystalscore === "crystal11") {
            finalscore += crystal1;
        }
        else if (crystalscore === "crystal22"){
            finalscore += crystal2;
        }
        else if (crystalscore === "crystal33"){
            finalscore += crystal3;
        }
        else if (crystalscore === "crystal44"){
            finalscore += crystal4;
        };   

        $('#score').html(finalscore);


        if (finalscore === computerscore) {
            alert("You Win!");
            wins++;
            $('#wins').html(wins);
            reset();
        }
        else if (finalscore > computerscore) {
            alert("You Lose!");
            losses++;
            $('#losses').html(losses);
            reset();
        }
    });
});


