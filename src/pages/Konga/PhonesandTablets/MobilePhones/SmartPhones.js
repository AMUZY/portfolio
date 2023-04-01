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

let samsunga31 = <ul class="specs-list">
    <li>Display: 6.6-inch TFT LCD, 720 x 1600 pixels resolution</li>
    <li>Processor: MediaTek Helio G35 Octa-core (2.3 GHz Cortex-A53)</li>
    <li>GPU: PowerVR GE8320</li>
    <li>RAM: 4GB</li>
    <li>Internal Storage: 128GB, expandable via microSD up to 1TB</li>
    <li>Rear Camera: 50MP primary sensor with f/1.8 aperture, 2MP macro lens with f/2.4 aperture, and 2MP depth sensor with f/2.4 aperture</li>
    <li>Front Camera: 8MP sensor with f/2.0 aperture</li>
    <li>Battery: 5000mAh, non-removable, with 15W fast charging support</li>
    <li>OS: Android 11, One UI 3.1</li>
    <li>Connectivity: Dual SIM (Nano-SIM, dual stand-by), 4G LTE, Wi-Fi 802.11 b/g/n, Bluetooth 5.0, GPS, USB Type-C 2.0</li>
    <li>Sensors: Fingerprint (side-mounted), accelerometer, proximity</li>
    <li>Colors: Peach, Black, White, Blue</li>
    <li>Dimensions: 164.3 x 76.6 x 9.0 mm</li>
    <li>Weight: 205 g</li>
</ul>

let oppoa96 = <ul >
<li>Display: 6.59-inch AMOLED (1080 x 2400 pixels) display</li>
<li>Operating System: Android 11, ColorOS 11.1</li>
<li>Processor: Octa-core Mediatek Helio P95 (12nm) chipset</li>
<li>Memory: 8GB RAM, 256GB internal storage, non-expandable</li>
<li>Rear Camera: 50MP wide + 16MP ultrawide camera</li>
<li>Front Camera: 16MP selfie camera</li>
<li>Connectivity: Dual SIM (Nano-SIM, dual stand-by), 4G LTE, Wi-Fi 802.11 a/b/g/n/ac, Bluetooth 5.1, GPS</li>
<li>Battery: Non-removable Li-Po 5000 mAh battery, fast charging 30W</li>
<li>Dimensions: 160.3 x 73.8 x 7.8 mm</li>
<li>Weight: 173 g</li>
<li>Color: Black</li>
</ul>

let nokiac30 = <ul>
<li>Display: 6.82-inch HD+ IPS LCD, 720 x 1600 pixels resolution</li>
<li>Operating System: Android 11</li>
<li>Processor: Octa-core CPU</li>
<li>RAM: 3GB</li>
<li>Storage: 64GB internal storage, expandable via microSD card</li>
<li>Rear Camera: Dual Camera (13MP + 2MP)</li>
<li>Front Camera: 5MP</li>
<li>Battery: 6000mAh non-removable battery with fast charging support</li>
<li>Connectivity: Dual SIM, 4G LTE, Wi-Fi, Bluetooth 5.0, GPS, FM radio</li>
<li>Sensors: Fingerprint sensor, accelerometer, proximity sensor</li>
<li>Color: Green</li>
</ul>

let tecnoc15 = <ul>
<li>Display: 6.6-inch IPS LCD, 1080 x 2340 pixels resolution</li>
<li>Operating System: Android 10, HIOS 6.0</li>
<li>Processor: Octa-core Mediatek Helio P35</li>
<li>RAM: 6GB</li>
<li>Storage: 128GB internal storage, expandable via microSD card</li>
<li>Rear Camera: Quad Camera (64MP + 5MP + 2MP + QVGA)</li>
<li>Front Camera: 32MP pop-up selfie camera</li>
<li>Battery: 4,000mAh non-removable battery with fast charging support</li>
<li>Connectivity: Dual SIM, 4G LTE, Wi-Fi, Bluetooth 5.0, GPS</li>
<li>Sensors: Fingerprint sensor, accelerometer, proximity sensor, compass</li>
<li>Color: Ice Jadeite</li>
</ul>

let samsunga03 = <ul>
<li>Display: 6.5-inch</li>
<li>Storage: 32GB ROM</li>
<li>RAM: 2GB</li>
<li>Battery: 5000mAh</li>
<li>Connectivity: Dual SIM, 4G LTE</li>
<li>Color: Black</li>
</ul>

let tecnoc18i = <ul>
<li>Display: 6.6-inch HD+ IPS LCD touchscreen</li>
<li>Resolution: 720 x 1600 pixels</li>
<li>Processor: Octa-core Mediatek Helio G70 CPU</li>
<li>GPU: Mali-G52 2EEMC2</li>
<li>RAM: 4GB</li>
<li>ROM: 128GB</li>
<li>Main Camera: Dual 48MP + 8MP</li>
<li>Selfie Camera: 16MP</li>
<li>Battery: 5000mAh non-removable Li-Po battery</li>
<li>Charging: Fast charging 18W</li>
<li>Connectivity: Dual-SIM, 4G LTE, Wi-Fi, Bluetooth, GPS, USB Type-C</li>
<li>Operating System: Android 11, HiOS 7.6</li>
<li>Colors: Gray</li>
</ul>

export default function SmartPhones() {
  const products = [
    {
      src: [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/P/67343_1648624788.jpg",
        },
        {
          id: 1,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/O/67343_1648625257.jpg",
        },
        {
          id: 2,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/F/67343_1648625297.jpg",
        },
      ],
      alt: "product",
      title:
        "Samsung Galaxy A13 - 6.6\" -128GB ROM-4GB - RAM-50MP - Dual SIM - 4G LTE - Fingerprint - 5000mAh - Peach",
      subtitle:
        "The Samsung Galaxy A13 is a mid-range smartphone with a large 6.6-inch display, 128GB of internal storage, and 4GB of RAM for smooth performance. It features a powerful 50MP rear camera for high-quality photos and videos, as well as a dual SIM card slot and 4G LTE connectivity for versatile and fast network options. The phone also includes a fingerprint scanner for added security and a long-lasting 5000mAh battery. Its peach color adds a stylish touch to its overall design.",
      price: "128,000",
      star: four,
    //   keyfeat: "these are where I will write the key features of the product",
      spec: samsunga31,
      prodlink : "https://www.konga.com/product/samsung-galaxy-a13-6-6-128gb-rom-4gb-ram-50mp-dual-sim-4g-lte-fingerprint-5000mah-peach-5680934?k_id=AMUZY"
    },

    {
        src: [
          {
            id: 0,
            img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/J/118566_1650900726.jpg",
          },
          {
            id: 1,
            img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/M/118566_1650900928.jpg",
          },
          {
            id: 2,
            img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/W/118566_1650900984.jpg",
          },
        ],
        alt: "product",
        title:
          "Oppo A96 - 6.59\" - 8GB RAM+256GB ROM - Android 11 - 50mp + 16mp - 4g - 5000mAh - Dual Sim -Black",
        subtitle:
          "The Oppo A96 is a high-end smartphone with a large 6.59-inch AMOLED display and a powerful octa-core Mediatek Helio P95 processor. It comes with 8GB of RAM and 256GB of internal storage, and runs on the latest Android 11 operating system with ColorOS 11.1. The phone features a 50MP+16MP dual rear camera system and a 16MP front-facing camera for selfies. It supports dual SIM cards, 4G LTE, Wi-Fi, Bluetooth 5.1, and GPS. The Oppo A96 is equipped with a large 5000mAh battery that supports fast charging, and is available in black color.",
        price: "188,060",
        star: four,
        // keyfeat: "these are where I will write the key features of the product",
        spec: oppoa96,
        prodlink : "https://www.konga.com/product/samsung-galaxy-a13-6-6-128gb-rom-4gb-ram-50mp-dual-sim-4g-lte-fingerprint-5000mah-peach-5680934?k_id=AMUZY"
      },

      {
        src: [
          {
            id: 0,
            img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/A/118566_1636109086.jpg",
          },
        ],
        alt: "product",
        title:
          "Nokia C30 - 6.82\" Hd+ - 3gb Ram - 64gb Rom - Dual Sim - 4g Lte - Android 11 - 6000mah - Green",
        subtitle:
          "The Nokia C30 is a mid-range smartphone with a large 6.82-inch HD+ display and a powerful octa-core processor. It comes with 3GB of RAM and 64GB of internal storage, and runs on the latest Android 11 operating system. The phone supports dual SIM cards, 4G LTE, Wi-Fi, Bluetooth, and GPS. It is equipped with a large 6000mAh battery that supports fast charging, and is available in green color.",
        price: "72,670",
        star: five,
        // keyfeat: "these are where I will write the key features of the product",
        spec: nokiac30,
        prodlink : "https://www.konga.com/product/nokia-nokia-c30-6-82-hd-3gb-ram-64gb-rom-dual-sim-4g-lte-android-11-6000mah-green-5509285?k_id=AMUZY"
      },

      {
        src: [
          {
            id: 0,
            img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/K/118566_1592897938.jpg",
          },
        ],
        alt: "product",
        title:
          "Tecno Camon 15 Premier 6GB Ram+128gb Rom-ice Jadeite",
        subtitle:
          "The Tecno Camon 15 Premier features 6GB of RAM and 128GB of internal storage, along with an Ice Jadeite color option.",
        price: "100,000",
        star: five,
        // keyfeat: "these are where I will write the key features of the product",
        spec: tecnoc15,
        prodlink : "https://www.konga.com/product/tecno-camon-15-premier-6gb-ram-128gb-rom-ice-jadeite-4769115?k_id=AMUZY"
      },

      {
        src: [
          {
            id: 0,
            img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/J/O/67343_1641381195.jpg",
          },
        ],
        alt: "product",
        title:
          "Samsung Galaxy A03 Core - 6.5\" - 32GB ROM - 2GB RAM - Dual SIM - 4G LTE - 5000mAh - Black",
        subtitle:
          "The Samsung Galaxy A03 Core features a 6.5-inch display, 32GB of internal storage, 2GB of RAM, a 5000mAh battery, and support for dual SIM and 4G LTE. It comes in the color black.",
        price: "63,999",
        star: five,
        // keyfeat: "these are where I will write the key features of the product",
        spec: samsunga03,
        prodlink : "https://www.konga.com/product/samsung-galaxy-a03-core-6-5-32gb-rom-2gb-ram-dual-sim-4g-lte-5000mah-black-5577143?k_id=AMUZY"
      },

      {
        src: [
          {
            id: 0,
            img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/E/50246_1636336825.jpg",
          },
        ],
        alt: "product",
        title:
          "Tecno Camon 18i(cg6)-6.6\" Hd+ -128GB ROM - 4GB RAM -48mp/8mp-5000mAh-4g Lte- Grey",
        subtitle:
          "The Tecno Camon 18i (CG6) features a 6.6-inch HD+ display, 128GB of internal storage, 4GB of RAM, dual rear cameras with 48MP and 8MP lenses, a 5000mAh battery, and support for 4G LTE connectivity. It comes in the color grey.",
        price: "99,000",
        star: four,
        // keyfeat: "these are where I will write the key features of the product",
        spec: tecnoc18i,
        prodlink : "https://www.konga.com/product/tecno-camon-18i-cg6-6-6-hd-128gb-rom-4gb-ram-48mp-8mp-5000mah-4g-lte-grey-5513155?k_id=AMUZY"
      },


  ];




  return <Products products={products} />;
}
