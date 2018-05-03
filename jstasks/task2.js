function makeW1(fontWidth, height) {
    let tmp = [];
    for (let i = 0; i < height; i++) {
        tmp[i] = (' '.repeat(i) + '*'.repeat(fontWidth) + ' '.repeat(height-1-i));
    }
    for (let i = 0, j = height-1; i < height, j >= 0; i++, j--) {
        tmp[i] = tmp[i] + tmp[j];
    }
    let len = tmp[0].length;
    for (let i = 0; i < height; i++) {
        tmp[i] = tmp[i].slice(0, len);
    }
    for (let i = 0; i < height; i++) {
        tmp[i] = tmp[i].repeat(2);
    }
    return tmp;
}

//*-------------------------------------------------------------------------------------------------------------------//

function makeW2(fontWidth, height, length) {
    length = length || 2;
    let tmp = [];
    for (let i = 0; i < height; i++) {
        tmp[i] = (' '.repeat(i) + '*'.repeat(fontWidth) + ' '.repeat(height-1-i));
    }
    for (let i = 0, j = height-1; i < height, j >= 0; i++, j--) {
        tmp[i] = tmp[i] + tmp[j];
    }
    let len = tmp[0].length;
    for (let i = 0; i < height; i++) {
        tmp[i] = tmp[i].slice(0, len);
    }
    for (let i = 0; i < height; i++) {
        tmp[i] = tmp[i].repeat(length);
    }
    return tmp;
}

//**------------------------------------------------------------------------------------------------------------------//

function makeW3(fontWidth, height, length) {
    length = length || 2;
    let tmp = [];
    for (let i = 0; i < height; i++) {
        tmp[i] = (' '.repeat(i) + '*'.repeat(fontWidth) + ' '.repeat(height-1-i));
    }
    for (let i = 0; i < height; i++) {
        tmp[i] = tmp[i].slice(0, tmp[i].length -1);
    }
    for (let i = 0, j = height-1; i < height, j >= 0; i++, j--) {
        tmp[i] = tmp[i] + tmp[j];
    }
    let len = tmp[0].length;
    for (let i = 0; i < height; i++) {
        tmp[i] = tmp[i].slice(0, len);
    }
    for (let i = 0; i < height; i++) {
        tmp[i] = tmp[i].repeat(length);
    }
    return tmp;
}