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

export default function LaptopandDesktopAccessories() {
  const products = [
    {
      src: [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/M/193009_1632674336.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/P/193009_1632674368.jpg" },
        { id: 2, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/D/193009_1632674311.jpg" },
      ],
      alt: "product",
      title: "Prime Guard Usb Desktop Computer Speaker",
      subtitle:
        "Prime Guard USB desktop computer speaker is a compact and stylish speaker system that delivers high-quality sound for your computer or laptop. It features a plug-and-play USB connection for easy installation and is perfect for gaming, music, movies, and more.",
      price: "5,000",
      star: four,
    //   keyfeat: "these are where I will write the key features of the product",
      spec: "--",
      prodlink: "https://www.konga.com/product/prime-guard-usb-desktop-computer-speaker-5449371?k_id=AMUZY",
    },
    {
      src: [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/h/Charger-For-HP-14-HP-15-HP-250---Blue-Mouth-7851545.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/h/Charger-For-HP-14-HP-15-HP-250---Blue-Mouth-7851546.jpg" },
      ],
      alt: "product",
      title: "Charger For HP 14, HP 15 & HP 250 - Blue Mouth",
      subtitle:
        "The Charger for HP 14, HP 15 & HP 250 - Blue Mouth is a power adapter designed to charge laptops with compatible models. Its blue mouth design makes it visually appealing and easy to distinguish from other chargers.",
      price: "3,000",
      star: four,
    //   keyfeat: "these are where I will write the key features of the product",
      spec: `Charger power: 45w/65w
      Power output: 19.5v 2.31a/3.33a
      Power input: 100-240v
      Tip pin size: 4.5mm * 3.0mm 
      Hp Pavilion 45w/65w charger p/n: PA-1450-32HE, NSTNN-LA35, 719309-001 and many more
      Hp Ac adapter warranty: 12months
      Contents: Replacement Hp Pavilion 15-n297sa laptop charger & mains cable plug`,
      prodlink: "https://www.konga.com/product/charger-for-hp-14-hp-15-and-hp-250-blue-mouth-3730656?k_id=AMUZY",
    },
    {
        src: [
          { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/N/125102_1533672293.jpg" },
      
        ],
        alt: "product",
        title: "Laptop Charger Power Cable",
        subtitle:
          "The Laptop Charger Power Cable is an essential accessory for charging laptops. It is designed to connect the laptop adapter to a power outlet, allowing for convenient and reliable charging. The cable is available in various lengths and compatible with a wide range of laptop models.",
        price: "1,500",
        star: four,
      //   keyfeat: "these are where I will write the key features of the product",
        spec: `BS standard power cable design.
        Connectors: 3 prong pins and 3 sockets.
        Suitable for standard PC computer, PC power supply, PC monitor, Game Console`,
        prodlink: "https://www.konga.com/product/laptop-charger-power-cable-4018370?k_id=AMUZY",
      },

  ];

  return <Products products={products} />;
}
