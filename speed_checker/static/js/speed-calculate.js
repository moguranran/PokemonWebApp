function getSpeed(baseStat) {
    var effort = status_form.effort_value.value;
    var individualValue = status_form.individual.value;
    var status = calculate(baseStat, individualValue, effort);
    var output = document.getElementById("speed_value_output");
    output.innerHTML = status;
}

function calculate(baseStat, individualValue, effortValue) {
    func();
    //能力値＝{(種族値×2＋個体値＋努力値÷4)×レベル÷100＋5}×性格補正
    var stat = Math.floor(((Number(baseStat) * 2 + Number(individualValue) + Number(effortValue) / 4) * 50 / 100 + 5));
    return stat;
}

function func() {
    var baseStat = document.getElementById("status_s").value;
    alert(baseStat)
}

window.onload = func()