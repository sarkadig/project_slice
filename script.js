function _load(){
  //TODO: app létrehozása, legalább 10 sor minden sorban egy checkbox, mellette egy szöveges mező(benne a feladat), minden sorban legyen egy törlés gomb, bővíthető legyen egy új feladat hozzáadás gombbal.

  //Egy változóban eltároljuk a root elemet.

  let rootE = document.getElementById("root");

  //Egy változóban eltároljuk bactickek között több sorban azokat a html elemeket amik nekünk kellenek. Delete class-t rárakunk a törlés gombokra. (nem ID-t!! az ID mindig egyedi!!!)

  let listRow = `
  <div>
    <input type="checkbox">
    <input type="text">
    <button class="delete">Delete</button>
  </div>`;

  //változóban elmenteni a 10es(listánk hosszát)számot(mert ez változhat).

  let listItems = 10;

  //for ciklusban végig iterálunk a listItems-t, insertadjacenthtml-el (beeforeend-el) belerakjuk (root elemen belül) a listRow változónkban meghatározott Html elemeket.

  for (let index = 0; index < listItems; index++) {
    rootE.insertAdjacentHTML("beforeend", listRow);
  }

  //add gomb hozzáadása a root elemen kívül, afterend(insertadjacenthtml). A gombnak adunk egy ID-t.(csak egy van belőle, tehát ez egyedi lesz, ha csak egyszer használjuk ezt az ID-t.)

  rootE.insertAdjacentHTML("afterend", `
  <button id="addItem">ADD</button>
  `);

  //új hozzáadása click esemény, id-ja lehet, docgetelementbyid-id, létre kell hozni egy függvényt amiben a click eseménnyel azt érjük el, hogy a fenti változó amit meghatároztunk mégegyszer hozzáadódjon. 

  function addNewItem (){
    rootE.insertAdjacentHTML("beforeend", listRow);
  }
  document.getElementById("addItem").addEventListener("click", addNewItem);

  //jelöljük ki az összes törlés gombot--query selectorral egy változóba. for ciklussal végigmegyünk az így összeszedett html elmeken, mindegyikre rárakunk egy kattintás eseményt minden sorban található törlés gombunkra. Készítünk egy függvényt erre. Az elkészített függvénybe a törlés gomb befoglaló sorát kitöröljük.

  let deleteButtons = rootE.querySelectorAll(".delete");

  function deleteItem(e){
    //console.log(e.target.parentElement);
    e.target.parentElement.remove();
    
  }
  for (let index = 0; index < deleteButtons.length; index++) {
    deleteButtons[index].addEventListener("click", deleteItem);
    
  }

}
window.addEventListener("load", _load);