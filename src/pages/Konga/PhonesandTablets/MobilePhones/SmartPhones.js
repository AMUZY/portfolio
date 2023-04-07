import Products from "../../../../panels/Products";

//IMPRTED PICTURES
import product from "../../../../PICTURES/product.jpg";
import product2 from "../../../../PICTURES/product2.jpg";

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
import { item15, item16, item17, item18, item19, item20 } from "../../Konga";


export default function SmartPhones() {
  const products = [
      item15,
      item16,
      item17,
      item18,
      item19,
      item20,
  ];

  return <Products products={products} />;
}
