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

export default function StorageDevices() {
  const products = [
    {
      src: [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/G/U/_1675255235.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/C/198045_1661520271.jpg" },
      ],
      alt: "product",
      title: "SanDisk Cruzer Blade Usb Flash Drive - 64GB",
      subtitle:
        "The SanDisk Cruzer Blade USB Flash Drive is a compact and portable storage device with a capacity of 64GB, making it easy to transfer and store large files, photos, videos, music, and more. It features a sleek design and a durable metal casing for protection. The USB 2.0 interface ensures fast data transfer speeds and compatibility with most devices.",
      price: "5,000",
      star: four,
    //   keyfeat: "these are where I will write the key features of the product",
      spec: `Colour	Black
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
      prodlink: "https://www.konga.com/product/sandisk-cruzer-blade-usb-flash-drive-64gb-5842581?k_id=AMUZY",
    },
    {
      src: [
        { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/H/X/151588_1635574777.jpg" },
        { id: 1, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/R/N/151588_1634919180.jpg" },
        { id: 2, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/W/151588_1634919216.jpg" },
      ],
      alt: "product",
      title: "Seagate External Hard Disk 1TB Backup Plus USB 3.0",
      subtitle:
        "The Seagate External Hard Disk 1TB Backup Plus USB 3.0 is a portable external hard drive that provides a reliable and secure way to store and backup your important data. It has a storage capacity of 1 terabyte and supports USB 3.0 for fast data transfer. The sleek and compact design makes it easy to carry around, while the included backup software allows for easy data management and protection.",
      price: "23,500",
      star: four,
    //   keyfeat: "these are where I will write the key features of the product",
      spec: "Color: Black, ROM: 1TB, Quantity: 1 set, Material: other, Brand: Seagate, Type: HDD, Capacity / ROM: 1TB, Application: Portable Drive, Interface: USB 3.0, Application: Others,N/A, Packing List: 1 x External Hard Disk, 1 x USB 3.0 Cable, 1 x User Manual",
      prodlink: "https://www.konga.com/product/seagate-external-hard-disk-1tb-backup-plus-usb-3-0-5502761?k_id=AMUZY",
    },
    {
        src: [
          { id: 0, img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/U/I/184831_1612405420.jpg" },
        ],
        alt: "product",
        title: "Transcend USB 3.1 Store Jet Shock Resistant Portable Hard Drive - 1TB",
        subtitle:
          "The Seagate External Hard Disk 1TB Backup Plus USB 3.0 is a portable external hard drive that provides a reliable and secure way to store and backup your important data. It has a storage capacity of 1 terabyte and supports USB 3.0 for fast data transfer. The sleek and compact design makes it easy to carry around, while the included backup software allows for easy data management and protection.",
        price: "56,000",
        star: four,
      //   keyfeat: "these are where I will write the key features of the product",
        spec: `Transcend 1TB USB External Hard Drive is the perfect storage device for backing up all your files. It features blazing fast transfer rates, huge storage capacity and a unique three-layer shock
        protection system. Its rugged design yet lightweight nature makes it very easy to carry around. It is compatible with all computers and laptops no matter the operating system they run. Its 1TB      
        capacity affords you the opportunity to backup all your documents and multimedia files from your computer in case of system failure. The incredible ultra-high transfer speed makes file sharing easy
        and convenient. It has an LED power/data transfer activity indicator which comes on once it is plug into a laptop or computer.`,
        prodlink: "https://www.konga.com/product/transcend-usb-3-1-store-jet-shock-resistant-portable-hard-drive-1tb-5107991?k_id=AMUZY",
      },
  ];

  return <Products products={products} />;
}
