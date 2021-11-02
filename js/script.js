const kode = document.getElementById("kode");
const voucher = "Latom";
const Message = "kode tidak valid";
function validation() {
    if (kode.value != voucher) {
        document.getElementById("notValid").style.display = "block";
        document.getElementById("notValid").innerHTML = Message;
    } else if (kode.value == voucher) {
        document.getElementById("notValid").style.display = "none";
    }
}