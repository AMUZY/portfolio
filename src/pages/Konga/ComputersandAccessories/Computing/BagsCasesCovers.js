import Products from "../../../../panels/Products";
// import { useOutletContext } from "react-router-dom";

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


export default function BagsCasesCovers(props) {

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

      {
        src: [
          { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/G/156502_1573515470.jpg" },
        ],
        alt: "product",
        title: "HP Laptop Bag - 15.6\" Grey",
        subtitle:
          "The HP Laptop Bag is a sleek and stylish carrying case designed to protect laptops up to 15.6\" in size. It features a durable and water-resistant exterior, multiple compartments for storage, and comfortable padded handles for easy transport. The bag is ideal for professionals and students who need to carry their laptops and other essentials on the go.",
        price: "6,900",
        star: four,
      //   keyfeat: "these are where I will write the key features of the product",
        spec: "Conveniently access the exterior vertical pocket, unveiling a distinctive Steel Blue lining, for storing accessories and everyday items. Made with durable materials for everyday use including weather-resistant fabric, padding is woven into side and back, detachable shoulder strap, and robust carrying handles. Pockets with purpose include a dedicated internal pocket with strap designed for laptops up to 39.6cm (15.6in), along with multiple organizer pockets for pens, cell phone, and accessories.",
        prodlink: "https://www.konga.com/product/hp-laptop-bag-15-6-grey-4543505?k_id=AMUZY",
      },

      {
        src: [
          { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/S/USB-2-0-SATA-HDD-Case-Enclosure---2-5-Inch-7871629_1.jpg" },
          { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/S/USB-2-0-SATA-HDD-Case-Enclosure---2-5-Inch-7871626_1.jpg" },
          { id: 2, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/S/USB-2-0-SATA-HDD-Case-Enclosure---2-5-Inch-7871627_1.jpg" },
          { id: 3, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/S/USB-2-0-SATA-HDD-Case-Enclosure---2-5-Inch-7871628_1.jpg" },
        ],
        alt: "product",
        title: "Samsung USB 2.0 SATA HDD Case Enclosure - 2.5-Inch",
        subtitle:
          "The Samsung USB 2.0 SATA HDD Case Enclosure is a portable storage solution for 2.5-inch hard disk drives. It allows users to transfer data and store files securely. The enclosure is easy to use and can be connected to a computer or laptop using a USB 2.0 interface. The durable design ensures that the hard drive is protected from scratches and other forms of damage. It is a convenient and reliable option for those who need to take their data on the go.",
        price: "3,500",
        star: four,
      //   keyfeat: "these are where I will write the key features of the product",
        spec: `Brand new high quality

        Plug and play, hot pluggable and hot swappable features make this device convenient and easy to use. LED lights 480Mbps Hot-swappable.
        Support hard drive up to 1.5TB
        Fully compatible with backwards compatible with USB 2.0 ,USB1.1.
        USB power supplied, no external power needed.
        Two color LED Indicator.
        for Windows 98/ME/2000/XP or for Mac OS compatible
        Cable Length: Approx. 33 inch
        
        Specification:
        Original box: yes
        Item size: Net weight: 130g
        Package weight: 198g
        
        Package Includes:
        1 X SATA Hard Drive HD Enclosure
        1 X USB cable
        1 X Carrying case bag
        `,
        prodlink: "https://www.konga.com/product/samsung-usb-2-0-sata-hdd-case-enclosure-2-5-inch-2940295?k_id=AMUZY",
      },

  ];
  

  products.forEach((item)=>{
    props.updateProds(item.title,item.src,item.subtitle,item.price,item.star,item.spec,item.prodlink);
  })

  // RETURN
  return <Products products={products} />
}
