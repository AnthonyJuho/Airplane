slide1 = document.getElementById("slide1")
slide2 = document.getElementById("slide2")
body = document.getElementsByClassName("body")

var value_slide1 = 1
var slide1_min = 0
var slide1_max = 2
var slide2_min = 0
var slide2_max = 2
var value_slide2 = 1

function get_value() {

}

console.log("Active");
document.addEventListener('keydown', function(event) {
    
    if(event.key === 'Q' || event.key === 'q') {
        if(!(value_slide1-1 < slide1_min)) {
            value_slide1 -= 1 //slide1 값 내리기
            reload_slide()
        }
    } else if(event.key === 'E' || event.key === 'e') {
        if(!(value_slide1+1>slide1_max)) {
            value_slide1 += 1 //slide2 값 올리기
            reload_slide()
        }
    } else if(event.key === 'S' || event.key === 's') {
        if(!(value_slide2-1 < slide2_min)) {
            value_slide2 -= 1 //slide2 값 내리기
            reload_slide()
        }
    } else if(event.key === 'F' || event.key === 'f') {
        if(!(value_slide2+1 > slide2_max)) {
            value_slide2 += 1 //slide2 값 올리기
            reload_slide()
        }
    }

});
function reload_slide() {
    slide1.value = value_slide1;
    slide2.value = value_slide2;
}
reload_slide()