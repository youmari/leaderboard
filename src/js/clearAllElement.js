const clearAllElement = () => {
  const scoresContainer = document.querySelector('ul');
  while (scoresContainer.firstChild) {
    scoresContainer.firstChild.remove();
  }
};

export default clearAllElement;