const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));

    if (letters.length === 0) {
        return false;
    }
    let found = false; 
    
    for (let l of horizontalJoin) {
        if (l.includes(word)) {
            return true   
        }
    }

    for (let l of transpose(horizontalJoin)) {
        if (l.join('').includes(word)) {
            return true   
        }
    }
    return found
}

const transpose = function(matrix) {
    let answerArray = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let rowArray = [];
      for (let j = 0; j < matrix.length; j ++) {
        rowArray.push(matrix[j][i])
      }
      answerArray.push(rowArray);
    }
  return answerArray;
  };


module.exports = wordSearch