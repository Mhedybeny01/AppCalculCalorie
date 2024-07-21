


function women(){
    var weight = parseInt(document.getElementById('weight').value);
    var height= parseInt(document.getElementById('height').value);   
    var age= parseInt(document.getElementById('age').value);
    var res = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    document.getElementById('result').value = res;
}