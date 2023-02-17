const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
        const ten = expr.slice(i, i + 10);
        let code = '';
        if (ten === '**********') {
            result += ' ';
            continue;
        }
        for (let j = 0; j <= ten.length; j += 2) {
            if (ten[j] === '1' && ten[1 + j] === '0') {
                code += '.';
            }
            if (ten[j] === '1' && ten[1 + j] === '1') {
                code += '-';
            }
        }
        result += MORSE_TABLE[code];
    }
    return result;
}

module.exports = {
    decode
}