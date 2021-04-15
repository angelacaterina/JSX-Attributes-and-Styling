import React from "react";
import ReactDOM from "react-dom";

/** Challenge 1
 * rendere modificabile h1 senza il controllo di ortografia; CSS: h1 colore rosso, ul colore blue
  ReactDOM.render(
    <div>
      <h1 className="heading" contentEditable="true" spellCheck="false">
        My Favourite Foods
      </h1>
      <ul>
        <li>Bacon</li>
        <li>Jamon</li>
        <li>Noodles</li>
      </ul>
    </div>,
    document.getElementById("root")
  );
*/

/** Attributo: contenteditable (html) / contentEditable (JSX)
 * specifica se il contenuto di un elemento è modificabile o meno.
 * quando l' contenteditable attributo non è impostato su un elemento, l'elemento lo erediterà dal suo genitore.
 * <element contentEditable="true|false">
 */

/** Attributo: spellcheck (html) / spellCheck (JSX)
 * specifica se l'elemento deve avere o meno il controllo ortografico e grammaticale.
 - Valori di testo negli elementi di input (non password)
 - Testo negli elementi <textarea>
 - Testo in elementi modificabili
 * <element spellCheck="true|false">
*/

/** Challenge 2
 * CSS: immagini 100px x 100px
  ReactDOM.render(
    <div>
      <h1 className="heading">My Favourite Foods</h1>
      <div>
        <img
          className="food-img"
          src="https://v1.nitrocdn.com/gdQToJpjwmoFSVXcSlvjpaoApjexzIdE/assets/static/optimized/rev-a573ee2/wp-content/uploads/2020/03/oven-bacon-2.jpg"
          alt="bacon"
        />
        <img
          className="food-img"
          src="https://consorcioserrano.es/wp-content/uploads/2017/10/sabor-aroma-central.jpg"
          alt="jamon"
        />
        <img
          className="food-img"
          src="https://primochef.it/wp-content/uploads/2015/07/SH_Noodles_verdure-1-640x350.jpg.webp"
          alt="noodles"
        />
      </div>
    </div>,
    document.getElementById("root")
  );
*/

/** Challenge 3
 * utilizzare una costante per visualizzare immagini random, più <img /> utilizzate nella Challenge 2
 * grayscale: scala di grigi
 * blur: sfogato
 *
 */

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img src={img} alt="random" />
      <img src={img + "?grayscale"} alt="random grayscale" />
      <img src={img + "?blur"} alt="random blur" />
      <img
        className="food-img"
        src="https://v1.nitrocdn.com/gdQToJpjwmoFSVXcSlvjpaoApjexzIdE/assets/static/optimized/rev-a573ee2/wp-content/uploads/2020/03/oven-bacon-2.jpg"
        alt="bacon"
      />
      <img
        className="food-img"
        src="https://consorcioserrano.es/wp-content/uploads/2017/10/sabor-aroma-central.jpg"
        alt="jamon"
      />
      <img
        className="food-img"
        src="https://primochef.it/wp-content/uploads/2015/07/SH_Noodles_verdure-1-640x350.jpg.webp"
        alt="noodles"
      />
    </div>
  </div>,
  document.getElementById("root")
);
/** Tag img
 * <img src="" alt="" />
 * và scritto in questo modo, sia per il file js che html, sennò non viene letto correttamente
 */
