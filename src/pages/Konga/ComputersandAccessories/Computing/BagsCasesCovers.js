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

export default function BagsCasesCovers() {
  const products = [
    {
      src: [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/L/140825_1656434632.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/F/140825_1656434824.jpg" },
        { id: 2, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/O/140825_1656434901.jpg" },
      ],
      alt: "product",
      title: "Dell Laptop Backpack - Black -15.6\"",
      subtitle:
        "The Dell Laptop Backpack in black is designed to hold laptops up to 15.6 inches and provide a safe, comfortable, and stylish way to transport your laptop and other essential items.",
      price: "7,000",
      star: four,
    //   keyfeat: "these are where I will write the key features of the product",
      spec: "It is simply a backpack designed to carry a 15.6\" laptop.",
      prodlink: "https://www.konga.com/product/dell-laptop-backpack-black-15-6-5773486?k_id=AMUZY",
    },
    {
      src: [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/H/G/162327_1666024351.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/U/162327_1666024387.jpg" },
      ],
      alt: "product",
      title: "Portable Laptop Bag - Blue",
      subtitle:
        "This is a portable laptop bag that comes in a stylish blue color. It is designed to fit laptops of various sizes and provides a convenient and protective way to transport your laptop while on the go. The bag features a durable and lightweight construction with multiple pockets for storing accessories and personal items.",
      price: "14,999",
      star: four,
    //   keyfeat: "these are where I will write the key features of the product",
      spec: "It is simply a backpack designed to carry a 15.6\" laptop.",
      prodlink: "https://www.konga.com/product/portable-laptop-bag-blue-4788971?k_id=AMUZY",
    },

    {
        src: [
          { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/Z/138686_1647879497.jpg" },
          { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/Q/138686_1647879283.jpg" },
          { id: 2, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/M/138686_1647879336.jpg" },
          { id: 3, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/Y/138686_1647879433.jpg" },
        ],
        alt: "product",
        title: "Anti Theft Waterproof Usb Laptop Backpack",
        subtitle:
          "The Anti Theft Waterproof USB Laptop Backpack is a durable and secure backpack designed to keep your belongings safe while you're on-the-go. With its waterproof material and anti-theft design, this backpack is perfect for travel or everyday use. It features a USB charging port, multiple compartments for organization, and can fit laptops up to 15.6 inches.",
        price: "11,999",
        star: four,
      //   keyfeat: "these are where I will write the key features of the product",
        spec: "It is simply a backpack designed to carry a 15.6\" laptop. It has a waterproof and Antitheft design",
        prodlink: "https://www.konga.com/product/anti-theft-waterproof-usb-laptop-backpack-5672159?k_id=AMUZY",
      },

  ];

  return <Products products={products} />;
}
