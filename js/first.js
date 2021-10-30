/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/
const exampleArray = [12, 34, 56, 78];
const brutto = function (array){
    return array.map(item=>Math.round(item*1.27)).reduce((previousValue, currentValue)=>previousValue+currentValue);
}
brutto(exampleArray);