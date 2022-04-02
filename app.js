const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
    // button click active class
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections Active
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            secBtns.forEach(btn => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach(section => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })

    //Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

function submitBtn() {
    alert("Submitting information is not supported at this moment\n\nPlease use the information in left/top section to contact Archit\n\nOR\n\nDrop an Email/Text/Whatsapp to Archit(Recommended)");
}

pageTransitions();