window.downloadPDF = function downloadPDF() {

    var pdf = 'data:application/octet-stream;base64,' + document.getElementById("base").value;
    var baixarbase = document.getElementById('baixar');
    baixarbase.href = pdf;
    baixarbase.click();

    alert('Base64 convertido em PDF. Download realizado');
}

