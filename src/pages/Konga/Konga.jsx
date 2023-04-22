import "../../button.scss"
import "./konga.scss"
import Navbar from "../../panels/Navbar"
import { Outlet } from "react-router-dom"
import KongaDefault from "./kongaDefault"
import { useLocation } from "react-router-dom"

import { useEffect, useState } from "react"

// STARS IMPORT
import one from "../../SVGs/1_star.svg";
import one_half from "../../SVGs/1_5_star.svg";
import two from "../../SVGs/2_star.svg";
import two_half from "../../SVGs/2_5_star.svg";
import three from "../../SVGs/3_star.svg";
import three_half from "../../SVGs/3_5_star.svg";
import four from "../../SVGs/4_star.svg";
import four_half from "../../SVGs/4_5_star.svg";
import five from "../../SVGs/5_star.svg";


// export var NEWSOMETHING = []




// ARRAY TO STORE ALL PATHS
export var PATHS = []; 

// CLASS THAT CONTAINS PROPERTIES OF ALL ITEM OBJECTS
class Item {
    constructor(src,alt,title,subtitle,price,star,spec,prodlink){
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.subtitle = subtitle;
        this.price = price;
        this.star = star;
        this.spec = spec;
        this.prodlink = prodlink;
    }
};

export var ITEMS = [];


// ALL ITEMS BEGINS
  export const item1 = new Item(
    [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/L/140825_1656434632.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/F/140825_1656434824.jpg" },
        { id: 2, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/O/140825_1656434901.jpg" },
    ],
    "product",
    "Dell Laptop Backpack - Black -15.6\"",
    "The Dell Laptop Backpack in black is designed to hold laptops up to 15.6 inches and provide a safe, comfortable, and stylish way to transport your laptop and other essential items.",
    "7,000",
    four,
    "It is simply a backpack designed to carry a 15.6\" laptop.",
    "https://www.konga.com/product/portable-laptop-bag-blue-4788971?k_id=AMUZY",
  )
  ITEMS.push(item1);

  export const item2 = new Item(
    [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/Z/138686_1647879497.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/Q/138686_1647879283.jpg" },
        { id: 2, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/M/138686_1647879336.jpg" },
        { id: 3, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/Y/138686_1647879433.jpg" },
    ],
    "product",
    "Anti Theft Waterproof Usb Laptop Backpack",
    "The Anti Theft Waterproof USB Laptop Backpack is a durable and secure backpack designed to keep your belongings safe while you're on-the-go. With its waterproof material and anti-theft design, this backpack is perfect for travel or everyday use. It features a USB charging port, multiple compartments for organization, and can fit laptops up to 15.6 inches.",
    "11,999",
    four,
    "It is simply a backpack designed to carry a 15.6\" laptop. It has a waterproof and Antitheft design",
    "https://www.konga.com/product/anti-theft-waterproof-usb-laptop-backpack-5672159?k_id=AMUZY",
  )
  ITEMS.push(item2);

  export const item3 = new Item(
    [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/G/156502_1573515470.jpg" },
    ],
    "product",
    "HP Laptop Bag - 15.6\" Grey",
      
    "The HP Laptop Bag is a sleek and stylish carrying case designed to protect laptops up to 15.6\" in size. It features a durable and water-resistant exterior, multiple compartments for storage, and comfortable padded handles for easy transport. The bag is ideal for professionals and students who need to carry their laptops and other essentials on the go.",
    "6,900",
    four,
    "Conveniently access the exterior vertical pocket, unveiling a distinctive Steel Blue lining, for storing accessories and everyday items. Made with durable materials for everyday use including weather-resistant fabric, padding is woven into side and back, detachable shoulder strap, and robust carrying handles. Pockets with purpose include a dedicated internal pocket with strap designed for laptops up to 39.6cm (15.6in), along with multiple organizer pockets for pens, cell phone, and accessories.",
    "https://www.konga.com/product/hp-laptop-bag-15-6-grey-4543505?k_id=AMUZY",
  )
  ITEMS.push(item3);

  export const item4 = new Item(
    [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/H/G/162327_1666024351.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/U/162327_1666024387.jpg" },
      ],
      "product",
      "Portable Laptop Bag - Blue",
    
        "This is a portable laptop bag that comes in a stylish blue color. It is designed to fit laptops of various sizes and provides a convenient and protective way to transport your laptop while on the go. The bag features a durable and lightweight construction with multiple pockets for storing accessories and personal items.",
       "14,999",
       four,
       "It is simply a backpack designed to carry a 15.6\" laptop.",
      "https://www.konga.com/product/portable-laptop-bag-blue-4788971?k_id=AMUZY",
  )
  ITEMS.push(item4);

  export const item5 = new Item(
    [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/S/USB-2-0-SATA-HDD-Case-Enclosure---2-5-Inch-7871629_1.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/S/USB-2-0-SATA-HDD-Case-Enclosure---2-5-Inch-7871626_1.jpg" },
        { id: 2, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/S/USB-2-0-SATA-HDD-Case-Enclosure---2-5-Inch-7871627_1.jpg" },
        { id: 3, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/S/USB-2-0-SATA-HDD-Case-Enclosure---2-5-Inch-7871628_1.jpg" },
      ],
      "product",
      "Samsung USB 2.0 SATA HDD Case Enclosure - 2.5-Inch",
    "The Samsung USB 2.0 SATA HDD Case Enclosure is a portable storage solution for 2.5-inch hard disk drives. It allows users to transfer data and store files securely. The enclosure is easy to use and can be connected to a computer or laptop using a USB 2.0 interface. The durable design ensures that the hard drive is protected from scratches and other forms of damage. It is a convenient and reliable option for those who need to take their data on the go.",
     "3,500",
      four,
      `Brand new high quality

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
      "https://www.konga.com/product/samsung-usb-2-0-sata-hdd-case-enclosure-2-5-inch-2940295?k_id=AMUZY",
  )
  ITEMS.push(item5);

  export const item6 = new Item(
    [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/S/78942_1554696612.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/X/78942_1554696647.jpg" },
        { id: 2, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/A/78942_1554696684.jpg" },
      ],
     "product",
      "Professional Powerpoint Wireless Controller",
        "A Professional PowerPoint Wireless Controller is a device used for remotely controlling Microsoft PowerPoint presentations. It is designed to provide presenters with more flexibility and freedom during their presentations. The device is wireless, allowing the presenter to move around the room while presenting, and can be used to advance slides, go back to previous slides, and control the volume of embedded media. It is commonly used in conference rooms, classrooms, and other settings where presentations are given.",
      "7,000",
      four,
      "--",
      "https://www.konga.com/product/professional-powerpoint-wireless-controller-4274857?k_id=AMUZY",
  )
  ITEMS.push(item6);

  export const item7 = new Item(
    [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/D/175234_1642781872.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/N/175234_1642781894.jpg" },
      ],
       "product",
       "Multifunction OTG USB Card Reader Writer High-speed Micro-sd",
      
        "The Multifunction OTG USB Card Reader Writer is a high-speed device that allows you to read and write data to and from Micro-SD cards. With its OTG (On-The-Go) functionality, it can be used with a variety of devices, including smartphones, tablets, and laptops. The compact size makes it easy to carry around, making it perfect for students, professionals, and anyone who needs to transfer data on the go.",
       "2,700",
       four,
       "--",
       "https://www.konga.com/product/multifunction-otg-usb-card-reader-writer-high-speed-micro-sd-5600811?k_id=AMUZY",
  )
  ITEMS.push(item7);

  export const item8 = new Item(
    [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/a/72757_1475506540.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/a/72757_1475506636.jpg" },
        { id: 2, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/a/72757_1475506767.jpg" },
      ],
       "product",
       "Logitech Wireless Keyboard With Mouse",
      
        "Logitech wireless keyboard - a cordless keyboard for convenient and comfortable typing.",
       "18,500",
       four,
       `Logitech Wireless Keyboard is a computer keyboard that connects to a computer or laptop wirelessly using a receiver that plugs into a USB port. 
      It provides a convenient and clutter-free typing experience with no wires or cables to get in the way. 
      The keyboard typically has a slim profile and may feature additional function keys for quick access to media controls, internet browsing, and other common tasks.
      Some models also include an integrated touchpad or trackpad for mouse functionality. It is compatible with a range of operating systems and devices, making it a
      versatile choice for users who need to switch between different devices or work on the go.`,
       "https://www.konga.com/product/logitech-wireless-keyboard-with-mouse-2907271?k_id=AMUZY",
  )
  ITEMS.push(item8);

  export const item9 = new Item(
    [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/M/193009_1632674336.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/P/193009_1632674368.jpg" },
        { id: 2, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/D/193009_1632674311.jpg" },
      ],
       "product",
       "Prime Guard Usb Desktop Computer Speaker",
      
        "Prime Guard USB desktop computer speaker is a compact and stylish speaker system that delivers high-quality sound for your computer or laptop. It features a plug-and-play USB connection for easy installation and is perfect for gaming, music, movies, and more.",
      "5,000",
       four,
    
       "--",
      "https://www.konga.com/product/prime-guard-usb-desktop-computer-speaker-5449371?k_id=AMUZY",
  )
  ITEMS.push(item9);

  export const item10 = new Item(
    [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/h/Charger-For-HP-14-HP-15-HP-250---Blue-Mouth-7851545.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/h/Charger-For-HP-14-HP-15-HP-250---Blue-Mouth-7851546.jpg" },
      ],
       "product",
       "Charger For HP 14, HP 15 & HP 250 - Blue Mouth",
      
        "The Charger for HP 14, HP 15 & HP 250 - Blue Mouth is a power adapter designed to charge laptops with compatible models. Its blue mouth design makes it visually appealing and easy to distinguish from other chargers.",
      "3,000",
       four,
    
       `Charger power: 45w/65w
      Power output: 19.5v 2.31a/3.33a
      Power input: 100-240v
      Tip pin size: 4.5mm * 3.0mm 
      Hp Pavilion 45w/65w charger p/n: PA-1450-32HE, NSTNN-LA35, 719309-001 and many more
      Hp Ac adapter warranty: 12months
      Contents: Replacement Hp Pavilion 15-n297sa laptop charger & mains cable plug`,
      "https://www.konga.com/product/charger-for-hp-14-hp-15-and-hp-250-blue-mouth-3730656?k_id=AMUZY",
  )
  ITEMS.push(item10);
    
  export const item11 = new Item(
    [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/N/125102_1533672293.jpg" },
    
      ],
       "product",
       "Laptop Charger Power Cable",
      
        "The Laptop Charger Power Cable is an essential accessory for charging laptops. It is designed to connect the laptop adapter to a power outlet, allowing for convenient and reliable charging. The cable is available in various lengths and compatible with a wide range of laptop models.",
      "1,500",
       four,
    
       `BS standard power cable design.
      Connectors: 3 prong pins and 3 sockets.
      Suitable for standard PC computer, PC power supply, PC monitor, Game Console`,
      "https://www.konga.com/product/laptop-charger-power-cable-4018370?k_id=AMUZY",
  )
  ITEMS.push(item11);
    
  export const item12 = new Item(
    [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/U/_1675255235.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/C/198045_1661520271.jpg" },
      ],
       "product",
      "SanDisk Cruzer Blade Usb Flash Drive - 64GB",
      
        "The SanDisk Cruzer Blade USB Flash Drive is a compact and portable storage device with a capacity of 64GB, making it easy to transfer and store large files, photos, videos, music, and more. It features a sleek design and a durable metal casing for protection. The USB 2.0 interface ensures fast data transfer speeds and compatibility with most devices.",
      "5,000",
       four,
      `Colour	Black
      Warranty Period-6 Months
      Brand	-SanDisk
      USB (Connectors)	USB.
      The Sandisk 64GB Cruzer Blade USB Flash Drive on Konga makes storage easier. It has a beautifully designed black casing made of silicon and plastic.
      It is very durable and strong, and the design also includes shock-absorbing materials. This flash drive is a 2.0 USB cable for high-speed transfer.
      Sandisk flash drive protects your files with 128-bit AES encryption and a personal password. You can transfer files to and fro your various devices.
      The 64GB SanDisk flash drive on Konga will give you unlimited storage space; sharing and transferring data and files is very easy.
      It has a fast transfer speed and all data are well protected during the process of transfer from the flash drive.
      Save your important files with Sandisk 64GB Cruzer Blade USB Flash Drive on Konga. It has been built to be compatible with Windows OS, Mac OS, and Linux Kernel.
      Sandisk flash drive will take care of all your storage needs. It is very small, hence easy to carry around. This flash drive will allow you to free up space on your laptop or desktop computer.
      It gives you the opportunity to always have all your files which may include pictures, songs, video files and documents with you at all times.
      With this flash drive, you can retrieve them anytime you want. This is the storage device you definitely need.`,
      "https://www.konga.com/product/sandisk-cruzer-blade-usb-flash-drive-64gb-5842581?k_id=AMUZY",
  )
  ITEMS.push(item12);

  export const item13 = new Item(
    [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/H/X/151588_1635574777.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/N/151588_1634919180.jpg" },
        { id: 2, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/W/151588_1634919216.jpg" },
      ],
       "product",
      "Seagate External Hard Disk 1TB Backup Plus USB 3.0",
      
        "The Seagate External Hard Disk 1TB Backup Plus USB 3.0 is a portable external hard drive that provides a reliable and secure way to store and backup your important data. It has a storage capacity of 1 terabyte and supports USB 3.0 for fast data transfer. The sleek and compact design makes it easy to carry around, while the included backup software allows for easy data management and protection.",
      "23,500",
       four,
      "Color: Black, ROM: 1TB, Quantity: 1 set, Material: other, Brand: Seagate, Type: HDD, Capacity / ROM: 1TB, Application: Portable Drive, Interface: USB 3.0, Application: Others,N/A, Packing List: 1 x External Hard Disk, 1 x USB 3.0 Cable, 1 x User Manual",
      "https://www.konga.com/product/seagate-external-hard-disk-1tb-backup-plus-usb-3-0-5502761?k_id=AMUZY",
  )
  ITEMS.push(item13);

  export const item14 = new Item(
    [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/I/184831_1612405420.jpg" },
      ],
       "product",
      "Transcend USB 3.1 Store Jet Shock Resistant Portable Hard Drive - 1TB",
      
        "The Seagate External Hard Disk 1TB Backup Plus USB 3.0 is a portable external hard drive that provides a reliable and secure way to store and backup your important data. It has a storage capacity of 1 terabyte and supports USB 3.0 for fast data transfer. The sleek and compact design makes it easy to carry around, while the included backup software allows for easy data management and protection.",
      "56,000",
       four,
      `Transcend 1TB USB External Hard Drive is the perfect storage device for backing up all your files. It features blazing fast transfer rates, huge storage capacity and a unique three-layer shock
      protection system. Its rugged design yet lightweight nature makes it very easy to carry around. It is compatible with all computers and laptops no matter the operating system they run. Its 1TB      
      capacity affords you the opportunity to backup all your documents and multimedia files from your computer in case of system failure. The incredible ultra-high transfer speed makes file sharing easy
      and convenient. It has an LED power/data transfer activity indicator which comes on once it is plug into a laptop or computer.`,
      "https://www.konga.com/product/transcend-usb-3-1-store-jet-shock-resistant-portable-hard-drive-1tb-5107991?k_id=AMUZY",
  )
  ITEMS.push(item14);

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

  export const item15 = new Item(
    [
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
      "product",
      
      "Samsung Galaxy A13 - 6.6\" -128GB ROM-4GB - RAM-50MP - Dual SIM - 4G LTE - Fingerprint - 5000mAh - Peach",
      
      "The Samsung Galaxy A13 is a mid-range smartphone with a large 6.6-inch display, 128GB of internal storage, and 4GB of RAM for smooth performance. It features a powerful 50MP rear camera for high-quality photos and videos, as well as a dual SIM card slot and 4G LTE connectivity for versatile and fast network options. The phone also includes a fingerprint scanner for added security and a long-lasting 5000mAh battery. Its peach color adds a stylish touch to its overall design.",
      "128,000",
      four,
      samsunga31,
      "https://www.konga.com/product/samsung-galaxy-a13-6-6-128gb-rom-4gb-ram-50mp-dual-sim-4g-lte-fingerprint-5000mah-peach-5680934?k_id=AMUZY"
  )
  ITEMS.push(item15);

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

  export const item16 = new Item(
    [
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
      "product",
      
        "Oppo A96 - 6.59\" - 8GB RAM+256GB ROM - Android 11 - 50mp + 16mp - 4g - 5000mAh - Dual Sim -Black",
      
        "The Oppo A96 is a high-end smartphone with a large 6.59-inch AMOLED display and a powerful octa-core Mediatek Helio P95 processor. It comes with 8GB of RAM and 256GB of internal storage, and runs on the latest Android 11 operating system with ColorOS 11.1. The phone features a 50MP+16MP dual rear camera system and a 16MP front-facing camera for selfies. It supports dual SIM cards, 4G LTE, Wi-Fi, Bluetooth 5.1, and GPS. The Oppo A96 is equipped with a large 5000mAh battery that supports fast charging, and is available in black color.",
      "188,060",
      four,
      oppoa96,
      "https://www.konga.com/product/samsung-galaxy-a13-6-6-128gb-rom-4gb-ram-50mp-dual-sim-4g-lte-fingerprint-5000mah-peach-5680934?k_id=AMUZY"
  )
  ITEMS.push(item16);

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

  export const item17 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/A/118566_1636109086.jpg",
        },
      ],
      "product",
      
        "Nokia C30 - 6.82\" Hd+ - 3gb Ram - 64gb Rom - Dual Sim - 4g Lte - Android 11 - 6000mah - Green",
      
        "The Nokia C30 is a mid-range smartphone with a large 6.82-inch HD+ display and a powerful octa-core processor. It comes with 3GB of RAM and 64GB of internal storage, and runs on the latest Android 11 operating system. The phone supports dual SIM cards, 4G LTE, Wi-Fi, Bluetooth, and GPS. It is equipped with a large 6000mAh battery that supports fast charging, and is available in green color.",
      "72,670",
      five,
      nokiac30,
      "https://www.konga.com/product/nokia-nokia-c30-6-82-hd-3gb-ram-64gb-rom-dual-sim-4g-lte-android-11-6000mah-green-5509285?k_id=AMUZY"
  )
  ITEMS.push(item17);

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

  export const item18 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/K/118566_1592897938.jpg",
        },
      ],
      "product",
      
        "Tecno Camon 15 Premier 6GB Ram+128gb Rom-ice Jadeite",
      
        "The Tecno Camon 15 Premier features 6GB of RAM and 128GB of internal storage, along with an Ice Jadeite color option.",
      "100,000",
      five,
      // keyfeat: "these are where I will write the key features of the product",
      tecnoc15,
      "https://www.konga.com/product/tecno-camon-15-premier-6gb-ram-128gb-rom-ice-jadeite-4769115?k_id=AMUZY"
  )
  ITEMS.push(item18);

  let samsunga03 = <ul>
<li>Display: 6.5-inch</li>
<li>Storage: 32GB ROM</li>
<li>RAM: 2GB</li>
<li>Battery: 5000mAh</li>
<li>Connectivity: Dual SIM, 4G LTE</li>
<li>Color: Black</li>
</ul>

  export const item19 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/J/O/67343_1641381195.jpg",
        },
      ],
      "product",
      
        "Samsung Galaxy A03 Core - 6.5\" - 32GB ROM - 2GB RAM - Dual SIM - 4G LTE - 5000mAh - Black",
      
        "The Samsung Galaxy A03 Core features a 6.5-inch display, 32GB of internal storage, 2GB of RAM, a 5000mAh battery, and support for dual SIM and 4G LTE. It comes in the color black.",
      "63,999",
      five,
      // keyfeat: "these are where I will write the key features of the product",
      samsunga03,
      "https://www.konga.com/product/samsung-galaxy-a03-core-6-5-32gb-rom-2gb-ram-dual-sim-4g-lte-5000mah-black-5577143?k_id=AMUZY"
  )
  ITEMS.push(item19);

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

  export const item20 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/E/50246_1636336825.jpg",
        },
      ],
      "product",
      
      "Tecno Camon 18i(cg6)-6.6\" Hd+ -128GB ROM - 4GB RAM -48mp8mp-5000mAh-4g Lte- Grey",
      
      "The Tecno Camon 18i (CG6) features a 6.6-inch HD+ display, 128GB of internal storage, 4GB of RAM, dual rear cameras with 48MP and 8MP lenses, a 5000mAh battery, and support for 4G LTE connectivity. It comes in the color grey.",
      "99,000",
      four,
      // keyfeat: "these are where I will write the key features of the product",
      tecnoc18i,
      "https://www.konga.com/product/tecno-camon-18i-cg6-6-6-hd-128gb-rom-4gb-ram-48mp-8mp-5000mah-4g-lte-grey-5513155?k_id=AMUZY"
  )
  ITEMS.push(item20);

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

  export const item21 = new Item(
    [
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
       "product",
       "Nokia 110 (Africa Edition) - Dual SIM - 1.77 Display - Wireless FM Radio - Games - MP3 Music Player- Black",
      
        "The Nokia 110 (Africa Edition) is a budget-friendly mobile phone with a 1.77-inch display and dual SIM functionality. It features a wireless FM radio, MP3 music player, games, and a built-in flashlight. It also comes with 4MB of RAM and 4MB of internal storage, which can be expanded up to 32GB with a microSD card. The phone is powered by a removable Li-Ion 800 mAh battery and is available in black color.",
       "11,999",
       four,
       nokia110,
     "https://www.konga.com/product/nokia-110-africa-edition-dual-sim-1-77-display-wireless-fm-radio-games-mp3-music-player-black-5681931?k_id=AMUZY",
  )
  ITEMS.push(item21);

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

  export const item22 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/H/179106_1599586049.jpg",
        },
      ],
       "product",
       "105 - 1.8 - 128MB RAM - Dual Sim - Black",
      
        "The device is a mobile phone with a 1.8-inch display, designed in a black color. It comes equipped with 128MB of RAM and has dual-SIM capability, allowing for the use of two SIM cards at the same time.",
       "10,500",
       four_half,
    //   keyfeat: "these are where I will write the key features of the product",
       onezerofive,
     "https://www.konga.com/product/105-1-8-128mb-ram-dual-sim-black-4934955?k_id=AMUZY",
  )
  ITEMS.push(item22);

  let x360 = <ul>
  <li>Screen size: 14 inches</li>
  <li>Processor: 11th Generation Intel Core i3-1115G4</li>
  <li>RAM: 8GB DDR4 SDRAM</li>
  <li>Storage: 256GB SSD</li>
  <li>Operating system: Windows 10</li>
  <li>Display resolution: 1920 x 1080 pixels</li>
  <li>Graphics: Intel UHD Graphics</li>
  <li>Touchscreen: Yes</li>
  <li>Wireless communication: 802.11ax Wi-Fi 6 and Bluetooth 5.2</li>
  <li>Ports: USB Type-C, USB Type-A, HDMI, SD card reader, and headphone/microphone combo jack</li>
  <li>Dimensions: 12.76 x 8.78 x 0.78 inches</li>
  <li>Weight: 3.55 pounds</li>
  <li>Color: Silver</li>
</ul>

  export const item23 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/R/204979_1657814725.jpg",
        },
        {
          id: 1,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/H/204979_1657814742.jpg",
        },
        {
          id: 2,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/P/204979_1657814754.jpg",
        },
      ],
       "product",
       "HP Pavilion X360 Convertible 14 - 14\" - Core I3 - 256GB SSD - 8GB RAM - Touchscreen -Win 10 -Silver",
      
      "The HP Pavilion X360 Convertible 14 is a versatile laptop with a 14\" touchscreen display. It features an Intel Core i3 processor, 8GB of RAM, and a 256GB SSD for fast and efficient performance. The laptop runs on Windows 10 and comes in a stylish silver color. Its 360-degree hinge allows you to easily switch between laptop, tent, stand, and tablet modes.",
       "305,000",
       five,
    //   keyfeat: "these are where I will write the key features of the product",
       x360,
     "https://www.konga.com/product/hp-pavilion-x360-convertible-14-14-core-i3-256gb-ssd-8gb-ram-touchscreen-win-10-silver-5789757?k_id=AMUZY",
  )
  ITEMS.push(item23);

  let x360512 = <ul>
  <li>Brand: HP</li>
  <li>Model: Pavilion X360 Convertible 14</li>
  <li>Screen Size: 14 inches</li>
  <li>Screen Resolution: 1920 x 1080 pixels</li>
  <li>Processor: Intel Core i5</li>
  <li>Processor Speed: 1.6 GHz base frequency, up to 4.2 GHz with Intel Turbo Boost Technology</li>
  <li>RAM: 8 GB DDR4-3200 SDRAM (1 x 8 GB)</li>
  <li>Storage: 512 GB PCIe NVMe M.2 SSD</li>
  <li>Graphics: Intel Iris Xe Graphics</li>
  <li>Operating System: Windows 10 Home</li>
  <li>Ports: 1 SuperSpeed USB Type-C 5Gbps signaling rate; 2 SuperSpeed USB Type-A 5Gbps signaling rate; 1 HDMI 1.4b; 1 AC smart pin; 1 headphone/microphone combo</li>
  <li>Wireless Connectivity: Realtek Wi-Fi 5 (2x2) and Bluetooth 5 combo</li>
  <li>Audio: B&O, dual speakers, HP Audio Boost</li>
  <li>Webcam: HP Wide Vision 720p HD camera with integrated dual array digital microphones</li>
  <li>Color: Natural Silver</li>
  <li>Dimensions: 32.4 x 22.1 x 1.99 cm</li>
  <li>Weight: 1.61 kg</li>
</ul>

  export const item24 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/W/204979_1657811640.jpg",
        },
        {
          id: 1,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/U/204979_1657811627.jpg",
        },
        {
          id: 2,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/D/204979_1657811655.jpg",
        },
        {
          id: 3,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Y/V/204979_1657811669.jpg",
        },
        {
          id: 4,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/Y/204979_1657811685.jpg",
        },
      ],
       "product",
       "HP Pavilion X360 Convertible 14 - Core I5 - 512GB SSD - 8GB RAM - Touchscreen - Windows 10",
      
      "The HP Pavilion X360 Convertible 14 is a powerful laptop featuring an Intel Core i5 processor, 512GB SSD storage, and 8GB of RAM. It also includes a 14-inch touchscreen display and runs on Windows 10, providing a smooth and user-friendly experience. The 360-degree hinge allows for easy switching between laptop, tablet, and tent mode, making it a versatile device for work or entertainment.",
       "425,000",
       five,
       x360512,
     "https://www.konga.com/product/hp-pavilion-x360-convertible-14-core-i5-512gb-ssd-8gb-ram-touchscreen-windows-10-5791383?k_id=AMUZY",
  )
  ITEMS.push(item24);


  export const item25 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/K/160851_1661507966.jpg",
        },
        {
          id: 1,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/S/160851_1661507981.jpg",
        },
        {
          id: 2,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/A/160851_1661507993.jpg",
        },
      ],
       "product",
       "Big Size Multi Purpose Khamo Khaki Backpack - Brown",
      
      "The Big Size Multi Purpose Khamo Khaki Backpack in Brown is a versatile backpack suitable for various purposes. With a spacious main compartment and multiple pockets, it provides ample storage space for everyday essentials. Its durable and waterproof material makes it ideal for outdoor activities or travel. The backpack features adjustable straps for comfortable carrying and a stylish khaki brown design.",
       "9,450",
       five,
       `Big Size Multi Purpose Khamo Khaki Backpack - Brown

       has all the space and organization features to meet your urban gear needs with a large main compartment.
       
       Designed with your high expectations in mind. From the train, to the office, from the field to the classroom the HP 15.6" Backpack brings different aspects of your life together with hardy protection, distinct style
       
       Ideal for work, school, and weekend outings. Unique modern designs, padded comfort, and easy access to your essentials The Big Size Multi Purpose Backpack - Black  has all the space and organization features to meet your urban gear needs with a large main compartment.
       
       Size : 
       
       Hight : 25 inches 
       
       Breadth : 9 inches  `,
     "https://www.konga.com/product/big-size-multi-purpose-khamo-khaki-backpack-brown-5842180?k_id=AMUZY",
  )
  ITEMS.push(item25);

  export const item26 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/E/195079_1653589100.jpg",
        },
        {
          id: 1,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/T/195079_1653589132.jpg",
        },
        {
          id: 2,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/M/195079_1653589220.jpg",
        },
      ],
       "product",
       "Waterproof Multipurpose 3 In 1 USB Laptop Backpack - 15-inches - Red",
      
      "The Waterproof Multipurpose 3 In 1 USB Laptop Backpack in red is a versatile and practical backpack that can fit laptops up to 15 inches. It is made of waterproof material, making it perfect for use in any weather condition. The backpack features multiple compartments for organizing your items, and includes a USB port for convenient charging on the go. It can be used as a backpack, shoulder bag or handbag, making it suitable for various occasions.",
       "13,000",
       five,
       `This designer backpack was designed to suit your test in all ramifications. It has two compartments inside and outside. The compartments includes Laptop compartment, Tablet compartment, Smartphones compartment,Notepad compartment and compartment for pen and other accessories. it was made with quality material that makes it resistant to water.It has a USB connector which can connect to Power bank, USB jack and Phones.
       Length- 40cm
       Width- 28cm
       Breadth- 15cm`,
     "https://www.konga.com/product/waterproof-multipurpose-3-in-1-usb-laptop-backpack-15-inches-red-5738895?k_id=AMUZY",
  )
  ITEMS.push(item26);

  export const item27 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/D/169767_1678230706.jpg",
        },
        {
          id: 1,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/M/169767_1678230729.jpg",
        },
        {
          id: 2,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/D/169767_1678230835.jpg",
        },
      ],
       "product",
       "Fashion House Double Sided Reversible Leather Belt For Men",
      
      "The Fashion House Double Sided Reversible Leather Belt is a stylish and versatile accessory designed for men. It features a reversible design, allowing you to wear it with either the black or brown side facing out, depending on your outfit. The belt is made from high-quality leather, ensuring durability and long-lasting wear. The classic design is perfect for both formal and casual occasions, making it a must-have accessory in any man's wardrobe.",
       "2,999",
       five,
       `Material: Leather
       Product Category: Belt
       Applicable age: Adult
       Belt buckle Material: alloy
       Gender: Male
       Perfect fit for your trousers `,
     "https://www.konga.com/product/fashion-house-double-sided-reversible-leather-belt-for-men-4920811?k_id=AMUZY",
  )
  ITEMS.push(item27);

  export const item28 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/B/87533_1541491205.jpg",
        },
      ],
       "product",
       "Men's Belt",
      
      "Men's belt is a clothing accessory worn around the waist to hold up pants or shorts.",
       "2,700",
       five,
       `Color: Black
       Material: Leather
       Durable`,
     "https://www.konga.com/product/fashion-house-double-sided-reversible-leather-belt-for-men-4920811?k_id=AMUZY",
  )
  ITEMS.push(item28);

  export const item29 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/U/87533_1541493209.jpg",
        },
      ],
       "product",
       "Men's Formal Belt - Brown",
      
      "Men's formal belt in brown color.",
       "2,600",
       five,
       `Color: Brown
       Material: Leather
       Durable`,
     "https://www.konga.com/product/mens-formal-belt-brown-4110425?k_id=AMUZY",
  )
  ITEMS.push(item29);


  export const item30 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/N/143607_1569603983.jpg",
        },
        {
          id: 1,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/S/143607_1569604028.jpg",
        },
        {
          id: 2,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/N/143607_1569604060.jpg",
        },
      ],
       "product",
       "CAP-Best Face Cap",
      
      "Men's face cap.",
       "2,700",
       four,
       `Item Type: Baseball Cap
       Gender: Unisex
       Colour: Black
       Strap Type: Adjustable back
       Hat Size: One Size Fits All`,
     "https://www.konga.com/product/cap-best-face-cap-4485302?k_id=AMUZY",
  )
  ITEMS.push(item30);

  export const item31 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/S/61262_1570786990.jpg",
        },
        {
          id: 1,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/I/61262_1570061534.jpg",
        },
      ],
       "product",
       "Adex Silk Durag - Black",
      
      "Men's face cap.",
       "1,999",
       four,
       `-Durable 
        Colour - Black
        Brand	- Adex
       -Easy to wear 
       -Affordable price `,
     "https://www.konga.com/product/adex-silk-durag-black-4498714?k_id=AMUZY",
  )
  ITEMS.push(item31);

  export const item32 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/Y/85382_1636409250.jpg",
        },
      ],
       "product",
       "Plain Face/baseball Cap - Blue",
      
      "Men's snapback like, baseball cap. Colour blue",
       "2,500",
       four,
       `1. It is very fashionable and unique

       2. Sun-shade and sunscreen
       
       3. Universal size suitable for adult
       
       4. Take it, you will be a beautiful beautiful scenery line in the crowd
       
       5. It is a good gift for your lover, family, friend and coworkers
       
       6- Color Blue`,
     "https://www.konga.com/product/plain-face-baseball-cap-blue-5517023?k_id=AMUZY",
  )
  ITEMS.push(item32);

  export const item33 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/H/A/169767_1584523889.jpg",
        },
      ],
       "product",
       "Unisex Ankle Socks - Six Pairs-in-1",
      
      "Unisex Ankle Socks - Six Pairs-in-1 are a pack of versatile and comfortable socks that can be worn by both men and women. They come in a set of six pairs and are designed to fit snugly around the ankle, providing all-day comfort and support. They are perfect for everyday wear, sports activities, and casual occasions.",
       "1,500",
       five,
       `6 Pairs
       Easy to wear  
       Easy to maintain  
       Classy
       Stylish 
       Fashionable
       Affordable
       Black/White/Ash`,
     "https://www.konga.com/product/unisex-ankle-socks-six-pairs-in-1-4678178?k_id=AMUZY",
  )
  ITEMS.push(item33);

  export const item34 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/i/Miracle-Copper-Infused-Anti-Fatigue-Compression-Socks-3736531.jpg",
        },
        {
          id: 1,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/i/Miracle-Copper-Infused-Anti-Fatigue-Compression-Socks-3736532.jpg",
        },
        {
          id: 2,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/i/Miracle-Copper-Infused-Anti-Fatigue-Compression-Socks-3736530.jpg",
        },
      ],
       "product",
       "Dr Miracle's Miracle Copper-Infused Anti-Fatigue Compression Socks",
      
      "Reliever Compression socks",
       "2,500",
       five,
       `Brand	- Dr Miracle's
       These specially designed, graduated compression socks have copper infused fibers to help enhance circulation, reduce swelling, ease pains, and soothe tired, aching legs and feet. Moisture-wicking fibers help keep feet dry, healthy and comfortable, while the anti-microbial benefits of copper naturally control odor-causing bacteria and fungi. Great for men or women. Specify size: Small fits Womens shoe sizes 6-9 1/2 and Mens 5- 9 1/2. Large/Xlarge fits Womens 10-13 1/2 and Mens 10- 12 1/2. Machine Washable Cold Water`,
     "https://www.konga.com/product/dr-miracles-miracle-copper-infused-anti-fatigue-compression-socks-2193222?k_id=AMUZY",
  )
  ITEMS.push(item34);

  export const item35 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/F/121150_1652044062.jpg",
        },
        {
          id: 1,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/S/121150_1652044092.jpg",
        },
        {
          id: 2,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/F/121150_1652044141.jpg",
        },
        {
          id: 3,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/J/D/121150_1652044352.jpg",
        },
        {
          id: 4,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/H/121150_1652044620.jpg",
        },
      ],
       "product",
       "Anchor Cufflinks - Silver",
      
      `Colour	Silver
      Glittering Appearance and Non TarnishUnique classic cufflinks complements any outfit. Whether its wedding or a special occasion, show off your style when using these gorgeous cufflinks.
      Unique and excellent quality, light-weight
      An ideal gift for yourself and your friends.`,

       "3,500",
       four,
       `Light weight 
       Unique 
       Non tarnish 
       Durable `,
     "https://www.konga.com/product/anchor-cufflinks-silver-5716184?k_id=AMUZY",
  )
  ITEMS.push(item35);

  export const item36 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/F/68096_1628192615.jpg",
        },
      ],
       "product",
       "Men's Classic Cufflinks - Black",
      
      `100% high quality!!
      Modern cufflinks will complement any outfit. Whether it's a wedding or a special occasion, show off your modern style when sporting these gorgeous cufflinks.
      Excellent quality
      Light-weight and everlasting shine
      The must-have accessory for well-dressed wardrobe
      Perfect for any occasions: Office, Meetings, Events, Anniversaries etc, elevating fashionable image to your personal appearance
      An ideal gift for your boyfriend, father or relatives`,

       "3,995",
       four,
       `Cuff Links
       Men
       Unique
       Durable
       Nice
       Awesome
       No Box`,
     "https://www.konga.com/product/mens-classic-cufflinks-black-5369378?k_id=AMUZY",
  )
  ITEMS.push(item36);

  export const item37 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/J/B/187502_1626187832.jpg",
        },
      ],
       "product",
       "Men's Cufflinks",
      
      `This is the best cufflinks.it well suits your dressing and can be used on any ocassion.sold at the best price on De rozzy store.`,

       "3,200",
       four,
       `Cuff Links
       Men
       Unique
       Durable
       Nice
       Awesome
       No Box`,
     "https://www.konga.com/product/mens-cufflinks-5341522?k_id=AMUZY",
  )
  ITEMS.push(item37);

  export const item38 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/B/160686_1571479313.jpg",
        },
        {
          id: 1,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/G/160686_1571479335.jpg",
        },
        {
          id: 2,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/Z/160686_1571479352.jpg",
        },
      ],
       "product",
       "Fashion House Men's Suede Leather Ankle Boots - Blue",
      
      `Suede Ankle Boots profile in rich chestnut suede. It has an open lacing system which ensures a proper fit at all times. You can use it to achieve different fashion looks by choosing the right combination of shirts and trousers. Wearing it with a well-fitted blazer, long sleeve shirt and chinos will give you an extra smart casual look.

      A must have for every gentle man. Sizes 9 = 42, 11= 44,`,

       "3,200",
       four,
       `Brand	Fashion House
       Fastening	Lace-up
       Heel Type	Not Applicable
       Shoe Fit	True to Size`,
     "https://www.konga.com/product/fashion-house-mens-suede-leather-ankle-boots-blue-4512153?k_id=AMUZY",
  )
  ITEMS.push(item38);

  export const item39 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/Q/164518_1654171509.jpg",
        },
        {
          id: 1,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/V/164518_1654171523.jpg",
        },
        {
          id: 2,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/Z/164518_1654171544.jpg",
        },
      ],
       "product",
       "Men's Casual Sneakers",
      
      `CASUAL SNEAKERS - Compared to traditional sneakers, this sneakers are made to be a light and stable wearable accessory to help you easily capture life's moments.
      COMFORT FLATS - Comfort outsole for traction. These flat shoes are specially designed to bring every one who buys comfort.
      EASY TO SLIP ON - Elastic “V” for easy on/off. Why let the shoes getting in your way while you walk? Get one pair of this MEN'S and women's flat shoe and experience convience in putting on and taking off.
      CLASSIC STYLE - This casual Slip on comes in classic white color. With this gorgeous and stable designs, flats go well with jeans, shorts, skirts, chinos and your everyday casual wear`,

       "4,999",
       four,
       `Feels very comfortable
       easy to wear (just slip on)
       Not found in the market
       more than 2 years guarantee
       Breathable sole`,
     "https://www.konga.com/product/mens-casual-sneakers-5748708?k_id=AMUZY",
  )
  ITEMS.push(item39);

  export const item40 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/T/187130_1636559495.jpg",
        },
        {
          id: 1,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/P/I/187130_1636559537.jpg",
        },
      ],
       "product",
       "Unisex Sneaker",
      
      `Toe style: round head
      Closed: lace-up
      Sole Material: RubberÈ`,

       "12,000",
       four,
       `US 8 = UK 7 = EU=40.5/CN 40 = Feet length 25cm; 
       US 8.5 = UK7.5 = EU/CN 41 = Feet length 25.5cm; 
       US 9 = UK 8 = EU/CN 42 = Feet length 26cm; 
       US 10 = UK 9 = EU/CN 43 = Feet length 26.5cm; 
       US 10.5 = UK 9.5 = EU/CN 44 = Feet length 27cm; 
       US 11.5 = UK 10 = EU/CN 45 = Feet length 27.5cm;
       US 12 = UK 11 = EU/CN 46 = Feet length 28cm;
       Fashionable & Comfortable.
       This Shoes is very fashion and popular.
       This is very popular design, we believe you will love it very much!
       Out sole Material:Rubber`,
     "https://www.konga.com/product/unisex-sneaker-5220377?k_id=AMUZY",
  )
  ITEMS.push(item40);

  export const item41 = new Item(
    [
      {
        id: 0,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/N/143826_1635837202.jpg",
      },
      {
        id: 1,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/F/143826_1635837098.jpg",
      },
      {
        id: 2,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/K/143826_1635837158.jpg",
      },
      {
        id: 3,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/Y/143826_1635837237.jpg",
      },
      ],
       "product",
       "Men Classic Sneakers",
      
      `This Smart Classic Sneakers is comfy and allows you the luxury of getting a lasting wear all day.
      Suitable for men and women. Lightweight and affordable.
      Has balanced soles and comfy insoles. 
      Drip all day with comfort.`,

       "7,500",
       four,
       `Top notch
       Classic
       Everlasting
       Rubber sole
       Canvas material
       Strong`,
     "https://www.konga.com/product/men-classic-sneakers-5504755?k_id=AMUZY",
  )
  ITEMS.push(item41);


  export const item42 = new Item(
    [
      {
        id: 0,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/o/Loafers-With-Belt-Detail---Black-6136812_1.jpg",
      },
      {
        id: 1,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/o/Loafers-With-Belt-Detail---Black-6136813_1.jpg",
      },
      {
        id: 2,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/o/Loafers-With-Belt-Detail---Black-6136814_1.jpg",
      },
      {
        id: 3,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/o/Loafers-With-Belt-Detail---Black-6136815_1.jpg",
      },
      ],
       "product",
       "O'tega Loafers With Belt Detail - Black",
      
      `Brand	O'tega
      Fastening	Slip-on
      Heel Type	Flat
      Shoe Fit	True to Size
      Loafers With Belt Detail is made from superior quality upper leather and inner linining, the sole is ready made real rubber, its a very comfortable casual shoe.`,

       "9,999",
       four,
       `Style: loafers

       low heel
       
       Colour: Black`,
     "https://www.konga.com/product/otega-loafers-with-belt-detail-black-2039094?k_id=AMUZY",
  )
  ITEMS.push(item42);

  export const item43 = new Item(
    [
      {
        id: 0,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/i/Simple-Lace-Up-Formal-Shoes-6750037_1.jpg",
      },
      {
        id: 1,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/i/Simple-Lace-Up-Formal-Shoes-6750038_1.jpg",
      },
      {
        id: 2,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/i/Simple-Lace-Up-Formal-Shoes-6750039_1.jpg",
      },
      {
        id: 3,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/i/Simple-Lace-Up-Formal-Shoes-6750040_1.jpg",
      },
      {
        id: 4,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/i/Simple-Lace-Up-Formal-Shoes-6750041_1.jpg",
      },
      ],
       "product",
       "O'tega Simple Lace-Up Formal Shoes",
      
      `Simple lace formal lace-up is made from top quality upper and inner leather,the sole is ready made rubber with a low heel,this shoe is light and very comfortable.`,

       "11,750",
       four,
       `colour: black
       material: leather
       Sole:rubber
       Upper:leather`,
     "https://www.konga.com/product/otega-simple-lace-up-formal-shoes-1468936?k_id=AMUZY",
  )
  ITEMS.push(item43);

  export const item44 = new Item(
    [
        {
          id: 0,
          img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/S/56270_1639131264.jpg",
        },
      ],
       "product",
       "Men Skin Design Patent Hook Shoe - Black",
      
      `The perfect skin Top Shoe with Hook design.
      Can be worn to weddings, parties, office, formal and informal events.
      its glossy patent leather makes the shoe eye catching.`,

       "8,999",
       four,
       `Colour : Black
       Event : Formal and Informal
       New
       Comfortable and non slippery
       Value for your money
      Fastening	Slip-on
      Heel Type	Flat
      Shoe Fit	Wide fit`,
     "https://www.konga.com/product/men-skin-design-patent-hook-shoe-black-5557465?k_id=AMUZY",
  )
  ITEMS.push(item44);

  export const item45 = new Item(
    [
      {
        id: 0,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/L/169529_1586038754.jpg",
      },
      {
        id: 1,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/Z/169529_1586038965.jpg",
      },
      {
        id: 2,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/G/169529_1586039013.jpg",
      },
      ],
       "product",
       "Glossy Men's Shoe",
      
      `Have you ever desired to wear an executive and classy shoe that gives you an outstanding outfits every time? Have you ever dreamed of wearing a shoe that in highly executive and classy with glossy touch?  I want to sincerely recommend this shoe for you. `,

       "9,000",
       five,
       `Highly executive, outstanding and exceptionally distinguishing type of shoe
       Fashionable & Comfortable for gentlemen who understand fashion.
       Very light and extremely easy to wear and remove
       Excellent craftsmanship. This will make you stand out anywhere. 
       This shoe is made with great attention to details.
       This is very unique design, we believe you will love it very much! Upper material made of leather. Sole is well made and uniquely designed.`,
     "https://www.konga.com/product/glossy-mens-shoe-4689122?k_id=AMUZY",
  )
  ITEMS.push(item45);

  export const item46 = new Item(
    [
      {
        id: 0,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/C/168938_1597495735.jpg",
      },
      {
        id: 1,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/E/168938_1597495704.jpg",
      },
      {
        id: 2,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/H/168938_1597495721.jpg",
      },
      ],
       "product",
       "Afre Blue Spray Suede Shoe Polish",
      
      `Afre suede shoe polish keeps your shoe shining and lasts longer than expected. It makes your feet stand out among others. It maintains the beauty of the shoe at the new level. It makes the shoe shining and different as the case may be. It is good to buy and sell at your store or shop. It can be added as a gift to your man. Every man must have it to maintain the beauty and longevity of the footwear. It does not allow the material of your shoe to easily fade out.`,

       "2,000",
       four,
       `New
       Spray
       Shoe Polish
       Suede spray
       shoe restorer 
       Super cool
       Blue`,
     "https://www.konga.com/product/afre-blue-spray-suede-shoe-polish-4876146?k_id=AMUZY",
  )
  ITEMS.push(item46);

  export const item47 = new Item(
    [
      {
        id: 0,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/r/Travel-Shoe-Care-Kit-1182102_4.jpg",
      },
      {
        id: 1,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/r/Travel-Shoe-Care-Kit-1182103_4.jpg",
      },
      {
        id: 2,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/r/Travel-Shoe-Care-Kit-1182104_4.jpg",
      },
      ],
       "product",
       "Travel Shoe Care Kit",
      
      `Shoe care kit is essential for every traveller or someone always on the road. Its comes with shoe polish, shoe brush, shoe shine, lint brush and shoe horn. .all in a zipper pouch`,

       "3,500",
       five,
       `shoe care`,
     "https://www.konga.com/product/travel-shoe-care-kit-1480043?k_id=AMUZY",
  )
  ITEMS.push(item47);

  export const item48 = new Item(
    [
      {
        id: 0,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/N/140823_1598207321.jpg",
      },
      ],
       "product",
       "Fashion Front Black Classy Male Basket Slips",
      
      `Real Footwears is one of its kind when dealing with quality, classic, unique, long lasting and affordable footwears. 
      Our products are made of the best quality materials which makes us unique in what we do.
      We have different quality designs for both male and female which makes you stand out and gives your feet the best classy look. `,

       "8,550",
       four,
       `Classy and Unique handmade design. 
       Made of High Quality upper leather. 
       Made of high quality leather lined insole. 
       Made of high quality nora outer sole and crape top heel. `,
     "https://www.konga.com/product/fashion-front-black-classy-male-basket-slips-4892630?k_id=AMUZY",
  )
  ITEMS.push(item48);

  export const item49 = new Item(
    [
      {
        id: 0,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/Z/157868_1627739090.jpg",
      },
      {
        id: 1,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/H/157868_1627858448.jpg",
      },
      ],
       "product",
       "Unisex Casual Flip-flops Slippers- Dark Brown",
      
      `Men's Summer Flip-flops Slippers Beach Sandals Indoor&Outdoor Casual Shoes
      Gener: Men
      
      Material:EVA
      
      Sole Material:EVA
      
      Style: Fashion,Casual
      
      Item Type:Flip-flops
      
      Heel Type: Flat with
      
      Appropriate Season: Spring,Summer
      
      Occasion: Indoor&Outdoor
      
      Package: 1 Pair Flip-flop`,

       "3,200",
       four,
       `Style:Leisure
       100%  new and high quality
       Gender:men
       Occasion:Home,Beach
       Durable`,
     "https://www.konga.com/product/unisex-casual-flip-flops-slippers-dark-brown-5365435?k_id=AMUZY",
  )
  ITEMS.push(item49);

  export const item50 = new Item(
    [
      {
        id: 0,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/X/I/157868_1622389937.jpg",
      },
      {
        id: 1,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/I/F/157868_1622389964.jpg",
      },
      {
        id: 2,
        img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/D/157868_1622390015.jpg",
      },
      ],
       "product",
       "Men's Summer Flip-flops - Grey",
      
      `Men's Summer Flip-flops Slippers Beach Sandals Indoor&Outdoor Casual Shoes
      Gener: Men
      
      Material:EVA
      
      Sole Material:EVA
      
      Style: Fashion,Casual
      
      Item Type:Flip-flops
      
      Heel Type: Flat with
      
      Appropriate Season: Spring,Summer
      
      Occasion: Indoor&Outdoor
      
      Package: 1 Pair Flip-flop`,

       "3,200",
       four,
       `Indoor&Outdoor Casual Slippers-Gray
       Comfortable for beach wear
       Type- Flip Flop
       Easy to carry`,
     "https://www.konga.com/product/mens-summer-flip-flops-grey-5271885?k_id=AMUZY",
  )
  ITEMS.push(item50);

// ALL ITEMS END

// 
// 
// 
// 
// 
// 
// 


export default function Konga(props) {
  let link = useLocation()
  PATHS.push(link.pathname)

    const mainNav =[
        {name : "Computers and Accessories" ,href : KongaDefault("computers-and-accessories")},
        {name : "Phones and Tablets",href : KongaDefault("phones-and-tablets") },
        {name : "Electronics" ,href : KongaDefault("electronics") },
        {name : "Konga Fashion" ,href : KongaDefault("konga-fashion")},
        {name : "Home and Kitchen",href : KongaDefault("home-and-kitchen") },
        {name : "Baby,Kids and Toys" ,href : KongaDefault("baby-kids-and-toys") },
        {name : "Other Categories" ,href : KongaDefault("other-categories") },
    ];

    
    // var link = useLocation();

    // PRODUCTS
    // MAX OF SIX IMAGES PER ITEM
    // THE HEIGHT OF ALL IMAGES ARE INHERITED FROM PARENT

    ITEMS.forEach((item)=>{
        props.updateProds(item.title,item.src,item.subtitle,item.price,item.star,item.spec,item.prodlink);
      })

    return (
        <div className="relative w-full mainkonga flex flex-col">
            <Navbar mainNav = {mainNav} />
            
            <div className="flex newdude flex-col w-full xl:flex-row">
                <Outlet />
            </div>
        </div>
    )
}