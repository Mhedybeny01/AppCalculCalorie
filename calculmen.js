


function men(){
    var weight = parseInt(document.getElementById('weight').value);
    var height= parseInt(document.getElementById('height').value);   
    var age= parseInt(document.getElementById('age').value);
    var res = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    document.getElementById('result').value = res;
}