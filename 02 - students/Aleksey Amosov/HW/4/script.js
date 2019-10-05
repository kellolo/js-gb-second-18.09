// Урок 4. Регулярные выражения. задание 1 и 2
const str = "'There are many variations' of passages of 'Lorem Ipsum available', but the majority have suffered alteration in some form, 'by' injected humour, or randomised words which don't look even slightly 'believable'";

const regexp = /\B'\b|\b'\B/gi;
const strNew = str.replace(regexp,'"');
alert(`Оригинал:\n${str}\nПосле обработки:\n${strNew}`);

// Урок 4. Регулярные выражения. задание 3
function validName(input,regexp) {
  let valid = regexp.test(document.getElementById(input).value);
  let output='';
  let ev = document.querySelector(`.${input}`);
  if (valid) {
    output = 'Поле введено верно!';
    ev.classList.remove('has-danger');
    ev.classList.add('has-success');
  }else {
    output = 'Поле введено неправильно!';
    ev.classList.remove('has-success');
    ev.classList.add('has-danger');
  }
  document.querySelector(`.${input} .form-control-feedback`).innerHTML = output;
  return valid;
}

const btn = document.querySelector("button");
btn.addEventListener('click',() => {
  validName('inputName',/^([а-яa-z\s]{1,})$/gi);
  validName('iTelefon',/^\+7\((?=\d)\d{3}\)(?=\d)\d{3}-\d{4}$/gi);
  validName('iEmail',/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/gi);
  //validName('iText',/^{1,}$/gi);
}); 
