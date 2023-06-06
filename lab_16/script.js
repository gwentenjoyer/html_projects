//Task 1
function setContent1(){
    document.getElementById("test").innerHTML = "Last";
}

function setContent2(){
    document.querySelector("#test").innerHTML = "Last";
}

//Task 2
function changeImg(){
        document.getElementById("photo").setAttribute("src", "img/cat.jpg");
}

function showModal(){
    document.getElementsByClassName('imgModal')[0].setAttribute('src', document.getElementsByClassName('image')[0].getAttribute('src'));
    document.getElementById("modalWindow").style.display = "block";
}

function closeModal(){
    document.getElementById("modalWindow").style.display = "none";
}

//Task 3
function print() {
    let text = document.querySelectorAll('#text > p');
    for (let i = 0; i < text.length; i++) {
        console.log("Selector text " + i + ": " + text[i].innerHTML);
    }
}

//Task 4
function displayModalList1() {
    let listItems = document.querySelectorAll("ul > li");
    printListItems(listItems);
    document.getElementById('listModalWindow').style.display = 'block';
}

function displayModalList2() {
    let listItems = document.getElementsByTagName('li');
    printListItems(listItems);
    document.getElementById('listModalWindow').style.display = 'block';
}

function printListItems(listItems) {
    let listContents = [listItems.item(0), listItems.item(1), listItems.item(2), listItems.item(3), listItems.item(4)];
    document.getElementById('orderedList').innerHTML = listContents[0].innerHTML + ", " + listContents[1].innerHTML + ", " + listContents[2].innerHTML + ", " + listContents[3].innerHTML + ", " + listContents[4].innerHTML;
}

function closeListModal() {
    document.getElementById('listModalWindow').style.display = 'none';
}

//Task 5
function stylize() {
    document.getElementById('BIG').style.backgroundColor = 'greenyellow';

    let paragraph = document.querySelectorAll('#myDiv > p');
    paragraph[0].style.fontWeight = 'bold';
    paragraph[1].style.color = 'red';
    paragraph[2].style.textDecoration = 'underline';
    paragraph[3].style.fontStyle = 'italic';

    document.getElementById('myList').querySelectorAll('li').forEach(li => li.style.display = 'inline-block');

    document.getElementById('invisible').style.display = 'none';
}

//Task 6
function enter(){
    let message1=prompt("Введіть перше повідомлення");
    let message2=prompt("Введіть друге повідомлення");
    document.getElementById("input1").value=message1;
    document.getElementById("input2").value=message2;
}

function swap(){
    let message1=document.getElementById("input1").value;
    let message2=document.getElementById("input2").value;
    document.getElementById("input1").value=message2;
    document.getElementById("input2").value=message1;
}

//Task 7
function add(){
    let div = document.getElementById('Add');
    div.innerHTML = '<main class="mainClass check item">\n' +
        '   <div id="myDiv">\n' +
        '       <p>First paragraph</p>\n' +
        '   </div>\n' +
        '</main>\n';
}