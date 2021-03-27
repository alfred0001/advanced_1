let sel = (x) => document.querySelector(x);

sel('.edit').addEventListener('click', function () {
    sel('.box_edit').classList.add('switch');
    sel('textarea').innerHTML = sel('.smallBoxOne').innerHTML;
    sel('.box_style').classList.remove('switch2');
})
sel('.save').addEventListener('click', function () {
    sel('.smallBoxOne').innerHTML = sel('textarea').value;
})
sel('.style').addEventListener('click', function () {
    sel('.box_style').classList.add('switch2');
    sel('.box_edit').classList.remove('switch');
})

// This function set font size for 'smallBoxOne'
let font_Size = document.forms['fontSize'];
font_Size.addEventListener('click', function () {
    setFontSize();
})

function setFontSize() {
    for (i = 0; i < font_Size.elements.length; i++) {
        font_Size.elements[i].addEventListener('click', function () {
            for (i = 0; i < sel('.smallBoxOne').children.length; i++) {
                sel('.smallBoxOne').children[i].style.fontSize = this.value;
            }
        })
    }
}
// This functoin set font family for 'smallBoxOne'
let font_Family = document.forms['fontFamily'];
font_Family.addEventListener('click', function () {
    setFontFamily();
})

function setFontFamily() {
    for (i = 0; i < font_Family.elements.length; i++) {
        font_Family.elements[i].addEventListener('click', function () {
            for (i = 0; i < sel('.smallBoxOne').children.length; i++) {
                sel('.smallBoxOne').children[i].style.fontFamily = this.value;
            }
        })
    }
}
// This function set font color
sel('.colorOfText').addEventListener('click', function () {
    sel('.txtColor').style.display = 'flex';
    sel('.bgColor').style.display = 'none';
})
sel('.txtColor').addEventListener('click', function () {
    setTxtColor();
})

function setTxtColor() {
    for (i = 0; i < sel('.txtColor').children.length; i++) {
        sel('.txtColor').children[i].addEventListener('click', function () {
            for (j = 0; j < sel('.smallBoxOne').children.length; j++) {
                sel('.smallBoxOne').style.color = this.className;
            }
        })
    }
}

// This function set backgroun color

sel('.colorOfBackground').addEventListener('click', function () {
    sel('.txtColor').style.display = 'none';
    sel('.bgColor').style.display = 'flex';
})
sel('.bgColor').addEventListener('click', function () {
    setBgColor();
})

function setBgColor() {
    for (i = 0; i < sel('.bgColor').children.length; i++) {
        sel('.bgColor').children[i].addEventListener('click', function () {
            for (j = 0; j < sel('.smallBoxOne').children.length; j++) {
                sel('.smallBoxOne').style.backgroundColor = this.className;
            }
        })
    }
}

// This function set font style
let form_font_style = document.forms['style'];

form_font_style.cursive.addEventListener('click', function () {
    if (form_font_style.cursive.checked) {
        for (i = 0; i < sel('.smallBoxOne').children.length; i++) {
            sel('.smallBoxOne').style.fontStyle = 'italic';
        }
    } else {
        for (i = 0; i < sel('.smallBoxOne').children.length; i++) {
            sel('.smallBoxOne').style.fontStyle = '';
        }
    }
})

form_font_style.bold.addEventListener('click', function () {
    if (form_font_style.bold.checked) {
        for (i = 0; i < sel('.smallBoxOne').children.length; i++) {
            sel('.smallBoxOne').style.fontWeight = 'bold';
        }
    } else {
        for (i = 0; i < sel('.smallBoxOne').children.length; i++) {
            sel('.smallBoxOne').style.fontWeight = '';
        }
    }
})

// This function get you choose
sel('.add').addEventListener('click', function () {
    sel('.main_container').style.display = 'none';
    sel('.main_container2').style.display = 'block';
})


// This function create table
sel('.table').addEventListener('click', function () {
    sel('.table_box').style.display = 'block';
    sel('.list_box').style.display = 'none';
})

function setTable() {
    let tr = sel('.count_tr').value;
    let td = sel('.count_td').value;
    let widthT = sel('.width_td').value;
    let heightT = sel('.height_td').value;
    let bdW = sel('.width_bd').value;
    let bdS = sel('.bd_style').value;
    let bdC = sel('.bd_color').value;
    let table = document.createElement('table');
    for (let i = 0; i < tr; i++) {
        let setRow = document.createElement('tr');
        for (let j = 0; j < td; j++) {
            let setColumn = document.createElement('td');
            setColumn.style.width = widthT * 10 + 'px';
            setColumn.style.height = heightT * 10 + 'px';
            setColumn.style.borderWidth = bdW + 'px';
            setColumn.style.borderStyle = bdS;
            setColumn.style.borderColor = bdC;
            setColumn.innerHTML = 'TD';
            setRow.appendChild(setColumn);
        }
        table.appendChild(setRow);
    }
    let tab = document.createElement('table');
    tab.appendChild(table);
    sel('textarea').value += tab.innerHTML;
}

sel('.create_table').addEventListener('click', function () {
    sel('.main_container').style.display = 'flex';
    sel('.main_container2').style.display = 'none';
    setTable();
})

// This function create list
sel('.list').addEventListener('click', function () {
    sel('.list_box').style.display = 'block';
    sel('.table_box').style.display = 'none';
})

function setList(){
    let count_li = sel('.count_li').value;
    let li_type = sel('.sel_mar').value;
    let list = document.createElement('ul');
    for(i = 0; i < count_li; i++){
        let setLi = document.createElement('li');
        setLi.style.listStyleType = li_type;
        list.appendChild(setLi);
    }
    let mainList = document.createElement('ul');
    mainList.appendChild(list);
    sel('textarea').value += mainList.innerHTML;
}

sel('.create_list').addEventListener('click', function(){
    sel('.main_container').style.display = 'flex';
    sel('.main_container2').style.display = 'none';
    setList();
})

