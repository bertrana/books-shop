import renderButton from "./button";

export default function renderCard(cardData) {
  let elem = document.createElement('li');
  let card = document.createElement('figure');
  card.classList.add('card');
  
  let cardImage = document.createElement('img');
  cardImage.classList().add("card__image");
  cardImage.src = ``;

  return elem.append(card);
}