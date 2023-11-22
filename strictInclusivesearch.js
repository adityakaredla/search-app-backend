
function strictInclusionSearch(dataObj, input) {
    for (const key in dataObj) {
        if (typeof dataObj[key] === 'string' && dataObj[key] === (input)) {
            return true;
        }
        if (typeof dataObj[key] === 'number' && dataObj[key].toString() === (input)) {
            return true;
        }
        if (typeof dataObj[key] === 'object' && inclusionSearch(dataObj[key], input)) {
            return true;
        }
    }
    return false;
}

module.exports = {strictInclusionSearch};