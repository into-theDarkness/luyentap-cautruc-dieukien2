function tinhlai() {
    let a =parseInt(document.getElementById("sotienvay").value);
    let b =parseInt( document.getElementById("thoigian").value);
    let c =parseInt( document.getElementById("laisuat").value);
    let result = 0;
    result = a * Math.pow((1+c/100),b);
    document.getElementById("hehe").innerHTML = "So tien cac ha phai tra: " + result;
}