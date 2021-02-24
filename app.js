let myForm = document.createElement('form');
let formList = document.createElement('ul');

myForm.append(formList);
document.body.append(myForm);

let nameLi = mkLabeledInputLi('name', 'text', 'Name:');
let emailLi = mkLabeledInputLi('email', 'email', 'E-mail:');
let countryLi = mkLabeledInputLi('country', 'text', 'Country:');
let zipcodeLi = mkLabeledInputLi('zipcode', 'number', 'Zip code:');
let pwLi = mkLabeledInputLi('pwLi', 'password', 'Password:');
let pwConfirmLi = mkLabeledInputLi('pwConfirmLi', 'password', 'Confirm PW:');
let submit = document.createElement('button');
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