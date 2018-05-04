let fontWeight = "bold";
let lineHeight = 21;

function doubleV() {
    let all = 18;
    let asterisksCount = 3;
    let double = 2;
    let resultString = '%c';

    for (let spaces = 0; all - asterisksCount * double - spaces * double >= 0; spaces++ ) {
        let spacesInside = all - asterisksCount * double - spaces * double;
        let rowSpaces = '';
        let rowAsterisk = '';
        let rowSpacesInside = '';

        for (let space = 0; space < spaces; space++) {
            rowSpaces = rowSpaces + ' ';
        }

        for (let asterisk = 0; asterisk < asterisksCount; asterisk++) {
            rowAsterisk = rowAsterisk + '*';
        }

        for (let space = 0; space < spacesInside; space++) {
            rowSpacesInside = rowSpacesInside + ' ';
        }

        const singleRow = rowSpaces
            + rowAsterisk
            + rowSpacesInside
            + rowAsterisk
            + rowSpaces;

        resultString = resultString
            + singleRow
            + singleRow
            + '\n';
    }

    return resultString;
}

console.log(doubleV(),  `
                        color: red;
                        font-size: 14px;
                        line-height: ${lineHeight}px;
                        font-weight: ${fontWeight};
`);
