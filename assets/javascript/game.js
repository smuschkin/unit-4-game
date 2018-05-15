//Computer score
// var computerscore;

var crystal1;
var crystal2;
var crystal3;
var crystal4;
var finalscore;

$('#computer').on('click', function() {
    console.log('before click')
    console.log('1: ' + crystal1 + '2: ' + crystal2 + '3: ' + crystal3 + '4: ' + crystal4)
    var computerscore = Math.floor((Math.random() * 100));
    crystal1 = Math.floor((Math.random() * 10));
    crystal2 = Math.floor((Math.random() * 10));
    crystal3 = Math.floor((Math.random() * 10));
    crystal4 = Math.floor((Math.random() * 10));
    finalscore = 0;
    console.log('after click')
    // console.log('1: ' + crystal1 + '2: ' + crystal2 + '3: ' + crystal3 + '4: ' + crystal4)
    $('#computerScore').html(computerscore);
    $('#score').html(finalscore);

    });

//When image1 √is clicked
$('#crystal1').on('click', function() {
    // add the value of crystal1 to the total score
    finalscore += crystal1;
    console.log(crystal1);
    $('#score').html(finalscore);

});

//When image2 is clicked
$('#crystal2').on('click', function() {
    finalscore += crystal2;
    console.log(crystal2);
    $('#score').html(finalscore);

});

$('#crystal3').on('click', function() {
    finalscore += crystal3;
    console.log(crystal3);
    $('#score').html(finalscore);

});

$('#crystal4').on('click', function() {
    finalscore += crystal4;
    console.log(crystal4);
    $('#score').html(finalscore);

});

// function add () {
//     console.log('1: ' + crystal1 + '2: ' + crystal2 + '3: ' + crystal3 + '4: ' + crystal4)
//     // finalscore = crystal1 + crystal2 + crystal3 + crystal4;
//     $('#score').html(finalscore);
//     console.log(finalscore);
// };

