const container = document.getElementById('container');
const addButton = document.getElementById('addButton');
const to_do = document.getElementById('to_do');
let count = 0;
let dict = {};

addButton.addEventListener('click',e=>{
    const checkBox = document.createElement('input');
    if(to_do.value==""){
        alert("Enter the task");
        return;
    } 
    count += 1;
    checkBox.type = 'checkbox';
    checkBox.id = 'checkBox' + count;

    const label = document.createElement('label');
    label.id = 'label' + count;
    label.htmlFor = 'checkBox' + count;
    label.textContent = to_do.value;

    const button = document.createElement('button');
    button.id = 'button' + count;
    button.textContent = "X";

    const br = document.createElement('br');
    br.id = 'lBreak' + count;

    to_do.value = "";
    dict['button' + count] = ['checkBox' + count, 'label' + count, 'lBreak' + count];

    container.appendChild(checkBox);
    container.appendChild(label);
    container.appendChild(button);
    container.appendChild(br);
    to_do.focus();
});
container.addEventListener('click',e=>{
    for (const key in dict) {
        //console.log(dict[key][0]);
        const checkBox = document.getElementById(dict[key][0]);
        setTimeout(()=>{
            if (checkBox.checked) {
                //console.log(dict[key][1]);
                const label = document.getElementById(dict[key][1]);
                label.style.textDecoration = 'line-through';
                label.style.opacity = '0.5';
            }
            else {
                const label = document.getElementById(dict[key][1]);
                label.style.textDecoration = 'none';
                label.style.opacity = '1';
            }
        },50);
    }
    if(e.target.id in dict){
        document.getElementById(dict[e.target.id][0]).remove();
        document.getElementById(dict[e.target.id][1]).remove();
        document.getElementById(dict[e.target.id][2]).remove();
        document.getElementById(e.target.id).remove();
    }
});