$.getJSON('portfolioContent.json', data => {
  let portfolioContent = data.portfolios;
  for (let i = 0; i < portfolioContent.length; i++) {
    let portfolio = portfolioContent[i];
    let tmpl = document.getElementById('portfolio-template').content.cloneNode(true);
    let target = document.getElementById(portfolio.elementId);
    tmpl.querySelector('.portfolio-name').innerText = portfolio.name;
    tmpl.querySelector('.portfolio-role').innerText = portfolio.role;
    tmpl.querySelector('.portfolio-about').innerText = portfolio.about;
    target.appendChild(tmpl);
  }
});