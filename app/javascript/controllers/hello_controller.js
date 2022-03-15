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
    let propmtingType = document.createElement("select");
    let prompLabel = document.createElement("label");
    let optionFirst = document.createElement("option");
    let optionSecond = document.createElement("option");
    optionFirst.text = "Yes";
    optionSecond.text = "No";
    propmtingType.add(optionFirst);
    propmtingType.add(optionSecond);
    firstLabel.innerHTML = "Tried Word/case";
    tries.innerHTML = "tries";
    errors.innerHTML = "fails";
    prompLabel.innerHTML = "Did patient get help?";
    number.type = "number";
    fails.type = "number";

    input.name = `session[tries][]`;
    number.name = `session[tries][]`;
    fails.name = `session[tries][]`;
    propmtingType.name = "session[tries][]";

    container[0].appendChild(firstLabel);
    container[0].appendChild(input);
    container[0].appendChild(tries);
    container[0].appendChild(number);
    container[0].appendChild(errors);
    container[0].appendChild(fails);
    container[0].appendChild(prompLabel);
    container[0].appendChild(propmtingType);
  }

  connect() {
    this.element.textContent = "Add new case +";
  }
}
