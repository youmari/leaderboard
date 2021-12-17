const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qgXH7fyAGYtYusDwo7GG/scores';

const getScoreData = async () => {
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => data.result);
  return response;
};

const addScore = async (user, score) => {
  const pTagResponse = document.querySelector('.response');
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

export { getScoreData, addScore };