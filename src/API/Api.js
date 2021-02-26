const API_KEY = "77K8d3fkccRYUdwtl5FlmdYTciq2";

// get all matches

export const getMatches = () => {
  const API_URL = `https://cricapi.com/api/matches/?apikey=${API_KEY}`;
  return fetch(API_URL)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

// load match details

export const getMatchDetail = (id) => {
  const API_URL = `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;
  return fetch(API_URL)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
