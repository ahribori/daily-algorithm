function backspaceCompare(S, T) {
  function commitBackspace(word) {
    let backspaceStack = 0;
    for (let i = word.length - 1; i >= 0; i--) {
      const c = word[i];
      if (c === '#') {
        backspaceStack++;
      }

      if (backspaceStack > 0 && c !== '#') {
        word = word.substring(0, i) + word.substring(i + 2, word.length);
        backspaceStack--;
      }
    }
    return word.replace(/#/g, '');
  }
  return commitBackspace(S) === commitBackspace(T)
}

backspaceCompare();
