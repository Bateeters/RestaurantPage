const content = document.querySelector('#content');

const jumbo = document.createElement("section");
jumbo.id = 'jumbo';

content.appendChild(jumbo);

const contentStart = document.createElement("div");
contentStart.id = 'contentStart';
content.appendChild(contentStart);

export { content, jumbo };

const sectionHeading = document.createElement("div");
sectionHeading.classList.add('sectionHeading');
contentStart.appendChild(sectionHeading);

const headingTxt = document.createElement("h2");
headingTxt.textContent = ('Flavors of the Month');

const headingLine = document.createElement('div');
headingLine.classList.add('line');

sectionHeading.appendChild(headingTxt);
sectionHeading.appendChild(headingLine);

export { contentStart };