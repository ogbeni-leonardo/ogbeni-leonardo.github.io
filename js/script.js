const byId = (id) => document.getElementById(id);
const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

function dropdownCreator({ title, percent, description }) {
  return `<li class="dropdown">
  <div class="dropdown__header">
    <p class="dropdown__title">${title}</p>
    <p class="dropdown__percent">${percent}%</p>
  </div>
  <div class="dropdown__progress">
    <div class="dropdown__base"></div>
    <div class="dropdown__value" style="width: ${percent}%;"></div>
  </div>
  <div class="dropdown__content"><p class="dropdown__content__info">${description}</p></div>
</li>`;
}

function projectBlockCreator(projectData, projectIndex) {
  const {
    title, link, description, color,
  } = projectData;

  return `<li class="project">
  <div class="project__header">
    <h1 class="project__title">${(projectIndex).toString().padStart(2, 0)}</h1>
    <a href="${link}" target="_blank" class="project__link" title="Abrir link em uma nova guia">
      <i class="project__link__icon fa-solid fa-up-right-from-square"></i>
    </a>
  </div>
  <div class="project__content" style="background-color: ${color}">
    <p class="project__name">${title}</p>
    <button type="button" class="show-the-description project__content__button" project-id="${projectIndex}"
      title="Detalhes do projeto">
      <i class="fa-solid fa-circle-info"></i>
    </button>
  </div>
  <div class="project__description" project-description-id="${projectIndex}">
    <div class="project__header">
      <h1 class="project__title">Informações</h1>
      <button type="button" class="hide-the-description project__description__button" project-id="${projectIndex}"
        title="Fechar">
        <i class="project__description__button__icon fa-solid fa-xmark"></i>
      </button>
    </div>
    <div class="project__info">${description}</div>
  </div>
</li>`;
}

const navigationButtonChanger = (index) => {
  const toActive = qs(`[page-index="${index}"]`);
  if (toActive.className !== 'navigation__button--active') {
    qs('.navigation__button--active').classList.remove('navigation__button--active');
    toActive.classList.add('navigation__button--active');
  }
};

const pageChanger = (index) => {
  const activePage = qs('.main-container--active');
  const toActive = qs(`[page-name="${index}"]`);
  if (activePage !== toActive) {
    navigationButtonChanger(index);
    activePage.classList.remove('main-container--active');
    toActive.classList.add('main-container--active');
  }
};

[...qsa('.navigation__button'), ...qsa('.more-info')].forEach((element) => {
  element.addEventListener('click', () => pageChanger(element.getAttribute('page-index')));
});

const personalAttributesContainer = byId('welcome__content__attributes__list');
personalAttributes.forEach((attribute) => {
  personalAttributesContainer.innerHTML += dropdownCreator(attribute);
});

qsa('.project__selector').forEach((button) => {
  button.addEventListener('click', () => {
    const getCategoryOfSelector = button.getAttribute('project-page-selector');
    const getPageOfCategory = qs(`[project-page-name="${getCategoryOfSelector}"]`);
    if (getPageOfCategory.className !== 'project__page--active') {
      qs('.project__selector--active').classList.remove('project__selector--active');
      qs('.project__page--active').removeAttribute('class');
      button.classList.add('project__selector--active');
      getPageOfCategory.className = 'project__page--active';
    }
  });
});

projects.forEach((project, index) => {
  const projectCategoryPage = qs(`[project-page-name="${project.category}"]`);
  projectCategoryPage.innerHTML += projectBlockCreator(project, index + 1);
});

const showOrHideDescription = (element, action = 'hide') => {
  const projectId = element.getAttribute('project-id');
  const projectDescription = qs(`[project-description-id="${projectId}"]`);
  if (action === 'show') return projectDescription.classList.add('show');
  return projectDescription.classList.remove('show');
};

qsa('.show-the-description').forEach((element) => {
  element.addEventListener('click', () => showOrHideDescription(element, 'show'));
});

qsa('.hide-the-description').forEach((element) => {
  element.addEventListener('click', () => showOrHideDescription(element));
});

byId('text-area').onkeyup = (event) => {
  const { length } = event.target.value;
  byId('char-counter').innerText = `${length}/1500`;
};

byId('contact__submit').onclick = (event) => {
  event.preventDefault();
  qs('.alert-message').classList.add('alert-message--active');
  setTimeout(() => qs('.alert-message--active').classList.remove('alert-message--active'), 5000);
};
