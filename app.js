import country_list from "./countries.js";


const countries = country_list;
const myForm = document.createElement('form');
const title = document.createElement('legend');
title.innerText = 'New User Gateway to Happiness';
myForm.append(title)
myForm.classList.add('split-left');
const formList = document.createElement('ul');

myForm.append(formList);
document.body.append(myForm);

const nameLi = mkLabeledInputLi('name', 'text', 'Name:', true);
const emailLi = mkLabeledInputLi('email', 'email', 'E-mail:', true);
const countryLi = document.createElement('li');
const countryLbl = document.createElement('label');
countryLbl.innerText = 'Country:';
let countrySelect = document.createElement('select');
appendCountries(countrySelect, countries);
countryLi.append(countryLbl, countrySelect);


const zipcodeLi = mkLabeledInputLi('zipcode', 'number', 'Zip code:');
const pwLi = mkLabeledInputLi('pwLi', 'password', 'Password:', true);
const pwConfirmLi = mkLabeledInputLi('pwConfirmLi', 'password', 'Confirm PW:', true);
const submit = document.createElement('button');
submit.type = 'submit';
submit.innerText = 'Submit';

formList.append(
  nameLi, 
  emailLi, 
  countryLi, 
  zipcodeLi, 
  pwLi, 
  pwConfirmLi, 
  submit
);

pwLi.children[1].placeholder = "Enter a valid password...";
pwConfirmLi.children[1].placeholder = "Confirm password...";

submit.addEventListener('click', e => {
  e.preventDefault();
  let name = nameLi.children[1].value;
  let email = emailLi.children[1].value;
  let zip = zipcodeLi.children[1].value;
  let pw = pwLi.children[1].value;
  let pwConfirm = pwConfirmLi.children[1].value = "";
  console.log(emailLi.children[1].checkValidity())
  if (!name) {
    alert("Name is required");
  } else if (!email || !emailLi.children[1].checkValidity()) {
    alert("A valid Email is required");
  } else if   (!pw) {
    alert("You must choose a valid password!")
  } else {
    if (pw != pwConfirm) {
      alert("Password and Confirm PW must match!");
      pwLi.children[1].value = "";
      pwConfirmLi.children[1].value = "";
    }
  }
  


});


/* this function is probably not saving much time, but sometimes 
using JS to make html elements just feels really repetitive */ 
function mkLabeledInputLi (name, type = 'text', txt = '', req = false) {
  let listItem = document.createElement('li');

  let lbl = document.createElement('label');
  lbl.setAttribute('for', `${name}`);
  lbl.innerText = txt || name;

  let input = document.createElement('input');
  if (req) {
    input.required = true;
  }
  input.type = type;
  input.id = name;
  input.name = name;

  listItem.append(lbl, input);

  return listItem;
}

function appendCountries(countrySelectElement, countriesArr) {
  let chooseCountry = document.createElement('option');
  chooseCountry.innerText = '< Select Country >';
  countrySelectElement.append(chooseCountry);
  for(let i = 0; i < countriesArr.length; i++) {
    let opt = document.createElement('option');
    opt.innerText = `${countriesArr[i]}`;
    opt.id = `${countriesArr[i]}`;
    countrySelectElement.append(opt);
  }
}