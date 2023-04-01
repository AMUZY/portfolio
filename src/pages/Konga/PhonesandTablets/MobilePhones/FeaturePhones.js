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

let onezerofive =  <ul>
    <li>Display: 1.8-inch QQVGA (128 x 160 pixels) LCD</li>
    <li>RAM: 128MB</li>
    <li>Internal Storage: 4MB, expandable via microSD up to 32GB</li>
    <li>Connectivity: Dual SIM (Mini-SIM, dual stand-by), GSM 900/1800 MHz, Bluetooth 3.0, FM radio</li>
    <li>Battery: Removable Li-Ion 800 mAh battery</li>
    <li>Dimensions: 119 x 49.2 x 14.4 mm</li>
    <li>Weight: 74 g</li>
    <li>Color: Black</li>
</ul>

let nokia110 = <ul>
    <li>Display: 1.77-inch QQVGA (160 x 120 pixels) LCD</li>
    <li>Connectivity: Dual SIM (Mini-SIM, dual stand-by), GSM 900/1800 MHz, Bluetooth 3.0, Wireless FM radio, 3.5mm headphone jack</li>
    <li>Memory: 4MB RAM, 4MB internal storage, expandable via microSD up to 32GB</li>
    <li>Features: Games, MP3 music player, built-in flashlight, alarm clock, calculator, calendar, notes, converter</li>
    <li>Battery: Removable Li-Ion 800 mAh battery</li>
    <li>Dimensions: 115.2 x 49.9 x 14.3 mm</li>
    <li>Weight: 74.5 g</li>
    <li>Color: Black</li>
</ul>




export default function FeaturePhones() {
  const products = [
    {
      src: [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/H/179106_1599586049.jpg",
        },
      ],
      alt: "product",
      title: "105 - 1.8 - 128MB RAM - Dual Sim - Black",
      subtitle:
        "The device is a mobile phone with a 1.8-inch display, designed in a black color. It comes equipped with 128MB of RAM and has dual-SIM capability, allowing for the use of two SIM cards at the same time.",
      price: "10,500",
      star: four_half,
    //   keyfeat: "these are where I will write the key features of the product",
      spec: onezerofive,
      prodlink: "https://www.konga.com/product/105-1-8-128mb-ram-dual-sim-black-4934955?k_id=AMUZY",
    },

    {
        src: [
          {
            id: 0,
            img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/B/67343_1648678654.jpg",
          },
          {
            id: 1,
            img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/G/67343_1648678668.jpg",
          },
          {
            id: 2,
            img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/O/V/67343_1648678689.jpg",
          },
        ],
        alt: "product",
        title: "Nokia 110 (Africa Edition) - Dual SIM - 1.77 Display - Wireless FM Radio - Games - MP3 Music Player- Black",
        subtitle:
          "The Nokia 110 (Africa Edition) is a budget-friendly mobile phone with a 1.77-inch display and dual SIM functionality. It features a wireless FM radio, MP3 music player, games, and a built-in flashlight. It also comes with 4MB of RAM and 4MB of internal storage, which can be expanded up to 32GB with a microSD card. The phone is powered by a removable Li-Ion 800 mAh battery and is available in black color.",
        price: "11,999",
        star: four,
      //   keyfeat: "these are where I will write the key features of the product",
        spec: nokia110,
        prodlink: "https://www.konga.com/product/nokia-110-africa-edition-dual-sim-1-77-display-wireless-fm-radio-games-mp3-music-player-black-5681931?k_id=AMUZY",
      },

  ];

  return <Products products={products} />;
}
