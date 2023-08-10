const elements = {
  BooksInfo: document.querySelector('.books-list'),
  modalMainBtn: document.querySelector('.js-modal-btn'),
  modalBookCard: document.querySelector('.js-modal-book'),
  modalBtnClose: document.querySelector('.js-modal-close'),
  modal: document.querySelector('.js-modal'),
  body: document.body,
  categoryList: document.querySelector('.category-list'),
};

export { elements };

import img1 from '../images/image1.png';
import img1x from '../images/image1_2x.png';

import img2 from '../images/image2.png';
import img2x from '../images/image2_2x.png';

import img3 from '../images/image3.png';
import img3x from '../images/image3_2x.png';

import img4 from '../images/image4.png';
import img4x from '../images/image4_2x.png';

import img5 from '../images/image5.png';
import img5x from '../images/image5_2x.png';

import img6 from '../images/image6.png';
import img6x from '../images/image6_2x.png';

import img7 from '../images/image7.png';
import img7x from '../images/image7_2x.png';

import img8 from '../images/image8.png';
import img8x from '../images/image8_2x.png';

import img9 from '../images/image9.png';
import img9x from '../images/image9_2x.png';

export let blocks = [
  {
    id: 1,
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: `${img1}`,
    imgr: `${img1} 1x, ${img1x} 2x`,
  },
  {
    id: 2,
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: `${img2}`,
    imgr: `${img2} 1x, ${img2x} 2x`,
  },
  {
    id: 3,
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: `${img3}`,
    imgr: `${img3} 1x, ${img3x} 2x`,
  },
  {
    id: 4,
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: `${img4}`,
    imgr: `${img4} 1x, ${img4x} 2x`,
  },
  {
    id: 5,
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: `${img5}`,
    imgr: `${img5} 1x, ${img5x} 2x`,
  },
  {
    id: 6,
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: `${img6}`,
    imgr: `${img6} 1x, ${img6x} 2x`,
  },
  {
    id: 7,
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: `${img7}`,
    imgr: `${img7} 1x, ${img7x} 2x`,
  },
  {
    id: 8,
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: `${img8}`,
    imgr: `${img8} 1x, ${img8x} 2x`,
  },
  {
    id: 9,
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: `${img9}`,
    imgr: `${img9} 1x, ${img9x} 2x`,
  },
];
