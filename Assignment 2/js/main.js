var planetArray = new Array();
var planetId;
class planet {
    constructor(planetName, planetColor, planetRadiusKM, fromEarth, fromSun, image) {
        this.planetName = planetName;
        this.planetColor = planetColor;
        this.planetRadiusKM = planetRadiusKM;
        this.fromSun = fromSun;
        this.fromEarth = fromEarth;
        this.image = image;
    }
} // end of class Planets

$(document).ready(function() {



    $.getJSON("dataFiles/A2_planets.json", function(data) {


        $("list1").html("");
        $("list2").html("");


        for (let p of data.solarSystem.planets) {
            planetArray.push(new planet(p.planetName, p.planetColor, p.planetRadiusKM, p.distInMillionsKM.fromEarth, p.distInMillionsKM.fromSun, p.image));
        }
        for (let x = 0; x < planetArray.length; x++) {
            $("#list1").append(
                `
             <li li-id='${x}'>
              <a href='output.html'>${planetArray[x].planetName}</a>
             </li>
            `
            )
        }
    });
});

$(document).on("click", "#list1 >li", function() {
    localStorage.setItem("planetId", $(this).closest("li").attr("li-id"));
    localStorage.setItem("planetArray", JSON.stringify(planetArray));
});

$(document).on("click", "#list2 >li", function() {
    localStorage.setItem("planetId", $(this).closest("li").attr("li-id"));
    localStorage.setItem("planetArray", JSON.stringify(planetArray));
});