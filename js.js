var btn = document.getElementById("button");
btn.addEventListener("click", getText);

function getText(){

    var textarea = document.getElementById('text');
    var mail = document.getElementById('mail');
    var poznamka = document.getElementById('poznamka');

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


    var checkedBoxes = getCheckedBoxes("mycheckboxes");


    console.log("text: "+textarea.value+'\n cas: '+date+' '+time+'\n mail: '+mail.value+ '\n poznamka: '+poznamka.value);
    console.log(checkedBoxes);

    cislo = Math.floor(Math.random() * 5);
    switch (cislo) {
        case 0:
            coor = "Movies - Lucy N 48° 45.808 E 021° 16.513";
            break;
        case 1:
            coor = "Movies - Intouchables N 48° 45.451 E 021° 16.407";
            break;
        case 2:
            coor = "Movies - Edge of tomorrow N 48° 45.308 E 021° 16.300 ";
            break;
        case 3:
            coor = "Movies - Contact N 48° 45.217 E 021° 16.174 ";
            break;
        case 4:
            coor = "Movies - Limitless N 48° 45.119 E 021° 16.133 ";
            break;
    }
    alert("Nejaká maličkosť kým čakáte :)\n\n"+coor);

}

function getCheckedBoxes(chkboxName) {
    var checkboxes = document.getElementsByName('chcu');
    var checkboxesChecked = [];
    // loop over them all
    for (var i=0; i<checkboxes.length; i++) {
        // And stick the checked ones onto an array...
        if (checkboxes[i].checked) {
            checkboxesChecked.push(checkboxes[i].value);
        }
    }
    // Return the array if it is non-empty, or null
    return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}

