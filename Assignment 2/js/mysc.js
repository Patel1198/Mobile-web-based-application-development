var planetArray = new Array();
var planetId;

$(document).ready(function() {
    planetArray = JSON.parse(localStorage.getItem("planetArray"));
    planetId = localStorage.getItem("planetId");



    $("#planetName").html(planetArray[planetId].planetName);
    $("#planetColor").html(planetArray[planetId].planetColor);
    $("#planetRadiusKM").html(planetArray[planetId].planetRadiusKM);
    $("#distInMillionsKMfromsun").html(planetArray[planetId].fromSun);
    $("#distInMillionsKMfromearth").html(planetArray[planetId].fromEarth);

    $('#mainDiv').css({
        "background-image": "url('" + planetArray[planetId].image + "')",
        "background-repeat": "no-repeat",
        "background-size": "contain",
        "height": "auto",
        "width": "100%",
        "background-position": "center"
    });
    //$("#photo").attr(src,planetArray[planetName].image);
});