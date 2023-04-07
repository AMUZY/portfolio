import Products from "../../../../panels/Products";
// import { useOutletContext } from "react-router-dom";

//IMPRTED OBJECTS
import { item1, item2, item3, item4, item5 } from "../../Konga";

// STARS IMPORT
import one from "../../../../SVGs/1_star.svg";
import one_half from "../../../../SVGs/1_5_star.svg";
import two from "../../../../SVGs/2_star.svg";
import two_half from "../../../../SVGs/2_5_star.svg";
import three from "../../../../SVGs/3_star.svg";
import three_half from "../../../../SVGs/3_5_star.svg";
import four from "../../../../SVGs/4_star.svg";
import four_half from "../../../../SVGs/4_5_star.svg";
import five from "../../../../SVGs/5_star.svg";


export default function BagsCasesCovers(props) {

  const products = [
    item1,
    item2,
    item3,
    item4,
    item5,
  ];

  // RETURN
  return <Products products={products} />
}
