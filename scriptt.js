const drop_btn = document.getElementById('dropdown');
const content_btn = document.getElementById('dropdown-content');
const abt_btn = document.getElementById('about');
const lore_btn = document.getElementById('lore');
const pilot_btn = document.getElementById('pilot');
const fac_btn = document.getElementById('factions');
const in_btn = document.getElementById('input');
const para_in = document.getElementById('paragraph');
const mage = document.getElementById('inn')


drop_btn.addEventListener('click', display);
function display(e) {
    content_btn.style.display = 'block';
    document.getElementById('ham').style.color = 'purple';
    document.getElementById('x').innerHTML = document.getElementById('span').innerHTML;
    
    e.stopImmediatePropagation();
    this.removeEventListener('click', display)
    drop_btn.onclick = display0;
}

function display0(e) {
    content_btn.style.display = 'none';
    in_btn.style.display = 'none';
    document.getElementById('ham').style.color = '';
    document.getElementById('x').innerHTML = document.getElementById('span1').innerHTML;

    e.stopImmediatePropagation();
    this.removeEventListener('click', display)
    drop_btn.onclick = display;
}

function bool(params) {
   abt_btn.onclick = display1;
   lore_btn.onclick = display1;
   pilot_btn.onclick = display1;
   fac_btn.onclick = display1;
}
bool();

function display1(params) {
    in_btn.style.display = 'grid';
}


lore_btn.addEventListener('click', () => {
    abt_btn.style.color = '';
    lore_btn.style.color = 'red';
    pilot_btn.style.color = '';
    fac_btn.style.color = '';

    mage.style.display = 'block';
    mage.src = "/Roadmap.png"
    para_in.style.display = 'none'
})

pilot_btn.addEventListener('click', () => {
    abt_btn.style.color = '';
    lore_btn.style.color = '';
    pilot_btn.style.color = 'red';
    fac_btn.style.color = '';

    mage.style.display = 'block';
    mage.src = "/team.png"
    para_in.style.display = 'none'
})

fac_btn.addEventListener('click', () => {
    abt_btn.style.color = '';
    lore_btn.style.color = '';
    pilot_btn.style.color = '';
    fac_btn.style.color = 'red';

    mage.src = "/comms.png"
    mage.style.display = 'block';
    para_in.style.display = 'none'
})


abt_btn.addEventListener('click', () => {
    abt_btn.style.color = 'red';
    lore_btn.style.color = '';
    pilot_btn.style.color = '';
    fac_btn.style.color = '';


    para_in.innerHTML = "THIS WEBSITE WAS DESIGNED AND DEVELOPED BY [Somtee#4791(on discord), Somtee_ioj(twitter)]"
    mage.style.display = 'none';
    para_in.style.display = 'block';
})