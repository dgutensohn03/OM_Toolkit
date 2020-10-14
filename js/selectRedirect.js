var selectRedirect = document.getElementById("select-topic");

selectRedirect.addEventListener("click", function() {
var options = selectRedirect.querySelectorAll("option");
var count = options.length;

});

selectRedirect.addEventListener("change", function() {
    window.location.href = selectRedirect.value;
});
