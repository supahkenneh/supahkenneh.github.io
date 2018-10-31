const projects = [
  {
    case: 'gardenguru',
    name: 'GardenGuru',
    description: `Gardening assistant and online farmer's market in one. Serves as a platform for users to keep track of plants in their garden and sell their produce locally. Click on the name to visit the website.`,
    link: 'https://gardenguru.farm',
    github: 'https://github.com/supahkenneh/gardenguru',
    tech: ['Angular', 'Express', 'Node', 'PostgreSQL'],
    image: './assets/gardenguru.gif'
  },
  {
    case: 'envision',
    name: 'Envision Gallery',
    description: `Web application where users can upload and share their own photos with the community. Users can interact with others through commenting on each others photographs. Click on the name to visit the website.`,
    link: 'https://envision-gallery.club',
    github: 'https://github.com/supahkenneh/envision-gallery',
    tech: ['React', 'Redux', 'Node', 'Express', 'PostgreSQL'],
    image: './assets/envision.gif'
  },
  {
    case: 'gimmegimme',
    name: 'Gimme Gimme',
    description: 'Node Knockout 2018 Hackathon submission. Players create and join game rooms. Game displays a prompt where users then submit a photo matching the prompt for game points. Click on name to visit the website.',
    link: 'https://gimmemoar.herokuapp.com',
    github: 'https://github.com/supahkenneh/gimme-gimme',
    tech: ['React', 'Socket.io', 'IBM Watson', 'Node', 'Express'],
    image: './assets/gimme.png'
  },
  {
    case: 'kanban',
    name: 'Kanban',
    description: 'Task manager where users can create, update, and delete their tasks.',
    github: 'https://github.com/supahkenneh/react-kanban',
    tech: ['React', 'Redux', 'Node', 'Express', 'PostgreSQL'],
    image: './assets/kanban.png'
  },
  {
    case: 'rolodex',
    name: 'Rolodex',
    description: 'Contact management application where useres are able to keep track of their contacts including their numbers, addresses, websites. Users are able to search through their contacts with search feature',
    github: 'https://github.com/supahkenneh/ng-rolodex',
    tech: ['Angular', 'Node', 'Express', 'PostgreSQL'],
    image: './assets/rolodex.gif'
  },
  {
    case: 'pixelpainter',
    name: 'Pixel Painter',
    description: 'Early project where the user can create pixel art. Click on the name to visit the website.',
    github: 'https://github.com/supahkenneh/pixelpainter',
    tech: ['Javascript', 'HTML', 'CSS'],
    image: './assets/pixelpainter.png'
  }
]

const projectsArr = document.getElementsByClassName('projects');

for (let i = 0; i < projectsArr.length; i++) {
  projectsArr[i].addEventListener('click', () => { changeFeature() });
}

changeFeature = () => {
  const eventTarget = this.event.target.id;
  const project = findProject(eventTarget);
  // Change project name
  const projectName = document.getElementsByClassName('project-name')[0];
  projectName.innerHTML = project.name;
  // Change project link
  project.link ? projectName.href = project.link : projectName.href = project.github;
  // Change project desc
  const projectDesc = document.getElementsByClassName('project-desc')[0];
  projectDesc.innerHTML = project.description;
  // Change project tech
  let techList = document.getElementsByClassName('tech-list')[0];
  techList.innerHTML = null;
  techList = generateListElem(project.tech);
  // Change github link
  const projectGithub = document.getElementsByClassName('github-link')[0];
  projectGithub.href = project.github;
  // Change image
  const projectImage = document.getElementsByClassName('project-image')[0];
  projectImage.src = project.image;
}

function findProject(name) {
  return projects.filter(project => project.case === name)[0]
}

function generateListElem(techs) {
  const techList = document.getElementsByClassName('tech-list')[0];
  for (let i = 0; i < techs.length; i++) {
    const listElem = document.createElement('li');
    listElem.className = 'tech';
    listElem.innerHTML = techs[i];
    techList.appendChild(listElem);
  }
  return techList;
}
