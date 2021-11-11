function changemoney() {
    let a= document.getElementById('amount').value;
    let b= parseFloat(a);
    let c=document.getElementById('tien1').value;
    let d=document.getElementById('tien2').value;
    

    if ( c == 'VND' && d == 'USD' ) {
        e=b/22500
        ;
        document.getElementById("result").innerHTML='result:' + e ;
    }
    if ( c == 'USD' && d == "VND") {
        e=b*22500;
        document.getElementById('result').innerHTML='result :' + e ; 
    }
    if ( c == d) {
        alert("2 Loai tien giong nhau")
    }

        
    

}   