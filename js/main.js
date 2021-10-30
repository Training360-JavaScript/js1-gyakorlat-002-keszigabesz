/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
 
```JavaScript
// ha ez a tömb
const content = ['első', 'második', 'harmadik'];
```

```HTML
<!-- akkor ez legyen a visszatérési érték (nem kellenek a behúzások, lehet egysoros string a kimenet): -->
<ul>
    <li>első</li>
    <li>második</li>
    <li>harmadik</li>
</ul>
```
*/

const content = ['első', 'második', 'harmadik'];

const generateList = function (list) {
    let listHTML = "<ul>";
    list.forEach(item => {
        listHTML += "<li>"+item+"</li>";
    });
    return listHTML +="</ul>";
    console.log(listHTML);
}

console.log(generateList(content));