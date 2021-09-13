function imgBack(event) {
    var btnJ = this.id.split('_')[0];
    var btnI = this.id.split('_')[1];
    var btnLang = this.id.split('_')[2];
    if (btnJ == 1 && btnI == 1) {
        btnJ = masMyCertificates.length;
        btnI = masMyCertificates[btnJ - 1].length;
    }
    else {
        (btnI == 1) ? (btnJ--, btnI = masMyCertificates[btnJ - 1].length) : btnI--;
    }
    enlargeImg(event, btnJ, btnI, btnLang);
}

function imgNext(event) {
    var btnJ = this.id.split('_')[0];
    var btnI = this.id.split('_')[1];
    var btnLang = this.id.split('_')[2];
    if (btnJ == masMyCertificates.length && btnI == masMyCertificates[btnJ - 1].length) {
        btnJ = 1;
        btnI = 1;
    }
    else {
        (btnI == masMyCertificates[btnJ - 1].length) ? (btnJ++, btnI = 1) : btnI++;
    }
    enlargeImg(event, btnJ, btnI, btnLang);
}
