import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  handleClick(e) {
    e.preventDefault();
    let container = document.getElementsByClassName("Custom");
    let firstLabel = document.createElement("label");
    let input = document.createElement("textarea");
    let number = document.createElement("input");
    let tries = document.createElement("label");
    let fails = document.createElement("input");
    let errors = document.createElement("label");
    firstLabel.innerHTML = "Tried Word/case";
    tries.innerHTML = "tries";
    errors.innerHTML = "fails";
    number.type = "number";
    fails.type = "number";

    input.name = `session[tries][]`;
    number.name = `session[tries][]`;
    fails.name = `session[tries][]`;
    container[0].appendChild(firstLabel);
    container[0].appendChild(input);
    container[0].appendChild(tries);
    container[0].appendChild(number);
    container[0].appendChild(errors);
    container[0].appendChild(fails);
  }

  connect() {
    this.element.textContent = "+";
  }
}
