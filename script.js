const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Ex01. Crie um calendário dinamicamente
for (let day of decemberDaysList) {
  let elementLi = document.createElement('li');
  elementLi.innerHTML = day;
  elementLi.classList.add('day');
  const days = document.querySelector('#days');
  days.appendChild(elementLi);
  if (day === 24 || day === 25 || day === 31) {
    elementLi.classList.add('holiday')
  }
  if (day === 4 || day === 11 || day === 18 || day === 25) {
    elementLi.classList.add('friday')
  }
};

// Ex02. Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday";
const changeColorHoliday = () => {
  // TESTEI COM FOR NORMAL \\
  // for(let index = 0; index < getClassHoliday.length; index += 1){
  //   if (getClassHoliday[index].style.backgroundColor === 'green'){
  //     getClassHoliday[index].style.backgroundColor = 'rgb(238,238,238)'
  //     getClassHoliday[index].style.color = '#777';
  //   } else {
  //     getClassHoliday[index].style.backgroundColor = 'green';
  //     getClassHoliday[index].style.color = 'white'; //Adicionei a cor white para os números quando for clicado para conseguimos destacar melhor
  //   }
  // }
  // MAS ULTILIZEI FOR OF ( OS DOIS DERAM CERTO C: ) \\
  for (let holiday of getClassHoliday) {
    if (holiday.style.backgroundColor === 'green') {
      holiday.style.backgroundColor = 'rgb(238,238,238)'
      holiday.style.color = '#777';
    } else {
      holiday.style.backgroundColor = 'green';
      holiday.style.color = 'white'; //Adicionei a cor white para os números quando for clicado para conseguimos destacar melhor
    }
  }
};
const getClassHoliday = document.querySelectorAll('.holiday');
const getBtnHoliday = document.querySelector('#btn-holiday');
getBtnHoliday.addEventListener('click', changeColorHoliday)

// Ex03. Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira
const changeTextFriday = () => {
  for(let index = 0; index < getClassFriday.length; index += 1) {
    if (getClassFriday[index].innerHTML !== 'Sextou!'){
      getClassFriday[index].innerHTML = 'Sextou!'
    } else {
      getClassFriday[index].innerHTML = getClassFriday[index].nextElementSibling.innerHTML - 1
      console.log(getClassFriday[index].nextElementSibling.innerHTML);
    }
  }
};
const getClassFriday = document.querySelectorAll('.friday');
const getBtnFriday = document.querySelector('#btn-friday');
getBtnFriday.addEventListener('click', changeTextFriday);

// Ex04. 

// Adiciono uma function para aumentar o tamanho dele qndo passo o mouse
const zoomDay = (event) => {
  event.target.style.fontSize = '30px';
};
// Adiciono uma function caso tire o mouse esse elemento volta ao tamanho normal
const outZoomDay = (event) => {
  event.target.style.fontSize = '20px';
}
const getClassDays = document.querySelector('#days');


getClassDays.addEventListener('mouseover', zoomDay)
getClassDays.addEventListener('mouseout', outZoomDay)

// Ex05.

//Capturar a div task
const getDivTask = document.querySelectorAll('.task');
//Crio uma função de trocar de classList 
for (let index = 0; index < getDivTask.length; index += 1) {
  getDivTask[index].addEventListener('click', (event) => {
    let className = event.target.className;
    if (className.includes('selected')) {
      event.target.classList.remove('selected');
      console.log('Ta passando no segundo if');
    } else if(document.querySelector('.selected') === null) {
      event.target.classList.add('selected');
      console.log(className);
    } else {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected')
    }
  })
};


// Ex06.

const getDays = document.querySelectorAll('#days .day');

const changeColorDay = (event) => {
  const colorPrimary = 'rgb(119,119,119)';
  let myEventStyle = event.target.style;
  let myTaskStyle = document.querySelector('.selected').style;

    if (myEventStyle.color !== myTaskStyle.backgroundColor) {
      myEventStyle.color = myTaskStyle.backgroundColor;
    } else {
      myEventStyle.color = colorPrimary
    }
};
 
for (let day of getDays) {
  day.addEventListener('click', changeColorDay)
};

// Ex07.

//Capturo a caixa de texto input (id = #task-input)
const taskInput = document.getElementById('task-input');
//Capturo o botão (id = #btn-add)
const btnAdd = document.getElementById('btn-add');
//Capturo a lista (id = #task-list)
const taskList = document.getElementById('task-list');


//Inicio uma função para adicionar task na lista
const addTaskInList = () => {
  let valueInput = taskInput.value;
  if (valueInput === '') {
    alert('Erro 404 - Nenhum valor digitado na caixa')
  }
  let taskLi = document.createElement('li');
  taskLi.innerText = valueInput;
  console.log(taskLi)
  taskList.appendChild(taskLi);
  taskInput.value = '';
}

//Inicio uma função para o valor digitado em input adicionar valor na ul ao clicar
btnAdd.addEventListener('click', addTaskInList)
taskInput.addEventListener('keydown', (event) => {
  let key = event.key
  if (key === 'Enter') {
    addTaskInList();
  }
})



