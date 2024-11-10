function toggleAccordion(id) {
    document.querySelector(`#${id}`)
        .classList.toggle('accordion-active')
}

const acceptButton = document.querySelector('.accept-button');
const rejectButton = document.querySelector('.reject-button');
const cookiesSection = document.querySelector('.cookies');


function hideCookiesSection() {
  cookiesSection.style.display = 'none';
}


acceptButton.addEventListener('click', hideCookiesSection);
rejectButton.addEventListener('click', hideCookiesSection);

if (localStorage.getItem('cookiesAccepted') === 'true') {
    cookiesSection.style.display = 'none';
  }
  
  acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    hideCookiesSection();
  });
  
  rejectButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    hideCookiesSection();
  });
  