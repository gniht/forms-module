const myForm = document.createElement('form');
myForm.classList.add('left-card')
const formList = document.createElement('ul');

myForm.append(formList);
document.body.append(myForm);

const nameLi = mkLabeledInputLi('name', 'text', 'Name:');
const emailLi = mkLabeledInputLi('email', 'email', 'E-mail:');
const countryLi = mkLabeledInputLi('country', 'text', 'Country:');
const zipcodeLi = mkLabeledInputLi('zipcode', 'number', 'Zip code:');
const pwLi = mkLabeledInputLi('pwLi', 'password', 'Password:');
const pwConfirmLi = mkLabeledInputLi('pwConfirmLi', 'password', 'Confirm PW:');
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




/* this function is probably not saving much time, but sometimes 
using JS to make html elements just feels really repetitive */ 
function mkLabeledInputLi (name, type = 'text', txt = '') {
  let listItem = document.createElement('li');

  let lbl = document.createElement('label');
  // lbl.setAttribute('for', `${name}`);
  lbl.innerText = txt || name;

  let input = document.createElement('input');
  input.type = type;
  input.id = name;
  input.name = name;

  listItem.append(lbl, input);

  return listItem;
}