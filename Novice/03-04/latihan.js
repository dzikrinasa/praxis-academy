// 1. selector
var firstDiv = document.querySelector('div');
firstDiv.style.color = 'red';

// 2. selector all
var paragraphs = document.querySelectorAll('p');
for (var p of paragraphs)
    p.style.color = 'blue';

//3. addEventListener()
var btn = document.querySelector('button');
btn.addEventListener('click', foo);

function foo() {
    alert('hello');
}

//4. removeEventListener()
btn.removeEventListener('click', foo);


//5. createElement()
var pEle = document.createElement('p')

//6. appendChild()
var div = document.querySelector('div');
var strong = document.createElement('strong');
strong.textContent = 'Hello';
div.appendChild(strong);

// 7. removeChild()
div.removeChild(strong);


// 8. replaceChild()

var em = document.createElement('em');
var strong = document.querySelector('strong');
var div = document.querySelector('div');
em.textContent = 'hi';
div.replaceChild(em, strong);


// 9. cloneNode()

var strong = document.querySelector('strong');
var copy = strong.cloneNode(true);
var div = document.querySelector('div');
div.appendChild(copy);


// 10. insertBefore()

var em = document.createElement('em');
var strong = document.querySelector('strong');
var div = document.querySelector('div');
em.textContent = 'hi';
div.insertBefore(em, strong);


// 11. createDocumentFragment()

var table = document.querySelector("table");
var df = document.createDocumentFragment();

for (var i = 0; i < 5; i++) {
    var td = document.createElement("td");
    var tr = document.createElement("tr");
    td.textContent = i;
    tr.appendChild(td)
    df.appendChild(tr);
}

table.appendChild(df);

// 12. getComputedStyle()

var style = getComputedStyle(document.querySelector('div'));
alert(style.width);


// 13. setAttribute()

var div = document.querySelector('div');
div.setAttribute('contenteditable', '')

// 14. getAttribute()

var div = document.querySelector('div');
alert(div.getAttribute('contenteditable'))

// 15. removeAttribute()

var div = document.querySelector('div');
div.removeAttribute('contenteditable');