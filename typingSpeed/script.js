const textArea = document.getElementById('text-area');
const wordCount = document.getElementById('word-count');
const resetButton = document.getElementById('reset-button');

function countWords() {
  const text = textArea.value.trim();
  if (text === '') {
    return 0;
  }
  return text.split(/\s+/).length;
}

function updateWordCount() {
  const count = countWords();
  const wordCountText = count === 1 ? '1 word' : `${count} words`;
  wordCount.textContent = wordCountText;
}

textArea.addEventListener('keyup', updateWordCount);
textArea.addEventListener('keypress', updateWordCount);

resetButton.addEventListener('click', function() {
  textArea.value = '';
  wordCount.textContent = '0 words';
});