
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

import img1 from '../images/image1.png'
import img2 from '../images/image2.png'
import img3 from '../images/image3.png'
import img4 from '../images/image4.png'
import img5 from '../images/image5.png'
import img6 from '../images/image6.png'
import img7 from '../images/image7.png'
import img8 from  '../images/image8.png'
import img9 from  '../images/image9.png'

 export const blocks =  [
    {
    id: 1,
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: `${img1}`,
  },
    {
     id: 2,
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: `${img2}`,
  },
    {
    id: 3,
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: `${img3}`,
  },
    {
    id: 4,  
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: `${img4}`,
  },
    {
    id: 5,  
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: `${img5}`,
  },
    {
    id: 6,  
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: `${img6}`,
  },
    {
    id: 7,  
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: `${img7}`,
  },
    {
    id: 8,  
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: `${img8}`,
  },
    {
    id: 9,  
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: `${img9}`,
  },
]