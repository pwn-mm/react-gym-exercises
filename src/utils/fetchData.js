export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();

  return data;
};
