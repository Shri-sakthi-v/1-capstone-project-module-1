// Mobile Popup
const bgContainer = document.querySelector('.bgContainer');
const menu = document.querySelector('.menu');

function popup() {
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popupContainer');
  popupContainer.style.display = 'block';
  bgContainer.append(popupContainer);

  const modalBox = document.createElement('div');
  modalBox.classList.add('modalBox');
  popupContainer.append(modalBox);

  // Close Modal
  const closeBtn = document.createElement('img');
  closeBtn.classList.add('closeBtn');
  closeBtn.setAttribute('src', './assets/close.svg');
  modalBox.append(closeBtn);

  closeBtn.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });

  // Create links
  const ulLink = document.createElement('ul');
  ulLink.classList.add('ulLink');

  const liLink1 = document.createElement('li');
  const aLink1 = document.createElement('a');
  liLink1.classList.add('liLinks');
  liLink1.classList.add('first');
  aLink1.setAttribute('href', './index.html');
  aLink1.textContent = 'Home';
  aLink1.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
  liLink1.append(aLink1);
  const liLink2 = document.createElement('li');
  const aLink2 = document.createElement('a');
  liLink2.classList.add('liLinks');
  aLink2.textContent = 'About';
  aLink2.addEventListener('click', () => {
    aLink2.setAttribute('href', './about.html');
    popupContainer.style.display = 'none';
  });
  liLink2.append(aLink2);
  const liLink3 = document.createElement('li');
  const aLink3 = document.createElement('a');
  liLink3.classList.add('liLinks');
  aLink3.setAttribute('href', './index.html#program');
  aLink3.textContent = 'Program';
  aLink3.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
  liLink3.append(aLink3);
  const liLink4 = document.createElement('li');
  const aLink4 = document.createElement('a');
  liLink4.classList.add('liLinks');
  aLink4.setAttribute('href', './index.html#speakers');
  aLink4.textContent = 'Speakers';
  aLink4.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
  liLink4.append(aLink4);
  const liLink5 = document.createElement('li');
  const aLink5 = document.createElement('a');
  liLink5.classList.add('liLinks');
  aLink5.setAttribute('href', './about.html#partner');
  aLink5.textContent = 'Partner';
  aLink5.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
  liLink5.append(aLink5);
  const liLink6 = document.createElement('li');
  const aLink6 = document.createElement('a');
  liLink6.classList.add('liLinks');
  aLink6.setAttribute('href', './about.html#pastEvent');
  aLink6.textContent = 'Event';
  aLink6.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
  liLink6.append(aLink6);
  ulLink.append(liLink1, liLink2, liLink3, liLink4, liLink5, liLink6);
  modalBox.append(ulLink);
}

menu.addEventListener('click', popup);

// Create speaker section
const speakers = document.querySelector('.speakers');

const speakerObj = {
  indicators: ['./assets/indicator.svg', './assets/indicator02.svg'],
  profileImg: ['./assets/yokai.png', './assets/sohyeong.png', './assets/lila.png', './assets/kilnam.png', './assets/julia.png', './assets/ryan.png'],
  name: ['Yokai Benkler', 'SohYeong Noh', 'Lila Tretikov', 'Kilnam Chon', 'Julia Leda', 'Ryan Merkley'],
  title: ['Berkman Professor of enterpreneurial at Harvard Law school', 'Director of Art Centre Nabi and a board member of CC Korea', 'Executive Director of the Wikimedia Foundation', '', 'President of Young Pirates of Europe', 'CEO of Creative Commons, ex COO of the Mozilla Foundation'],
  description: ['Benkler has completed his Bachelor\'s degree in Civil Engineering in University of the Philippines - Diliman. He has started his coding journey end of January 2022 and was accepted as a full-time Microverse student mid of March of that year.', 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.', 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.', 'Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society\'s (ISOC) Internet Hall of Fame.', 'European ingetration, political democracy and participation of youth through online as her major condem, Reda\'s report outlining potential changes to EU copyright law was approved by the Parliament in July.', 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.'],
};

window.onload = function getData() {
  const divOne = document.createElement('div');
  const h2One = document.createElement('h2');
  h2One.textContent = 'Guest Speakers';
  const imgOne = document.createElement('img');
  imgOne.classList.add('indicator');
  imgOne.setAttribute('src', speakerObj.indicators[0]);
  divOne.append(h2One, imgOne);
  speakers.append(divOne);

  const divTwo = document.createElement('div');
  divTwo.classList.add('speakersContainer');

  const divThree = [];
  const divFour = [];
  const imgTwo = [];
  const divFive = [];
  const h2Two = [];
  const h3One = [];
  const imgThree = [];
  const pOne = [];

  function dynamic(index, num) {
    for (let i = index; i < num; i += 1) {
      divThree[i] = document.createElement('div');
      divThree[i].classList.add('speakerItem');
      divFour[i] = document.createElement('div');
      imgTwo[i] = document.createElement('img');
      imgTwo[i].setAttribute('src', speakerObj.profileImg[i]);
      divFour[i].append(imgTwo[i]);
      divThree[i].append(divFour[i]);
      divFive[i] = document.createElement('div');
      divFive[i].classList.add('profile');
      h2Two[i] = document.createElement('h2');
      h2Two[i].textContent = speakerObj.name[i];
      divFive[i].append(h2Two[i]);
      h3One[i] = document.createElement('h3');
      h3One[i].textContent = speakerObj.title[i];
      divFive[i].append(h3One[i]);
      imgThree[i] = document.createElement('img');
      imgThree[i].setAttribute('src', speakerObj.indicators[1]);
      divFive[i].append(imgThree[i]);
      pOne[i] = document.createElement('p');
      pOne[i].textContent = speakerObj.description[i];
      divFive[i].append(pOne[i]);
      divThree[i].append(divFive[i]);
      divTwo.append(divThree[i]);
    }
    speakers.append(divOne, divTwo);
  }

  if (window.innerWidth < 768) {
    dynamic(0, 2);
  } else {
    dynamic(0, 6);
  }

  if (window.innerWidth < 768) {
    const more = document.createElement('div');
    const moreBtn = document.createElement('button');
    moreBtn.setAttribute('type', 'button');
    moreBtn.classList.add('moreBtn');
    moreBtn.textContent = 'More';
    const moreImg = document.createElement('img');
    moreImg.setAttribute('src', './assets/union.svg');
    moreImg.classList.add('moreImg');
    moreBtn.append(moreImg);
    more.append(moreBtn);
    speakers.append(more);

    more.addEventListener('click', () => {
      if (moreBtn.textContent === 'More') {
        dynamic(2, 6);
        moreBtn.textContent = 'Less';
        moreImg.setAttribute('src', './assets/union.svg');
        moreImg.classList.add('moreImg');
        moreImg.classList.add('flipImg');
        moreBtn.append(moreImg);
        more.append(moreBtn);
        speakers.append(more);
      } else {
        divThree[2].remove();
        divThree[3].remove();
        divThree[4].remove();
        divThree[5].remove();
        moreBtn.textContent = 'More';
        moreImg.setAttribute('src', './assets/union.svg');
        moreImg.classList.add('moreImg');
        moreImg.classList.remove('flipImg');
        moreBtn.append(moreImg);
        more.append(moreBtn);
        speakers.append(more);
      }
    });
  }
};

// Reload during screen resize
window.onresize = function checkWindow() {
  window.location.reload();
};