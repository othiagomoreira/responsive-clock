// ========Relógio  Analógico===========
const hours = document.getElementById('clock-hours'),
      minutes = document.getElementById('clock-minutes'),
      seconds = document.getElementById('clock-seconds');

const clock = () => {
    let date = new Date();
    
    let h = date.getHours() * 30,
        m = date.getMinutes() * 6,
        s = date.getSeconds() * 6;

    // adicionamos uma rotação aos elementos
    hours.style.transform = `rotateZ(${h + m / 12}deg)`;
    minutes.style.transform = `rotateZ(${m}deg)`;
    seconds.style.transform = `rotateZ(${s}deg)`;

}
setInterval(clock, 1000) //Ativa a função a cada 1s


// ==========Relogio digital e Data==========

//Atribui os elmentos html a uma variavel
const textHours = document.getElementById('text-hours'),
      textMinutes = document.getElementById('text-minutes'),
      textAmpm = document.getElementById('text-ampm'),
      textDay = document.getElementById('date-day'),
      textMonth = document.getElementById('date-month'),
      textYear = document.getElementById('date-year');


const showDigitalClock = () =>  {    
    //Pega o objeto Date(), que contem informações relacionadas ao tempo  
    let date = new Date();
    
    let h = date.getHours(),
        m = date.getMinutes(),
        ampm,
        day = date.getDate(),
        month = date.toLocaleString('us-en', {month: 'short'}), //Vem com o mês formato
        year = date.getFullYear();
 
        // Verificaçao do PM e AM
        if(h >= 12){
            ampm = 'PM'
        }else{
            ampm = 'AM'
        };
        
        //Verificação para colocar um 0 antes de horas e minutos
        if(h < 10 ) {h = `0${h}`};
        if(m < 10 ) {m = `0${m}`};

    
    //Exibi as informções das horas na tela
    textHours.innerHTML = `${h}:`;
    textMinutes.innerHTML = m;
    textAmpm.innerHTML = ampm;

    textDay.innerHTML = day;
    textMonth.innerHTML = month;
    textYear.innerHTML = year;  
        
}
setInterval(showDigitalClock, 1000);


/*==================== DARK/LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button'); //icone que alterna entre dark/light
const darkTheme = 'dark-theme' ;
const iconTheme = 'bxs-sun' ;

// Tópico selecionado anteriormente (se o usuário selecionou)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');


// Nós obtemos o tema atual que a interface possui validando a classe dark-theme
// O método contains() é usado para determinar se a coleção contém um determinado item ou não. Se ele contiver o item, ele retornará true, caso contrário, será false.
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun';

// valição se o usuário escolheu previamente um tópico
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme);
};

// Ativar / desativar o tema manualmente com o botão
themeButton.addEventListener('click', () => {
    // Adicionar ou remover o tema escuro / ícone
    document.body.classList.toggle(darkTheme); //togle(), se existir a class remove se não adiciona
    themeButton.classList.toggle(iconTheme); //togle(), se existir a class remove se não adiciona

    // Salvamos o tema e o ícone atual escolhido pelo usuário
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

   