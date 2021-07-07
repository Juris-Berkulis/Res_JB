function enlargeImg(event) {
    var divMyCertificatesBig = document.querySelector('.my_certificates__big');
    var divMyCertificatesBigSpec = document.querySelector('.my_certificates__big__spec');
    divMyCertificatesBigSpec.innerHTML = '';

    var jClick = this.id.split('_')[0];
    var iClick = this.id.split('_')[1];
    var lang = this.id.split('_')[2];
    var j = 0, i = 0;

    for (var j0 = 1; j0 <= myPartClass.length; j0++) {
        var countCertificatesInHtml0 = masCountCertificatesInHtml[j0 - 1];
        var myCertificates0 = masMyCertificates[j0 - 1];
        for (var i0 = countCertificatesInHtml0 + 1; i0 <= myCertificates0.length + countCertificatesInHtml0; i0++) {
            if (j0 == jClick && i0 == iClick) {
                j = j0;
                i = i0;
                console.log('Финал', j, i, lang);

                break;
            }
        }
    }

    console.log('Финал', j, i, lang);

    if (!(masMyCertificates[j - 1][i - 1].en == '') && !(masMyCertificates[j - 1][i - 1].ru == '')) {
        var inputMyCertificatesBigSpecCheckbox = document.createElement('input');
        inputMyCertificatesBigSpecCheckbox.setAttribute('class', 'my_certificates__big__spec__checkbox');
        inputMyCertificatesBigSpecCheckbox.setAttribute('type', 'checkbox');
        inputMyCertificatesBigSpecCheckbox.setAttribute('id', 'certificate_big');

        // if (lang == 'ru') {
        //     console.log('Сработал none');
        //     inputMyCertificatesBigSpecCheckbox.setAttribute('checked', 'none');
        // }
        if (lang == 'en') {
            console.log('Сработал checked');
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
        console.log('Финал', j, i, lang);
        console.log('img/my_certificates/jpg/' + myPartClass[j - 1] + '/' + masMyCertificates[j - 1][i - countCertificatesInHtml - 1].ru + '.jpg');
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


    divMyCertificatesBig.style.display = 'block';
}



















// var body = document.querySelector('body');

// var p = document.createElement('p');
// p.innerHTML = '3. *Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны быть стрелки «вперед» и «назад», по нажатию на которые происходит замена изображения на следующее или предыдущее.';
// p.style.fontWeight = 'bold';
// body.append(p);

// var divImgBig2 = document.createElement('div');
// var divImgSmall2 = document.createElement('div');
// var divButton = document.createElement('div');
// var products = ['cheese', 'sausage', 'bread'];



// function enlargeImg(event) {
//     var imgBig = document.createElement('img');
//     imgBig.width = '300';
//     imgBigSrc = event.target.src;
//     imgBig.src = imgBigSrc;
//     var parts1 = imgBigSrc.split('/');
//     var parts2 = parts1[parts1.length - 1].split('.');
//     imgBig.alt = parts2[0];
//     divImgBig2.innerHTML = '';
//     divImgBig2.append(imgBig);
//     var i = 0;
//     for (var product of products) {
//         if (product == imgBig.alt) {
//             certificateIndex = i;
//             break;
//         }
//         i++;
//     }
// }

// var certificateIndex = 0;

// function imgBigParam() {
//     var imgBig = document.createElement('img');
//     imgBig.width = '300';
//     imgBigSrc = 'img/small/' + products[certificateIndex] + '.jpg'
//     imgBig.src = imgBigSrc;
//     var parts1 = imgBigSrc.split('/');
//     var parts2 = parts1[parts1.length - 1].split('.');
//     imgBig.alt = parts2[0];
//     divImgBig2.append(imgBig);
// }

// imgBigParam();

// function imgBack() {
//     (certificateIndex == 0) ? certificateIndex = products.length - 1 : certificateIndex--;
//     divImgBig2.innerHTML = '';
//     imgBigParam();
// }

// function imgNext() {
//     (certificateIndex == products.length - 1) ? certificateIndex = 0 : certificateIndex++;
//     divImgBig2.innerHTML = '';
//     imgBigParam();
// }

// var buttonBack = document.createElement('button');
// var buttonNext = document.createElement('button');
// buttonBack.innerText = 'Назад';
// buttonNext.innerText = 'Вперёд';
// buttonBack.onclick = imgBack;
// buttonNext.onclick = imgNext;
// divButton.append(buttonBack);
// divButton.append(buttonNext);

// body.append(divButton);
// body.append(divImgSmall2);
// body.append(divImgBig2);
