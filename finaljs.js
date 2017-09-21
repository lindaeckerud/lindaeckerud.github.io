
function slide() {
document.querySelector("#panel").classList.toggle("opened");
}
document.querySelector("#tab").addEventListener("click", slide, false);


$(document).ready(function(){
    $("button").click(function(){
        $("p").hide(1000);
    });
});
