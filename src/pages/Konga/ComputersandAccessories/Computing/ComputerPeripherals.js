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

export default function ComputerPeripherals() {
  const products = [
    {
      src: [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/S/78942_1554696612.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/X/78942_1554696647.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/A/78942_1554696684.jpg" },
      ],
      alt: "product",
      title: "Professional Powerpoint Wireless Controller",
      subtitle:
        "A Professional PowerPoint Wireless Controller is a device used for remotely controlling Microsoft PowerPoint presentations. It is designed to provide presenters with more flexibility and freedom during their presentations. The device is wireless, allowing the presenter to move around the room while presenting, and can be used to advance slides, go back to previous slides, and control the volume of embedded media. It is commonly used in conference rooms, classrooms, and other settings where presentations are given.",
      price: "7,000",
      star: four,
    //   keyfeat: "these are where I will write the key features of the product",
      spec: "--",
      prodlink: "https://www.konga.com/product/professional-powerpoint-wireless-controller-4274857?k_id=AMUZY",
    },
    {
      src: [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/D/175234_1642781872.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/N/175234_1642781894.jpg" },
      ],
      alt: "product",
      title: "Multifunction OTG USB Card Reader Writer High-speed Micro-sd",
      subtitle:
        "The Multifunction OTG USB Card Reader Writer is a high-speed device that allows you to read and write data to and from Micro-SD cards. With its OTG (On-The-Go) functionality, it can be used with a variety of devices, including smartphones, tablets, and laptops. The compact size makes it easy to carry around, making it perfect for students, professionals, and anyone who needs to transfer data on the go.",
      price: "2,700",
      star: four,
    //   keyfeat: "these are where I will write the key features of the product",
      spec: "--",
      prodlink: "https://www.konga.com/product/multifunction-otg-usb-card-reader-writer-high-speed-micro-sd-5600811?k_id=AMUZY",
    },
    {
        src: [
          { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/a/72757_1475506540.jpg" },
          { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/a/72757_1475506636.jpg" },
          { id: 2, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/a/72757_1475506767.jpg" },
        ],
        alt: "product",
        title: "Logitech Wireless Keyboard With Mouse",
        subtitle:
          "Logitech wireless keyboard - a cordless keyboard for convenient and comfortable typing.",
        price: "18,500",
        star: four,
      //   keyfeat: "these are where I will write the key features of the product",
        spec: `Logitech Wireless Keyboard is a computer keyboard that connects to a computer or laptop wirelessly using a receiver that plugs into a USB port. 
        It provides a convenient and clutter-free typing experience with no wires or cables to get in the way. 
        The keyboard typically has a slim profile and may feature additional function keys for quick access to media controls, internet browsing, and other common tasks.
        Some models also include an integrated touchpad or trackpad for mouse functionality. It is compatible with a range of operating systems and devices, making it a
        versatile choice for users who need to switch between different devices or work on the go.`,
        prodlink: "https://www.konga.com/product/logitech-wireless-keyboard-with-mouse-2907271?k_id=AMUZY",
      },
  ];

  return <Products products={products} />;
}
