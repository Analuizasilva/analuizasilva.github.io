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

h2About.innerText = `I'm Ana Luiza Silva, Brazilian and from the state of Minas Gerais. I am ${idade(
  24,
  07,
  1996
)} years old and currently live in Lisbon. Graduated in Industrial Automation Technician from the Federal Institute of Espirito Santo, and without professional experience in the area, I decided to start my professional career again and dedicate myself to a personal will for the area of ​​programming. I am currently in training in a work context through the C # programming course. `;
