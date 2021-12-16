/* eslint-disable consistent-return */
import './css/style.css';
import './index.html';
import { getScoreData, addScore } from './js/api';
import clearAllElement from './js/clearAllElement';
import createScoreElement from './js/createScoreElement';

const refreshBtn = document.querySelector('.refresh-btn');
const addScoreForm = document.querySelector('form');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');

const displayScores = async () => {
  const data = await getScoreData();
  clearAllElement();
  data.forEach((item) => createScoreElement(item));
};

refreshBtn.addEventListener('click', displayScores);

addScoreForm.addEventListener('submit', (e) => {
  if (nameInput.value === '' || scoreInput.value === '') return e.preventDefault();
  addScore(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
  e.preventDefault();
});

displayScores();