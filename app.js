//import country_list from "./countries";
let country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","USA","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

const countries = country_list;
console.log(countries)
const myForm = document.createElement('form');
myForm.classList.add('left-card')
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

submit.addEventListener('click', e => {
  e.preventDefault();
  let name = nameLi.children[1].value;
  let zip = zipcodeLi.children[1].value;
  let pw = pwLi.children[1].value;
  let pwConfirm = pwConfirmLi.children[1].value;
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
  for(let i = 0; i < countriesArr.length; i++) {
    let opt = document.createElement('option');
    opt.innerText = `${countriesArr[i]}`;
    opt.id = `${countriesArr[i]}`;
    countrySelectElement.append(opt);
  }
}