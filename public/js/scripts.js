const idade = (day, month, year) => {
  const today = new Date();
  debugger;
  console.log(today.getMonth());
  console.log(today.getUTCDay());
  if (today.getMonth() > month) {
    return today.getFullYear() - year;
  } else {
    if (today.getDay() >= day && today.getMonth() >= month)
      return today.getFullYear() - year;
    else return today.getFullYear() - year - 1;
  }
};

const h2About = document.getElementById("h2-about");

h2About.innerText = `Sou Ana Luiza Silva, brasileira e natural do estado de Minas Gerais. Tenho ${idade(
  24,
  07,
  1996
)} anos, e atualmente vivo em Lisboa. Formada em Tecnico em automação industrial pelo instituto Federal do Espirito Santo, e sem experiencia profissional na area, decidi recomeçar minha carreira profissional e me dedicar a uma vontade pessoal pela area da programação. Atualmente enconto-me em formação em contexto de trabalho pelo curso recodme de programação em C#. `;
