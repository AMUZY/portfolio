import { useLocation } from "react-router-dom";

export default function KongaDefault(first) {
  var defaultlink;
  var link = useLocation();

  const konga = [
    {
      main: "konga",
      cat: [
        // NEW CATEGORY
        {
          href: "computers-and-accessories",
          subcat: [
            {
              href: "computing",
              subsub: [
                "bags-cases-covers",
                "computer-peripherals",
                "laptop-and-desktop-accessories",
                "storage-devices",
              ],
            },
            {
              href: "laptops",
              subsub: [
                "hybrid-pcs",
                "macbooks",
                "minilaptops-and-netbooks",
                "notebooks",
                "ultrabooks",
              ],
            },
            {
              href: "pcgaming",
              subsub: ["pcgames", "pcgaming-accessories"],
            },
          ],
        },
        // NEW CATEGORY
        {
          href: "phones-and-tablets",
          subcat: [
            {
              href: "mobile-phones",
              subsub: ["feature-phones", "smart-phones"],
            },
            {
              href: "mobile-phones-accessories",
              subsub: [
                "batteries",
                "cables",
                "cases-and-covers",
                "chargers-and-powerbanks",
                "earphones-and-headsets",
                "screen-protectors",
                "smartwatches-and-bands",
              ],
            },
            {
              href: "tablets",
              subsub: ["android", "ios", "other-os", "windows"],
            },
          ],
        },
        // NEW CATEGORY
        {
          href: "electronics",
          subcat: [
            {
              href: "accessories",
              subsub: [
                "gaming-accessories",
                "headphones",
                "other-accessories",
                "television-accessories",
                "tv-audio",
              ],
            },
            {
              href: "cameras",
              subsub: [
                "camcorders-and-videocameras",
                "cameralenses-and-accessories",
                "cctv-cameras",
                "digital-cameras",
                "proff-and-slr-cameras",
              ],
            },
            {
              href: "games-and-consoles",
              subsub: [
                "ps3",
                "ps4",
                "psvita",
                "sony-psp",
                "xbox-360",
                "xbox-one",
              ],
            },
            {
              href: "hometheatres-and-audio",
              subsub: [
                "hifi-systems",
                "home-theatre",
                "mp3players-and-speakers",
              ],
            },
            {
              href: "televisions",
              subsub: [
                "curved-tvs",
                "led-tvs",
                "oled-tvs",
                "plasma-tvs",
                "smart-tvs",
              ],
            },
          ],
        },
        // NEW CATEGORY
        {
          href: "konga-fashion",
          subcat: [
            {
              href: "mens-acessories",
              subsub: [
                "men-bags",
                "belts-and-wallets",
                "caps-and-hats",
                "socks-and-underwear",
                "ties-and-cufflinks",
              ],
            },
            {
              href: "mens-shoes",
              subsub: [
                "casual-shoes",
                "formal-shoes",
                "shoecare-and-accessories",
                "slippers-and-sandals",
              ],
            },
            {
              href: "mens-wear",
              subsub: ["jeans", "jerseys", "polos", "menshirts", "tshirts","trousers-and-shorts",],
            },
            {
              href: "watches",
              subsub: ["menswatches"],
            },
            {
              href: "womensaccessories",
              subsub: ["women-bags", "women-belts", "purses-and-clutches", "wallets"],
            },
            {
              href: "women-shoes",
              subsub: [
                "heels",
                "women-sandals-and-slippers",
                "shoes-and-bags",
                "sport-shoes",
                "wedges",
              ],
            },
            {
              href: "women-wear",
              subsub: [
                "dresses",
                "lingerie-and-sleepwear",
                "skirts",
                "tops",
                "women-trousers",
              ],
            },
          ],
        },
        // NEW CATEGORY
        {
          href: "home-and-kitchen",
          subcat: [
            {
              href: "furniture",
              subsub: [
                "bedroom-furniture",
                "kitchens-and-dining-furniture",
                "living-room-furniture",
                "office-furniture",
              ],
            },
            {
              href: "home-furnishings",
              subsub: [
                "bed-and-bathroom-furnishings",
                "curtain-and-blinds",
                "decor",
                "light-fixtures",
                "rings-and-carpets",
              ],
            },
            {
              href: "kitchen-and-dining",
              subsub: [
                "cook-and-bakeware",
                "dining",
                "kitchen-utensils",
              ],
            },
            {
              href: "large-appliances",
              subsub: [
                "airconditioners-and-coolers",
                "cookers-and-ovens",
                "fans",
                "freezers",
                "refrigerators",
                "vacuum-cleaners",
                "water-dispensers",
              ],
            },
            {
              href: "small-appliances",
              subsub: [
                "blenders-juicers-and-mixers",
                "electric-kettles",
                "hotplates-and-burners",
                "irons-and-steamers",
                "microwaves",
                "processors-and-mincers",
              ],
            },
            {
              href: "top-brands",
              subsub: ["hisense", "lg", "polystar", "samsung", "scanfrost"],
            },
          ],
        },
        // NEW CATEGORY
        {
          href: "baby-kids-and-toys",
          subcat: [
            {
              href: "baby-essentials",
              subsub: [
                "babyfood-and-formula",
                "bibs-and-burpcloths",
                "bottlefeeding",
                "breast-feeding",
                "feeding-and-nursing",
                "pacifiers-and-teethers",
              ],
            },
            {
              href: "diapering-and-dailycare",
              subsub: [
                "bathtime-essentials",
                "dailycare",
                "diaperbags-and-changingmats",
                "diapers-and-babywipes",
                "potty-training",
              ],
            },
            {
              href: "fashion-for-boys",
              subsub: [
                "boy-body-suits-and-playsuits",
                "denim-and-trousers",
                "boy-sets",
                "boy-shirts",
                "boy-shoes",
                "boy-sleepwear",
                "boy-underwear-and-socks",
                "boy-watches",
              ],
            },
            {
              href: "fashion-for-girls",
              subsub: [
                "girl-body-suits-and-playsuits",
                "girl-sets",
                "girl-shoes",
                "girl-sleepwear",
                "girl-underwear-and-socks",
                "girl-watches",
              ],
            },
            {
              href: "kidsbeddings-and-decor",
              subsub: ["bedding", "decor-accessories", "kid-furniture"],
            },
            {
              href: "school-store",
              subsub: [
                "bags-and-bagpacks",
                "lunchboxes-and-waterbottles",
                "school-shoes",
              ],
            },
            {
              href: "toys-and-activities",
              subsub: [
                "activities",
                "bicycles-and-rideon",
                "bouncers-rockers-and-swingers",
                "educational-toys",
                "tablets-for-kids",
              ],
            },
          ],
        },
        // NEW CATEGORY
        {
            href: "other-categories",
            subcat: [
              {
                href: "automotive",
                subsub: [
                  "autocare-and-maintenance",
                  "automotivetools-and-accessories",
                  "safety-and-security",
                  "tyres-and-batteries",
                ],
              },
              {
                href: "beauty-and-personal",
                subsub: [
                  "contraceptives-and-lubricants",
                  "fragrances",
                  "haircentre",
                  "health",
                  "makeup",
                  "sexual-wellness",
                  "skincare",
                ],
              },
              {
                href: "books-and-medialibrary",
                subsub: [
                  "audio-books",
                  "hardbooks",
                  "keyboard-pianos-and-drums",
                  "musical-equipment",
                  "string-instruments",
                ],
              },
              {
                href: "building-and-industrial",
                subsub: [
                  "construction-materials",
                  "plumbing-materials",
                  "sewingmachines-and-accessories",
                  "tools",
                ],
              },
              {
                href: "generators-and-power",
                subsub: ["generators-and-accessories", "inverters", "solar-and-alternative-energy","ups-and-surge-protectors",],
              },
              {
                href: "sports-and-fitness",
                subsub: [
                  "boxing",
                  "fitness",
                  "football",
                  "outdoor-and-indoorgames",
                  "sportswear",
                  "swimming",
                ],
              },
            ],
        },
      ],
    },
  ];

  if(link.pathname.includes("/"+first+"/"))
  {
    return defaultlink;
  }
  else {
    outer: for (let i = 0; i < konga.length; i++) {
             for (let j = 0; j < konga[i].cat.length; j++) {
               for (let k = 0; k < konga[i].cat[j].subcat.length; k++) {
                 for (
            let l = 0;
            l < konga[i].cat[j].subcat[k].subsub.length;
            l++
          ) {
            if (
              (
                "/" +
                konga[i].main +
                "/" +
                konga[i].cat[j].href +
                "/" +
                konga[i].cat[j].subcat[k].href +
                "/" +
                konga[i].cat[j].subcat[k].subsub[l]
              ).includes("/"+first)
            ) {
              defaultlink =
                "/" +
                konga[i].main +
                "/" +
                konga[i].cat[j].href +
                "/" +
                konga[i].cat[j].subcat[k].href +
                "/" +
                konga[i].cat[j].subcat[k].subsub[l];
              break outer;
            }
          }
        }
      }
    }
    return defaultlink;
  }
  
}
