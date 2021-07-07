var divMyCertificatesBig = document.querySelector('.my_certificates__big');
var buttonCloseBigCertificate = document.querySelector('.my_certificates__big__close_big_certificate');

buttonCloseBigCertificate.onclick = closeCertificate;

function closeCertificate() {
    divMyCertificatesBig.style.display = 'none';
}
