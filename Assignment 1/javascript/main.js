
function getData() {
    var custName = document.getElementById("custName").value;
    localStorage.setItem("custName", custName);
    var email = document.getElementById("email").value;
    localStorage.setItem("email", email);
    var roomType = document.getElementById("roomType").value;
    localStorage.setItem("roomType", roomType);
    var width = Number(document.getElementById("width").value);
    localStorage.setItem("width", width);
    var length = Number(document.getElementById("length").value);
    localStorage.setItem("length", length);
    var color = document.getElementById("color").value;
    localStorage.setItem("color", color);
    var paint = document.getElementById("paint").value;
    localStorage.setItem("paint", paint);
    var size = Number(length * width);
    localStorage.setItem("size", size);
    var cans = Number(Math.round(size / 400));
    localStorage.setItem("cans", cans);
    var price = "0";
    if (paint == "standard") {
        price = Number(Math.ceil((cans * 24.99) * 1.13));

    } else {
        price = Number(Math.round((cans * 39.99) * 1.13));

    }
    localStorage.setItem("price", price);

};
$(document).ready(function () {
    $("#name").html(localStorage.getItem("custName"));
    $("#eml").html(localStorage.getItem("email"));
    $("#room").html(localStorage.getItem("roomType"));
    $("#size").html(localStorage.getItem("size"));
    $("#color").html(localStorage.getItem("color"));
    $("#color").css("background-color", localStorage.getItem("color"));
    $("#cans").html(localStorage.getItem("cans"));
    $("#price").html("$");
    $("#price").append(localStorage.getItem("price"));
});