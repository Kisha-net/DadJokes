document.addEventListener("DOMContentLoaded", function () {
  const jokeQuestion = document.getElementById("joke");
  const nextButton = document.getElementById("next-button");

  let jokes = [];
  let currentJoke = {};

  const apiKey = "J+R2CcDqHeNMPvcFm3uFog==8sHmaMpI5t95SQyR";
  const fetchData = async () => {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/dadjokes?limit=10",
      {
        headers: {
          "X-API-Key": apiKey, // Include your API key in the header
        },
      }
    );
    const data = await response.json();
    jokes = data;
    getJoke();
    console.log(data);
  };
  const getJoke = () => {
    const index = Math.floor(Math.random() * jokes.length);
    currentJoke = jokes[index];
    //   console.log(currentJoke);
    jokeQuestion.textContent = currentJoke.joke;
  };

  nextButton.addEventListener("click", getJoke);
  fetchData();
});
