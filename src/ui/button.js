export default function renderButton(text, style) {
  let button = document.createElement('button');
  button.append(text);
  button.classList.add("button");

  if (style) {
    button.classList.add("button--" + style);
  }

  return button;
}