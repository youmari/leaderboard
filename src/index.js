/* eslint-disable consistent-return */
import './css/style.css';
import './index.html';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xojzWihbpDsVZF9d7laj/scores';
const scoresContainer = document.querySelector('ul');
const refreshBtn = document.querySelector('.refresh-btn');
const addScoreForm = document.querySelector('form');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const pTagResponse = document.querySelector('.response');

const clearAllElement = () => {
  while (scoresContainer.firstChild) {
    scoresContainer.firstChild.remove();
  }
};

const createScoreElement = ({ user, score }) => {
  const scoreElement = document.createElement('li');
  scoreElement.classList.add('score-element');
  scoresContainer.append(scoreElement);
  scoreElement.textContent = `${user}: ${score}`;
};

const getScoreData = async () => {
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => data.result);
  return response;
};

const Addscore = async (user, score) => {
  const newData = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  };
  const response = await fetch(url, newData)
    .then((res) => res.json())
    .then((data) => data.result);
  pTagResponse.textContent = response;
};

const displayScores = async () => {
  const data = await getScoreData();
  clearAllElement();
  data.forEach((item) => createScoreElement(item));
};

refreshBtn.addEventListener('click', displayScores);

addScoreForm.addEventListener('submit', (e) => {
  if (nameInput.value === '' || scoreInput.value === '') return e.preventDefault();
  Addscore(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
  e.preventDefault();
});