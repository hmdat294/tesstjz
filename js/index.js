
var y = 0;
function plusSlides(x) {
    y = y + x;

    if (y < 0) y = 1;
    if (y > 1) y = 0;

    if (y == 0) {
        document.getElementById('my_Slide').innerHTML = ("<img src='images/danhgia1.png'>")
    }
    else if (y == 1) {
        document.getElementById('my_Slide').innerHTML = ("<img src='images/danhgia2.png'>")
    }
    
}

function gogo () {
    y++;
    if (y < 0) y = 1;
    if (y > 1) y = 0;

    if (y == 0) {
        document.getElementById('my_Slide').innerHTML = ("<img src='images/danhgia1.png'>")
    }
    else if (y == 1) {
        document.getElementById('my_Slide').innerHTML = ("<img src='images/danhgia2.png'>")
    }
}
setInterval(gogo,5000);