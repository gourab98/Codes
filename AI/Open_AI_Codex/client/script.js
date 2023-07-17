import bot from './assets/bot.svg';
import user from './assets/user.svg';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat-container');

let loadInterval;

function loader(element){
  elelment.textContent = '';
  loadInterval =  setInterval(()=>{
    element.textContent += '.';
    if(element.textContent === '....'){
      element.textContent = '';
    }
  },300)
}

function typeText(elelment,text){
  
}