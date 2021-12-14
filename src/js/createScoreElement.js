const scoresContainer = document.querySelector('ul');

const createScoreElement = ({ user, score }) => {
  const scoreElement = document.createElement('li');
  scoreElement.classList.add('score-element');
  scoresContainer.append(scoreElement);
  scoreElement.textContent = `${user}: ${score}`;
};

export default createScoreElement;