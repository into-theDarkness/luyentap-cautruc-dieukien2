function tinhtiendien() {
let sodien = document.getElementById("sodien").value;
let result = 0;
if (sodien <= 50){
    result = sodien*1500;
} else if (sodien > 50 && sodien <= 100){
    result = (sodien -50)*3000 + 50*1500;
} else if (sodien >100 && sodien <= 200){
    result = (sodien-100)*3500 + 50*1500 + 50*3000;
}else {
    result = (sodien - 200)*5000 + 100*3500 + 50*3000 + 50*1500;
}
    document.getElementById("hehe").innerHTML = + result + " VND";

    
}