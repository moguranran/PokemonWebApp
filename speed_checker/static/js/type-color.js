function makeColor(type) {
    var color = "";
    switch (type) {
        case "normal":
            color = "#a0a0a0";
            break;
        case "fire":
            color = "red";
            break;
        case "water":
            color = "#4b69ff";
            break;
        case "grass":
            color = "#23c235";
            break;
        case "electric":
            color = "#b8c63f";
            break;
        case "ice":
            color = "aqua";
            break;
        case "dragon":
            color = "#3551df";
            break;
        case "rock":
            color = "brown";
            break;
        case "flying":
            color = "#62abca";
            break;
        case "psychic":
            color = "#aa2ad1";
            break;
        case "fighting":
            color = "#c17626";
            break;
        case "fairy":
            color = "#cc57c1";
            break;
        case "poison":
            color = "#96008f";
            break;
        case "ghost":
            color = "#956cd1";
            break;
        case "dark":
            color = "#000000";
            break;
        default:
            color = "#8f8f8f";
            break;
    }

    return color;
}

document.writeln("test1");
var typeDocument = document.getElementsByClassName("type");
var type0 = document.getElementById("pokemon_type_0").value;
var type1 = document.getElementById("pokemon_type_1").value;
typeDocument[0].style.backgroundColor = makeColor(type0)
typeDocument[1].style.backgroundColor = makeColor(type1)

document.writeln("test2");
document.writeln(type0);
document.writeln("test3");