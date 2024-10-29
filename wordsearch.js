const transpose = require ("../../async/matrix_transposition");

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    const vertical = transpose(letters).map(ls => ls.join(''));
    for (l of vertical) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}

module.exports = wordSearch