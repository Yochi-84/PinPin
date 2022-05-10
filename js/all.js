window.onload = function () {
  document.querySelector('#hamburger-menu').addEventListener('click', () => {
    document.querySelector('#hamburger-menu-list').classList.toggle('is-show');
    document.querySelector('#mask').classList.toggle('d-none');
    document.body.style.overflow !== 'hidden' ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  });

  document.querySelector('#hamburger-menu-list').addEventListener('click', item => item.stopPropagation());

  const accordion = [...document.getElementsByClassName('l-accordion-title')];
  accordion.forEach(item => {
    item.addEventListener('click', (e) => {
      document.querySelector(`#${e.target.id}`).classList.toggle('is-open');
      document.querySelector(`#${e.target.id}-content`).classList.toggle('is-open');
    })
  })
};

function tabsToggle(e) {
  e.preventDefault();
  document.querySelector(".is-active").classList.remove("is-active");
  e.target.classList.add("is-active");
}

function closeHamburgerMenu() {
  document.querySelector('#hamburger-menu-list').classList.remove('is-show');
  document.querySelector('#mask').classList.add('d-none');
  document.body.style.overflow = 'auto'
}

function boxToggle(boxName) {
  document.getElementById(`${boxName}-list`).classList.toggle('d-none');
}

function selectionToggle(e, boxName) {
  e.stopPropagation();
  document.getElementById(`${boxName}-list`).classList.toggle('d-none');
  document.getElementById(`${boxName}-text`).textContent = e.target.textContent;
}

let current_tabs = 'introduce';
function tabsToggle(id) {
  if (id !== current_tabs){
    document.getElementById(`${current_tabs}`).classList.remove('is-active');
    document.getElementById(`${current_tabs}-body`).classList.add('d-none');
    document.getElementById(`${id}-body`).classList.remove('d-none');
    document.getElementById(`${id}`).classList.toggle('is-active');
    current_tabs = id;
  }
}

function showLogin(){
  document.getElementById('login-popup').classList.add('is-show');
  document.querySelector('#mask').classList.remove('d-none');
  document.body.style.overflow !== 'hidden' ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
}

function hideLogin(){
  document.getElementById('login-popup').classList.remove('is-show');
  document.querySelector('#mask').classList.toggle('d-none');
  document.body.style.overflow = 'auto'
}

function hamburger_showLogin(){
  document.querySelector('#hamburger-menu-list').classList.toggle('is-show');
  showLogin();
}



document.addEventListener("click", event => {
  const plan = document.querySelector('#plan');
  const plan_list = document.querySelector('#plan-list');
  const pay = document.querySelector('#pay');
  const pay_list = document.querySelector('#pay-list');
  const target = event.target;
  if (plan == target || plan_list == target || plan.contains(target)) {
  } else{
    plan_list.classList.add('d-none');
  }

  if (pay == target || pay_list == target || pay.contains(target)) {
  } else {
    pay_list.classList.add('d-none');
  }
});
