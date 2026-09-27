const quotes = [
  "\"I'm really anxious about going out with █████████. I don't know what to do to ███████████████████████████. Maybe I should just embrace it.\"",
  "\"I don't need to ███████████████████████████████████████████████████████████████.\"",
  "\"I really liked Trellick Tower, and I walked along the canal nearby. I'll be ready for tomorrow.\"",
  "\"Nothing is going to ██████████████████. And I say that without a trace of pessimism.\"",
  "\"I woke up feeling half like I want to stay here forever and half like I want to leave—even today, if possible.\"",
  "\"I feel a bit ██████████████████████████████████████████████████████.\"",
  "\"Yesterday I got coffee from the little café by the station, and it made ██████████████████████████████████████████████████████. I could live in England. Maybe in Essex—I don't know.\"",
  "\"The first day was ███████████████████████████. But when the plane descended below the clouds and I saw the fields and the trees, I felt peaceful and deeply moved. █████████.\"",
  "\"The feeling of freedom kept alternating with █████████████████████████████████████████████\"",
  "\"On the other hand, Wolf Alice were mesmerizing. I got emotional, I danced, I got angry, and I laughed when Ellie fell off the stage. Everything felt painfully intense.\"",
  "\"Today I █████████.\"",
  "\"I went to Hampstead Heath and Camden. I admired the beautiful street art along Regent's Canal, took in the view from Parliament Hill, and enjoyed the fish and chips at the place where I stopped to eat. And that was enough.\"",
  "\"...it was difficult to █████████ to someone with ██████████████████. I don't know how to ███████████████.\""
];

const tripImages = [
  "images/bonus1.webp",
  "images/bonus2.webp",
  "images/bonus3.webp",
  "images/bonus4.webp",
  "images/bonus5.webp"
];

function setRandomQuote() {
  const quoteElement = document.getElementById("quote-display");

  if (!quoteElement) {
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

function setRandomImage() {
  const imageElement = document.getElementById("random-image");

  if (!imageElement) {
    return;
  }

  const randomIndex = Math.floor(Math.random() * tripImages.length);
  imageElement.src = tripImages[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
  setRandomQuote();
  setRandomImage();
});