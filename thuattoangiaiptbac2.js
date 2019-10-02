function giaiphuongtrinh() {
    let a = document.getElementById("hesoa").value;
    let b = document.getElementById("hesob").value;
    let c = document.getElementById("hesoc").value;
    let result = b * b - 4 * a * c;
    if (result < 0) {
        document.getElementById("haha").innerHTML = "phuong trinh vo nghiem";
    } else if (result == 0) {
        document.getElementById("haha").innerHTML = "phuong trinh co nghiem kep X1 = X2 = " + -(b / 2*a);
    } else {
        document.getElementById("haha").innerHTML = "phuong trinh co 2 nghiem: X1 = " + (- b -Math.sqrt(result))/(2 * a)
            + " X2 = " + (-b+Math.sqrt(result))/(2*a);
    }
    }