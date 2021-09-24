var j;
var i;
var lang;

function enlargeImg(event, btnJ, btnI, btnLang) {
    var divMyCertificatesBig = document.querySelector('.my_certificates__big');
    var divMyCertificatesBigSpec = document.querySelector('.my_certificates__big__spec');
    divMyCertificatesBigSpec.innerHTML = '';

    if (btnI == undefined && btnJ == undefined && btnLang == undefined) {
        j = this.id.split('_')[0];
        i = this.id.split('_')[1];
        lang = this.id.split('_')[2];
    }
    else {
        j = btnJ;
        i = btnI;
        lang = btnLang;
    }

    var btnBack = document.querySelector('.my_certificates__big__btn-back');
    var btnNext = document.querySelector('.my_certificates__big__btn-next');

    btnBack.setAttribute('id', j + '_' + i + '_' + lang + '_btnBack');
    btnNext.setAttribute('id', j + '_' + i + '_' + lang + '_btnNext');

    btnBack.onclick = imgBack;
    btnNext.onclick = imgNext;

    // console.log('Финал', j, i, lang);

    if (!(masMyCertificates[j - 1][i - 1].en == '') && !(masMyCertificates[j - 1][i - 1].ru == '')) {
        var inputMyCertificatesBigSpecCheckbox = document.createElement('input');
        inputMyCertificatesBigSpecCheckbox.setAttribute('class', 'my_certificates__big__spec__checkbox');
        inputMyCertificatesBigSpecCheckbox.setAttribute('type', 'checkbox');
        inputMyCertificatesBigSpecCheckbox.setAttribute('id', 'certificate_big');

        if (lang == 'en') {
            // console.log('Сработал checked');
            inputMyCertificatesBigSpecCheckbox.setAttribute('checked', 'checked');
        }
    
        var divMyCertificatesBigSpecOverlay = document.createElement('div');
        divMyCertificatesBigSpecOverlay.setAttribute('class', 'my_certificates__big__spec__overlay');
    
        var imgMyCertificatesBigSpecOverlayImg = document.createElement('img');
        imgMyCertificatesBigSpecOverlayImg.setAttribute('class', 'my_certificates__big__spec__overlay__img');
        imgMyCertificatesBigSpecOverlayImg.src = 'img/my_certificates/jpg/' + myPartClass[j - 1] + '/' + masMyCertificates[j - 1][i - countCertificatesInHtml - 1].en + '.jpg';
        imgMyCertificatesBigSpecOverlayImg.alt = masMyCertificates[j - 1][i - countCertificatesInHtml - 1].en;
        imgMyCertificatesBigSpecOverlayImg.width = '50';

        var labelMyCertificatesBigSpecLabel = document.createElement('label');
        labelMyCertificatesBigSpecLabel.setAttribute('class', 'my_certificates__big__spec__label');
        labelMyCertificatesBigSpecLabel.setAttribute('for', 'certificate_big');
    }

    var imgMyCertificatesBigSpecImg = document.createElement('img');
    imgMyCertificatesBigSpecImg.setAttribute('class', 'my_certificates__big__spec__img');

    if (!(masMyCertificates[j - 1][i - countCertificatesInHtml - 1].ru == '')) {
        // console.log('Финал', j, i, lang);
        // console.log('img/my_certificates/jpg/' + myPartClass[j - 1] + '/' + masMyCertificates[j - 1][i - countCertificatesInHtml - 1].ru + '.jpg');
        imgMyCertificatesBigSpecImg.src = 'img/my_certificates/jpg/' + myPartClass[j - 1] + '/' + masMyCertificates[j - 1][i - countCertificatesInHtml - 1].ru + '.jpg';
        imgMyCertificatesBigSpecImg.alt = masMyCertificates[j - 1][i - countCertificatesInHtml - 1].ru;
    }
    else {
        imgMyCertificatesBigSpecImg.src = 'img/my_certificates/jpg/' + myPartClass[j - 1] + '/' + masMyCertificates[j - 1][i - countCertificatesInHtml - 1].en + '.jpg';
        imgMyCertificatesBigSpecImg.alt = masMyCertificates[j - 1][i - countCertificatesInHtml - 1].en;
    }

    imgMyCertificatesBigSpecImg.width = '50';

    if (!(masMyCertificates[j - 1][i - countCertificatesInHtml - 1].en == '') && !(masMyCertificates[j - 1][i - countCertificatesInHtml - 1].ru == '')) {
        divMyCertificatesBigSpecOverlay.append(imgMyCertificatesBigSpecOverlayImg);
        divMyCertificatesBigSpec.append(inputMyCertificatesBigSpecCheckbox);
        divMyCertificatesBigSpec.append(divMyCertificatesBigSpecOverlay);
    }

    divMyCertificatesBigSpec.append(imgMyCertificatesBigSpecImg);

    if (!(masMyCertificates[j - 1][i - countCertificatesInHtml - 1].en == '') && !(masMyCertificates[j - 1][i - countCertificatesInHtml - 1].ru == '')) {
        divMyCertificatesBigSpec.append(labelMyCertificatesBigSpecLabel);
    }

    if (!(masMyCertificates[j - 1][i - countCertificatesInHtml - 1].en == '') && !(masMyCertificates[j - 1][i - countCertificatesInHtml - 1].ru == '')) {
        divMyCertificatesBigSpec.style.paddingBottom = '3px'
    }
    else {
        divMyCertificatesBigSpec.style.paddingBottom = '0'
    }

    divMyCertificatesBig.style.display = 'block';
}
