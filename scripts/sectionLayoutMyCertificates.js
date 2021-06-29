var myPartClass = ['tests', 'main'];
var masCountCertificatesInHtml = [1, 1];
var masMyCertificates = [myCertificatesTests, myCertificatesMain];

for (var j = 1; j <= myPartClass.length; j++) {
    var divMyCertificatesCoin = document.querySelector('.my_certificates__cont__' + myPartClass[j - 1]);
    var countCertificatesInHtml = masCountCertificatesInHtml[j - 1];
    var myCertificates = masMyCertificates[j - 1];
    for (var i = countCertificatesInHtml + 1; i <= myCertificates.length + countCertificatesInHtml; i++) {
        var divMyCertificatesContCard = document.createElement('div');
        divMyCertificatesContCard.setAttribute('class', 'my_certificates__cont__' + myPartClass[j - 1] + '__card');
        
        var divMyCertificatesContCardSpec = document.createElement('div');
        divMyCertificatesContCardSpec.setAttribute('class', 'my_certificates__cont__' + myPartClass[j - 1] + '__card__spec');
        
        var inputMyCertificatesContCardSpecCheckbox = document.createElement('input');
        inputMyCertificatesContCardSpecCheckbox.setAttribute('class', 'my_certificates__cont__' + myPartClass[j - 1] + '__card__spec__checkbox');
        inputMyCertificatesContCardSpecCheckbox.setAttribute('type', 'checkbox');
        inputMyCertificatesContCardSpecCheckbox.setAttribute('id', 'certificate_' + myPartClass[j - 1] + '_' + i);
    
        var divMyCertificatesContCardSpecOverlay = document.createElement('div');
        divMyCertificatesContCardSpecOverlay.setAttribute('class', 'my_certificates__cont__' + myPartClass[j - 1] + '__card__spec__overlay');
    
        var imgMyCertificatesContCardSpecOverlayImg = document.createElement('img');
        imgMyCertificatesContCardSpecOverlayImg.setAttribute('class', 'my_certificates__cont__' + myPartClass[j - 1] + '__card__spec__overlay__img');
        imgMyCertificatesContCardSpecOverlayImg.setAttribute('src', 'img/my_certificates/jpg/' + myPartClass[j - 1] + '/' + myCertificates[i - countCertificatesInHtml - 1].en + '.jpg');
        imgMyCertificatesContCardSpecOverlayImg.setAttribute('alt', myCertificates[i - countCertificatesInHtml - 1].en);
        imgMyCertificatesContCardSpecOverlayImg.setAttribute('width', '50');
    
        var imgMyCertificatesContCardSpecImg = document.createElement('img');
        imgMyCertificatesContCardSpecImg.setAttribute('class', 'my_certificates__cont__' + myPartClass[j - 1] + '__card__spec__img');
        imgMyCertificatesContCardSpecImg.setAttribute('src', 'img/my_certificates/jpg/' + myPartClass[j - 1] + '/' + myCertificates[i - countCertificatesInHtml - 1].ru + '.jpg');
        imgMyCertificatesContCardSpecImg.setAttribute('alt', myCertificates[i - countCertificatesInHtml - 1].ru);
        imgMyCertificatesContCardSpecImg.setAttribute('width', '50');
    
        var labelMyCertificatesContCardSpecLabel = document.createElement('label');
        labelMyCertificatesContCardSpecLabel.setAttribute('class', 'my_certificates__cont__' + myPartClass[j - 1] + '__card__spec__label');
        labelMyCertificatesContCardSpecLabel.setAttribute('for', 'certificate_' + myPartClass[j - 1] + '_' + i);
    
        divMyCertificatesContCardSpecOverlay.append(imgMyCertificatesContCardSpecOverlayImg);
        divMyCertificatesContCardSpec.append(inputMyCertificatesContCardSpecCheckbox);
        divMyCertificatesContCardSpec.append(divMyCertificatesContCardSpecOverlay);
        divMyCertificatesContCardSpec.append(imgMyCertificatesContCardSpecImg);
        divMyCertificatesContCardSpec.append(labelMyCertificatesContCardSpecLabel);
        divMyCertificatesContCard.append(divMyCertificatesContCardSpec);
        divMyCertificatesCoin.append(divMyCertificatesContCard);
    }
}
