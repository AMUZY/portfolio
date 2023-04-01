import "./input.css"

import {BrowserRouter as Router,
Routes,
Route,
Navigate,
useParams,
} from "react-router-dom"

import Home from "./pages/Home";
// import SubCat from "./panels/SubCat";
// import ProductArea from "./panels/ProductArea"
import Konga from "./pages/Konga/Konga";
import Jumia from "./pages/Jumia";
import SubCat from "./panels/SubCat";
import ProductArea from "./panels/ProductArea";
import Products from "./panels/Products";
import Navbar from "./panels/Navbar";
import NotFound from "../src/pages/NotFound"

// KONGA ALL PAGES IMPORTS
import ComputersandAccessories from "../src/pages/Konga/ComputersandAccessories/ComputersandAccessories"
      import Computing from "../src/pages/Konga/ComputersandAccessories/Computing/Computing"
            import BagsCasesCovers from "../src/pages/Konga/ComputersandAccessories/Computing/BagsCasesCovers"
            import ComputerPeripherals from "../src/pages/Konga/ComputersandAccessories/Computing/ComputerPeripherals"
            import LaptopandDesktopAccessories from "../src/pages/Konga/ComputersandAccessories/Computing/LaptopandDesktopAccessories"
            import StorageDevices from "../src/pages/Konga/ComputersandAccessories/Computing/StorageDevices"
      import Laptops from "../src/pages/Konga/ComputersandAccessories/Laptops/Laptops"
            import HybridPCs from "../src/pages/Konga/ComputersandAccessories/Laptops/HybridPCs"
            import Macbooks from "../src/pages/Konga/ComputersandAccessories/Laptops/Macbooks"
            import MiniLaptopsandNetbooks from "../src/pages/Konga/ComputersandAccessories/Laptops/MiniLaptopsandNetbooks"
            import Notebooks from "../src/pages/Konga/ComputersandAccessories/Laptops/Notebooks"
            import Ultrabooks from "../src/pages/Konga/ComputersandAccessories/Laptops/Ultrabooks"
      import PCGaming from "../src/pages/Konga/ComputersandAccessories/PCGaming/PCGaming"
            import PCGames from "../src/pages/Konga/ComputersandAccessories/PCGaming/PCGames" 
            import PCgamingAccessories from "../src/pages/Konga/ComputersandAccessories/PCGaming/PCgamingAccessories" 
import PhonesandTablets from "../src/pages/Konga/PhonesandTablets/PhonesandTablets"
      import MobilePhones from "../src/pages/Konga/PhonesandTablets/MobilePhones/MobilePhones"
            import FeaturePhones from "../src/pages/Konga/PhonesandTablets/MobilePhones/FeaturePhones"
            import SmartPhones from "../src/pages/Konga/PhonesandTablets/MobilePhones/SmartPhones"
      import MobilePhonesAccessories from "../src/pages/Konga/PhonesandTablets/MobilePhonesAccessories/MobilePhonesAccessories"
            import Batteries from "../src/pages/Konga/PhonesandTablets/MobilePhonesAccessories/Batteries"
            import Cables from "../src/pages/Konga/PhonesandTablets/MobilePhonesAccessories/Cables"
            import CasesandCovers from "../src/pages/Konga/PhonesandTablets/MobilePhonesAccessories/CasesandCovers"
            import ChargersandPowerBanks from "../src/pages/Konga/PhonesandTablets/MobilePhonesAccessories/ChargersandPowerBanks"
            import EarphonesandHeadsets from "../src/pages/Konga/PhonesandTablets/MobilePhonesAccessories/EarphonesandHeadsets"
            import ScreenProtectors from "../src/pages/Konga/PhonesandTablets/MobilePhonesAccessories/ScreenProtectors"
            import SmartwatchesandBands from "../src/pages/Konga/PhonesandTablets/MobilePhonesAccessories/SmartwatchesandBands"
      import Tablets from "../src/pages/Konga/PhonesandTablets/Tablets/Tablets"
            import Android from "../src/pages/Konga/PhonesandTablets/Tablets/Android"
            import IOS from "../src/pages/Konga/PhonesandTablets/Tablets/IOS"
            import OtherOS from "../src/pages/Konga/PhonesandTablets/Tablets/OtherOS"
            import Windows from "../src/pages/Konga/PhonesandTablets/Tablets/Windows"
import Electronics from "../src/pages/Konga/Electronics/Electronics"
      import Accessories from "../src/pages/Konga/Electronics/Accessories/Accessories"
            import GamingAccessories from "../src/pages/Konga/Electronics/Accessories/GamingAccessories"
            import HeadPhones from "../src/pages/Konga/Electronics/Accessories/HeadPhones"
            import OtherAccessories from "../src/pages/Konga/Electronics/Accessories/OtherAccessories"
            import TelevisionAccessories from "../src/pages/Konga/Electronics/Accessories/TelevisionAccessories"
            import TVAudio from "../src/pages/Konga/Electronics/Accessories/TVAudio"
      import Cameras from "../src/pages/Konga/Electronics/Cameras/Cameras"
            import CamcordersandVideoCameras from "../src/pages/Konga/Electronics/Cameras/CamcordersandVideoCameras"
            import CameraLensesandAccessories from "../src/pages/Konga/Electronics/Cameras/CameraLensesandAccessories"
            import CCTVCameras from "../src/pages/Konga/Electronics/Cameras/CCTVCameras"
            import DigitalCameras from "../src/pages/Konga/Electronics/Cameras/DigitalCameras"
            import ProffandSLRCameras from "../src/pages/Konga/Electronics/Cameras/ProffandSLRCameras"
      import GamesandConsoles from "../src/pages/Konga/Electronics/GamesandConsoles/GamesandConsoles"
            import PS3 from "../src/pages/Konga/Electronics/GamesandConsoles/PS3"
            import PS4 from "../src/pages/Konga/Electronics/GamesandConsoles/PS4"
            import PSVita from "../src/pages/Konga/Electronics/GamesandConsoles/PSVita"
            import SonyPSP from "../src/pages/Konga/Electronics/GamesandConsoles/SonyPSP"
            import Xbox360 from "../src/pages/Konga/Electronics/GamesandConsoles/Xbox360"
            import XboxOne from "../src/pages/Konga/Electronics/GamesandConsoles/XboxOne"
      import HomeTheatresandAudio from "../src/pages/Konga/Electronics/HomeTheatresandAudio/HomeTheatresandAudio"
            import HifiSystems from "../src/pages/Konga/Electronics/HomeTheatresandAudio/HifiSystems"
            import HomeTheatre from "../src/pages/Konga/Electronics/HomeTheatresandAudio/HomeTheatre"
            import MP3PlayersandSpeakers from "../src/pages/Konga/Electronics/HomeTheatresandAudio/MP3PlayersandSpeakers"
      import Televisions from "../src/pages/Konga/Electronics/Televisions/Televisions"
            import CurvedTVs from "../src/pages/Konga/Electronics/Televisions/CurvedTVs"
            import LedTVs from "../src/pages/Konga/Electronics/Televisions/LedTVs"
            import OledTVs from "../src/pages/Konga/Electronics/Televisions/OledTVs"
            import PlasmaTVs from "../src/pages/Konga/Electronics/Televisions/PlasmaTVs"
            import SmartTVs from "../src/pages/Konga/Electronics/Televisions/SmartTVs"
import KongaFashion from "../src/pages/Konga/KongaFashion/KongaFashion"
      import MensAccessories from "../src/pages/Konga/KongaFashion/MensAccessories/MensAccessories"
            import MenBags from "./pages/Konga/KongaFashion/MensAccessories/MenBags"
            import BeltsandWallets from "../src/pages/Konga/KongaFashion/MensAccessories/BeltsandWallets"
            import CapsandHats from "../src/pages/Konga/KongaFashion/MensAccessories/CapsandHats"
            import SocksandUnderwear from "../src/pages/Konga/KongaFashion/MensAccessories/SocksandUnderwear"
            import TiesandCufflinks from "../src/pages/Konga/KongaFashion/MensAccessories/TiesandCufflinks"
      import MensShoes from "../src/pages/Konga/KongaFashion/MensShoes/MensShoes"
            import CasualShoes from "../src/pages/Konga/KongaFashion/MensShoes/CasualShoes"
            import FormalShoes from "../src/pages/Konga/KongaFashion/MensShoes/FormalShoes"
            import ShoeCareandAccessories from "../src/pages/Konga/KongaFashion/MensShoes/ShoeCareandAccessories"
            import SlippersandSandals from "../src/pages/Konga/KongaFashion/MensShoes/SlippersandSandals"
      import MensWear from "../src/pages/Konga/KongaFashion/MensWear/MensWear"
            import Jeans from "../src/pages/Konga/KongaFashion/MensWear/Jeans"
            import Jerseys from "../src/pages/Konga/KongaFashion/MensWear/Jerseys"
            import Polos from "../src/pages/Konga/KongaFashion/MensWear/Polos"
            import MenShirts from "./pages/Konga/KongaFashion/MensWear/MenShirts"
            import TShirts from "../src/pages/Konga/KongaFashion/MensWear/TShirts"
            import TrousersandShorts from "./pages/Konga/KongaFashion/MensWear/TrousersandShorts";
      import Watches from "../src/pages/Konga/KongaFashion/Watches/Watches"
            import MensWatches from "../src/pages/Konga/KongaFashion/Watches/MensWatches"
      import WomensAccessories from "../src/pages/Konga/KongaFashion/WomensAccessories/WomensAccessories"
            import WomenBags from "./pages/Konga/KongaFashion/WomensAccessories/WomenBags"
            import WomenBelts from "./pages/Konga/KongaFashion/WomensAccessories/WomenBelts"
            import PursesandClutches from "../src/pages/Konga/KongaFashion/WomensAccessories/PursesandClutches"
            import Wallets from "../src/pages/Konga/KongaFashion/WomensAccessories/Wallets"
      import WomensShoes from "../src/pages/Konga/KongaFashion/WomensShoes/WomensShoes"
            import Heels from "../src/pages/Konga/KongaFashion/WomensShoes/Heels"
            import WomenSandalsandSlippers from "./pages/Konga/KongaFashion/WomensShoes/WomenSandalsandSlippers"
            import ShoesandBags from "../src/pages/Konga/KongaFashion/WomensShoes/ShoesandBags"
            import SportShoes from "../src/pages/Konga/KongaFashion/WomensShoes/SportShoes"
            import Wedges from "../src/pages/Konga/KongaFashion/WomensShoes/Wedges"
      import WomensWear from "../src/pages/Konga/KongaFashion/WomensWear/WomensWear"
            import Dresses from "../src/pages/Konga/KongaFashion/WomensWear/Dresses"
            import LingerieandSleepwear from "../src/pages/Konga/KongaFashion/WomensWear/LingerieandSleepwear"
            import Skirts from "../src/pages/Konga/KongaFashion/WomensWear/Skirts"
            import Tops from "../src/pages/Konga/KongaFashion/WomensWear/Tops"
            import WomenTrousers from "./pages/Konga/KongaFashion/WomensWear/WomenTrousers"
import HomeandKitchen from "../src/pages/Konga/HomeandKitchen/HomeandKitchen"
      import Furniture from "../src/pages/Konga/HomeandKitchen/Furniture/Furniture"
            import BedroomFurniture from "../src/pages/Konga/HomeandKitchen/Furniture/BedroomFurniture"
            import KitchenandDiningFurniture from "../src/pages/Konga/HomeandKitchen/Furniture/KitchenandDiningFurniture"
            import LivingRoomFurniture from "../src/pages/Konga/HomeandKitchen/Furniture/LivingRoomFurniture"
            import OfficeFurniture from "../src/pages/Konga/HomeandKitchen/Furniture/OfficeFurniture"
      import HomeFurnishings from "../src/pages/Konga/HomeandKitchen/HomeFurnishings/HomeFurnishings"
            import BedandBathroomFurnishings from "../src/pages/Konga/HomeandKitchen/HomeFurnishings/BedandBathroomFurnishings"
            import CurtainandBlinds from "../src/pages/Konga/HomeandKitchen/HomeFurnishings/CurtainandBlinds"
            import Decor from "../src/pages/Konga/HomeandKitchen/HomeFurnishings/Decor"
            import LightFixtures from "../src/pages/Konga/HomeandKitchen/HomeFurnishings/LightFixtures"
            import RugsandCarpets from "../src/pages/Konga/HomeandKitchen/HomeFurnishings/RugsandCarpets"
      import KitchenandDining from "../src/pages/Konga/HomeandKitchen/KitchenandDining/KitchenandDining"
            import CookandBakeware from "../src/pages/Konga/HomeandKitchen/KitchenandDining/CookandBakeware"
            import Dining from "../src/pages/Konga/HomeandKitchen/KitchenandDining/Dining"
            import KitchenUtensils from "../src/pages/Konga/HomeandKitchen/KitchenandDining/KitchenUtensils"
      import LargeAppliances from "../src/pages/Konga/HomeandKitchen/LargeAppliances/LargeAppliances"
            import AirConditionersandCoolers from "../src/pages/Konga/HomeandKitchen/LargeAppliances/AirConditionersandCoolers"
            import CookersandOvens from "../src/pages/Konga/HomeandKitchen/LargeAppliances/CookersandOvens"
            import Fans from "../src/pages/Konga/HomeandKitchen/LargeAppliances/Fans"
            import Freezers from "../src/pages/Konga/HomeandKitchen/LargeAppliances/Freezers"
            import Refrigerators from "../src/pages/Konga/HomeandKitchen/LargeAppliances/Refrigerators"
            import VacuumCleaners from "../src/pages/Konga/HomeandKitchen/LargeAppliances/VacuumCleaners"
            import WaterDispensers from "../src/pages/Konga/HomeandKitchen/LargeAppliances/WaterDispensers"
      import SmallAppliances from "../src/pages/Konga/HomeandKitchen/SmallAppliances/SmallAppliances"
            import BlendersJuicersandMixers from "../src/pages/Konga/HomeandKitchen/SmallAppliances/BlendersJuicersandMixers"
            import ElectricKettles from "../src/pages/Konga/HomeandKitchen/SmallAppliances/ElectricKettles"
            import HotPlatesandBurners from "../src/pages/Konga/HomeandKitchen/SmallAppliances/HotPlatesandBurners"
            import IronsandSteamers from "../src/pages/Konga/HomeandKitchen/SmallAppliances/IronsandSteamers"
            import Microwaves from "../src/pages/Konga/HomeandKitchen/SmallAppliances/Microwaves"
            import ProcessorsandMincers from "../src/pages/Konga/HomeandKitchen/SmallAppliances/ProcessorsandMincers"
      import TopBrands from "../src/pages/Konga/HomeandKitchen/TopBrands/TopBrands"
            import Hisense from "../src/pages/Konga/HomeandKitchen/TopBrands/Hisense"
            import LG from "../src/pages/Konga/HomeandKitchen/TopBrands/LG"
            import Polystar from "../src/pages/Konga/HomeandKitchen/TopBrands/Polystar"
            import Samsung from "../src/pages/Konga/HomeandKitchen/TopBrands/Samsung"
            import Scanfrost from "../src/pages/Konga/HomeandKitchen/TopBrands/Scanfrost"
import BabyKidsandToys from "../src/pages/Konga/BabyKidsandToys/BabyKidsandToys"
      import BabyEssentials from "../src/pages/Konga/BabyKidsandToys/BabyEssentials/BabyEssentials"
            import BabyfoodandFormula from "../src/pages/Konga/BabyKidsandToys/BabyEssentials/BabyfoodandFormula"
            import BibsandBurpCloths from "../src/pages/Konga/BabyKidsandToys/BabyEssentials/BibsandBurpCloths"
            import BottleFeeding from "../src/pages/Konga/BabyKidsandToys/BabyEssentials/BottleFeeding"
            import BreastFeeding from "./pages/Konga/BabyKidsandToys/BabyEssentials/BreastFeeding"
            import FeedingandNursing from "../src/pages/Konga/BabyKidsandToys/BabyEssentials/FeedingandNursing"
            import PacifiersandTeethers from "../src/pages/Konga/BabyKidsandToys/BabyEssentials/PacifiersandTeethers"
      import DiaperingandDailyCare from "../src/pages/Konga/BabyKidsandToys/DiaperingandDailyCare/DiaperingandDailyCare"
            import BathtimeEssentials from "../src/pages/Konga/BabyKidsandToys/DiaperingandDailyCare/BathtimeEssentials"
            import DailyCare from "../src/pages/Konga/BabyKidsandToys/DiaperingandDailyCare/DailyCare"
            import DiaperBagsandChangingMats from "../src/pages/Konga/BabyKidsandToys/DiaperingandDailyCare/DiaperBagsandChangingMats"
            import DiapersandBabyWipes from "../src/pages/Konga/BabyKidsandToys/DiaperingandDailyCare/DiapersandBabyWipes"
            import PottyTraining from "../src/pages/Konga/BabyKidsandToys/DiaperingandDailyCare/PottyTraining"
      import FashionForBoys from "../src/pages/Konga/BabyKidsandToys/FashionForBoys/FashionForBoys"
            import BoyBodysuitsandPlaysuits from "./pages/Konga/BabyKidsandToys/FashionForBoys/BoyBodysuitsandPlaysuits"
            import DenimandTrousers from "../src/pages/Konga/BabyKidsandToys/FashionForBoys/DenimandTrousers"
            import BoySets from "./pages/Konga/BabyKidsandToys/FashionForBoys/BoySets"
            import BoyShirts from "./pages/Konga/BabyKidsandToys/FashionForBoys/BoyShirts"
            import BoyShoes from "./pages/Konga/BabyKidsandToys/FashionForBoys/BoyShoes"
            import BoySleepwear from "./pages/Konga/BabyKidsandToys/FashionForBoys/BoySleepwear"
            import BoyUnderwearandSocks from "./pages/Konga/BabyKidsandToys/FashionForBoys/BoyUnderwearandSocks"
            import BoyWatches from "./pages/Konga/BabyKidsandToys/FashionForBoys/BoyWatches"
      import FashionForGirls from "../src/pages/Konga/BabyKidsandToys/FashionForGirls/FashionForGirls"
            import GirlBodysuitsandPlaysuits from "./pages/Konga/BabyKidsandToys/FashionForGirls/GirlBodysuitsandPlaysuits"
            import GirlSets from "./pages/Konga/BabyKidsandToys/FashionForGirls/GirlSets"
            import GirlShoes from "./pages/Konga/BabyKidsandToys/FashionForGirls/GirlShoes"
            import GirlSleepwear from "./pages/Konga/BabyKidsandToys/FashionForGirls/GirlSleepwear"
            import GirlUnderwearandSocks from "./pages/Konga/BabyKidsandToys/FashionForGirls/GirlUnderwearandSocks"
            import GirlWatches from "./pages/Konga/BabyKidsandToys/FashionForGirls/GirlWatches"
      import KidsBeddingsandDecor from "../src/pages/Konga/BabyKidsandToys/KidsBeddingsandDecor/KidsBeddingsandDecor"
            import Bedding from "../src/pages/Konga/BabyKidsandToys/KidsBeddingsandDecor/Bedding"
            import DecorAccessories from "../src/pages/Konga/BabyKidsandToys/KidsBeddingsandDecor/DecorAccessories"
            import KidFurniture from "../src/pages/Konga/BabyKidsandToys/KidsBeddingsandDecor/Furniture"
      import SchoolStore from "../src/pages/Konga/BabyKidsandToys/SchoolStore/SchoolStore"
            import BagsandBackpacks from "../src/pages/Konga/BabyKidsandToys/SchoolStore/BagsandBackpacks"
            import LunchboxesandWaterbottles from "../src/pages/Konga/BabyKidsandToys/SchoolStore/LunchboxesandWaterbottles"
            import SchoolShoes from "../src/pages/Konga/BabyKidsandToys/SchoolStore/SchoolShoes"
      import ToysandActivities from "../src/pages/Konga/BabyKidsandToys/ToysandActivities/ToysandActivities"
            import Activities from "../src/pages/Konga/BabyKidsandToys/ToysandActivities/Activities"
            import BicyclesandRideOn from "../src/pages/Konga/BabyKidsandToys/ToysandActivities/BicyclesandRideOn"
            import BouncersRockersandSwingers from "../src/pages/Konga/BabyKidsandToys/ToysandActivities/BouncersRockersandSwingers"
            import EducationalToys from "../src/pages/Konga/BabyKidsandToys/ToysandActivities/EducationalToys"
            import TabletsForKids from "../src/pages/Konga/BabyKidsandToys/ToysandActivities/TabletsForKids"
import OtherCategories from "../src/pages/Konga/OtherCategories/OtherCategories"
      import Automotive from "../src/pages/Konga/OtherCategories/Automotive/Automotive"
            import AutocareandMaintenance from "../src/pages/Konga/OtherCategories/Automotive/AutocareandMaintenance"
            import AutomotiveToolsandAccessories from "../src/pages/Konga/OtherCategories/Automotive/AutomotiveToolsandAccessories"
            import SafetyandSecurity from "../src/pages/Konga/OtherCategories/Automotive/SafetyandSecurity"
            import TyresandBatteries from "../src/pages/Konga/OtherCategories/Automotive/TyresandBatteries"
      import BeautyandPersonalCare from "../src/pages/Konga/OtherCategories/BeautyandPersonalCare/BeautyandPersonalCare"
            import ContraceptivesandLubricants from "../src/pages/Konga/OtherCategories/BeautyandPersonalCare/ContraceptivesandLubricants"
            import Fragrances from "../src/pages/Konga/OtherCategories/BeautyandPersonalCare/Fragrances"
            import HairCentre from "../src/pages/Konga/OtherCategories/BeautyandPersonalCare/HairCentre"
            import Health from "../src/pages/Konga/OtherCategories/BeautyandPersonalCare/Health"
            import MakeUp from "../src/pages/Konga/OtherCategories/BeautyandPersonalCare/MakeUp"
            import SexualWellness from "../src/pages/Konga/OtherCategories/BeautyandPersonalCare/SexualWellness"
            import SkinCare from "../src/pages/Konga/OtherCategories/BeautyandPersonalCare/SkinCare"
      import BooksandMediaLibrary from "../src/pages/Konga/OtherCategories/BooksandMediaLibrary/BooksandMediaLibrary"
            import AudioBooks from "../src/pages/Konga/OtherCategories/BooksandMediaLibrary/AudioBooks"
            import Books from "../src/pages/Konga/OtherCategories/BooksandMediaLibrary/Books"
            import KeyboardPianosandDrums from "../src/pages/Konga/OtherCategories/BooksandMediaLibrary/KeyboardPianosandDrums"
            import MusicalEquipment from "../src/pages/Konga/OtherCategories/BooksandMediaLibrary/MusicalEquipment"
            import StringInstruments from "../src/pages/Konga/OtherCategories/BooksandMediaLibrary/StringInstruments"
      import BuildingandIndustrial from "../src/pages/Konga/OtherCategories/BuildingandIndustrial/BuildingandIndustrial"
            import ConstructionMaterials from "../src/pages/Konga/OtherCategories/BuildingandIndustrial/ConstructionMaterials"
            import PlumbingMaterials from "../src/pages/Konga/OtherCategories/BuildingandIndustrial/PlumbingMaterials"
            import SewingMachinesandAccessories from "../src/pages/Konga/OtherCategories/BuildingandIndustrial/SewingMachinesandAccessories"
            import Tools from "../src/pages/Konga/OtherCategories/BuildingandIndustrial/Tools"
      import GeneratorsandPower from "../src/pages/Konga/OtherCategories/GeneratorsandPower/GeneratorsandPower"
            import GeneratorsandAccessories from "../src/pages/Konga/OtherCategories/GeneratorsandPower/GeneratorsandAccessories"
            import Inverters from "../src/pages/Konga/OtherCategories/GeneratorsandPower/Inverters"
            import SolarandAlternativeEnergy from "../src/pages/Konga/OtherCategories/GeneratorsandPower/SolarandAlternativeEnergy"
            import UPSandSurgeProtectors from "../src/pages/Konga/OtherCategories/GeneratorsandPower/UPSandSurgeProtectors"
      import SportsandFitness from "../src/pages/Konga/OtherCategories/SportsandFitness/SportsandFitness"
            import Boxing from "../src/pages/Konga/OtherCategories/SportsandFitness/Boxing"
            import Fitness from "../src/pages/Konga/OtherCategories/SportsandFitness/Fitness"
            import Football from "../src/pages/Konga/OtherCategories/SportsandFitness/Football"
            import OutdoorandIndoorGames from "../src/pages/Konga/OtherCategories/SportsandFitness/OutdoorandIndoorGames"
            import Sportswear from "../src/pages/Konga/OtherCategories/SportsandFitness/Sportswear"
            import Swimming from "../src/pages/Konga/OtherCategories/SportsandFitness/Swimming"

// END OF KONGA PAGES IMPORT



export default function App() {
  return (
    <div className="App w-full flex flex-col">
      <Router>
          <Routes>
              <Route path = "/" element = {<Home />} />
              {/* KONGA */}
              <Route path = "/konga" element = {<Konga />}>

                <Route path = "/konga/computers-and-accessories" element = {<ComputersandAccessories />}>
                  <Route path = "/konga/computers-and-accessories/computing" element = {<Computing />} >
                    <Route path = "/konga/computers-and-accessories/computing/bags-cases-covers" element = {<BagsCasesCovers />} />
                    <Route path = "/konga/computers-and-accessories/computing/computer-peripherals" element = {<ComputerPeripherals />} />
                    <Route path = "/konga/computers-and-accessories/computing/laptop-and-desktop-accessories" element = {<LaptopandDesktopAccessories />} />
                    <Route path = "/konga/computers-and-accessories/computing/storage-devices" element = {<StorageDevices />} />
                  </Route>
                  <Route path = "/konga/computers-and-accessories/laptops" element = {<Laptops />} >
                    <Route path = "/konga/computers-and-accessories/laptops/hybrid-pcs" element = {<HybridPCs />} />
                    <Route path = "/konga/computers-and-accessories/laptops/macbooks" element = {<Macbooks />} />
                    <Route path = "/konga/computers-and-accessories/laptops/minilaptops-and-netbooks" element = {<MiniLaptopsandNetbooks />} />
                    <Route path = "/konga/computers-and-accessories/laptops/notebooks" element = {<Notebooks/>} />
                    <Route path = "/konga/computers-and-accessories/laptops/ultrabooks" element = {<Ultrabooks/>} />
                  </Route>
                  <Route path = "/konga/computers-and-accessories/pcgaming" element = {<PCGaming />} >
                    <Route path = "/konga/computers-and-accessories/pcgaming/pcgames" element = {<PCGames />} />
                    <Route path = "/konga/computers-and-accessories/pcgaming/pcgaming-accessories" element = {<PCgamingAccessories />} />
                  </Route>
                </Route>

                <Route path = "/konga/phones-and-tablets" element = {<PhonesandTablets />}>
                    <Route path = "/konga/phones-and-tablets/mobile-phones" element = {<MobilePhones />} >
                      <Route path = "/konga/phones-and-tablets/mobile-phones/feature-phones" element = {<FeaturePhones />}/>
                      <Route path = "/konga/phones-and-tablets/mobile-phones/smart-phones" element = {<SmartPhones />}/>
                    </Route>
                    <Route path = "/konga/phones-and-tablets/mobile-phones-accessories" element = {<MobilePhonesAccessories />} >
                      <Route path = "/konga/phones-and-tablets/mobile-phones-accessories/batteries" element = {<Batteries />}/>
                      <Route path = "/konga/phones-and-tablets/mobile-phones-accessories/cables" element = {<Cables/>}/>
                      <Route path = "/konga/phones-and-tablets/mobile-phones-accessories/cases-and-covers" element = {<CasesandCovers />}/>
                      <Route path = "/konga/phones-and-tablets/mobile-phones-accessories/chargers-and-powerbanks" element = {<ChargersandPowerBanks/>}/>
                      <Route path = "/konga/phones-and-tablets/mobile-phones-accessories/earphones-and-headsets" element = {<EarphonesandHeadsets/>}/>
                      <Route path = "/konga/phones-and-tablets/mobile-phones-accessories/screen-protectors" element = {<ScreenProtectors />}/>
                      <Route path = "/konga/phones-and-tablets/mobile-phones-accessories/smartwatches-and-bands" element = {<SmartwatchesandBands/>}/>
                    </Route>
                    <Route path = "/konga/phones-and-tablets/tablets" element = {<Tablets />} >
                      <Route path = "/konga/phones-and-tablets/tablets/android" element = {<Android />}/>
                      <Route path = "/konga/phones-and-tablets/tablets/ios" element = {<IOS />}/>
                      <Route path = "/konga/phones-and-tablets/tablets/other-os" element = {<OtherOS />}/>
                      <Route path = "/konga/phones-and-tablets/tablets/windows" element = {<Windows />}/>
                    </Route>
                </Route>

                <Route path = "/konga/electronics" element = {<Electronics />}>
                    <Route path = "/konga/electronics/accessories" element = {<Accessories />} >
                      <Route path = "/konga/electronics/accessories/gaming-accessories" element = {<GamingAccessories />} />
                      <Route path = "/konga/electronics/accessories/headphones" element = {<HeadPhones />} />
                      <Route path = "/konga/electronics/accessories/other-accessories" element = {<OtherAccessories />} />
                      <Route path = "/konga/electronics/accessories/television-accessories" element = {<TelevisionAccessories />} />
                      <Route path = "/konga/electronics/accessories/tv-audio" element = {<TVAudio />} />
                    </Route>
                    <Route path = "/konga/electronics/cameras" element = {<Cameras />} >
                      <Route path = "/konga/electronics/cameras/camcorders-and-videocameras" element = {<CamcordersandVideoCameras />} />
                      <Route path = "/konga/electronics/cameras/cameralenses-and-accessories" element = {<CameraLensesandAccessories />} />
                      <Route path = "/konga/electronics/cameras/cctv-cameras" element = {<CCTVCameras />} />
                      <Route path = "/konga/electronics/cameras/digital-cameras" element = {<DigitalCameras />} />
                      <Route path = "/konga/electronics/cameras/proff-and-slr-cameras" element = {<ProffandSLRCameras />} />
                    </Route>
                    <Route path = "/konga/electronics/games-and-consoles" element = {<GamesandConsoles />} >
                      <Route path = "/konga/electronics/games-and-consoles/ps3" element = {<PS3 />} />
                      <Route path = "/konga/electronics/games-and-consoles/ps4" element = {<PS4 />} />
                      <Route path = "/konga/electronics/games-and-consoles/psvita" element = {<PSVita />} />
                      <Route path = "/konga/electronics/games-and-consoles/sony-psp" element = {<SonyPSP />} />
                      <Route path = "/konga/electronics/games-and-consoles/xbox-360" element = {<Xbox360 />} />
                      <Route path = "/konga/electronics/games-and-consoles/xbox-one" element = {<XboxOne />} />
                    </Route>
                    <Route path = "/konga/electronics/hometheatres-and-audio" element = {<HomeTheatresandAudio />} >
                      <Route path = "/konga/electronics/hometheatres-and-audio/hifi-systems" element = {<HifiSystems />} />
                      <Route path = "/konga/electronics/hometheatres-and-audio/home-theatre" element = {<HomeTheatre />} />
                      <Route path = "/konga/electronics/hometheatres-and-audio/mp3players-and-speakers" element = {<MP3PlayersandSpeakers />} />
                    </Route>
                    <Route path = "/konga/electronics/televisions" element = {<Televisions />} >
                      <Route path = "/konga/electronics/televisions/curved-tvs" element = {<CurvedTVs />} />
                      <Route path = "/konga/electronics/televisions/led-tvs" element = {<LedTVs />} />
                      <Route path = "/konga/electronics/televisions/oled-tvs" element = {<OledTVs />} />
                      <Route path = "/konga/electronics/televisions/plasma-tvs" element = {<PlasmaTVs />} />
                      <Route path = "/konga/electronics/televisions/smart-tvs" element = {<SmartTVs />} />
                    </Route>
                </Route>

                <Route path = "/konga/konga-fashion" element = {<KongaFashion />}>
                    <Route path = "/konga/konga-fashion/mens-acessories" element = {<MensAccessories />} >
                      <Route path = "/konga/konga-fashion/mens-acessories/men-bags" element ={<MenBags />} />
                      <Route path = "/konga/konga-fashion/mens-acessories/belts-and-wallets" element ={<BeltsandWallets />} />
                      <Route path = "/konga/konga-fashion/mens-acessories/caps-and-hats" element ={<CapsandHats />} />
                      <Route path = "/konga/konga-fashion/mens-acessories/socks-and-underwear" element ={<SocksandUnderwear />} />
                      <Route path = "/konga/konga-fashion/mens-acessories/ties-and-cufflinks" element ={<TiesandCufflinks />} />
                    </Route>
                    <Route path = "/konga/konga-fashion/mens-shoes" element = {<MensShoes />} >
                      <Route path = "/konga/konga-fashion/mens-shoes/casual-shoes" element ={<CasualShoes />} />
                      <Route path = "/konga/konga-fashion/mens-shoes/formal-shoes" element ={<FormalShoes />} />
                      <Route path = "/konga/konga-fashion/mens-shoes/shoecare-and-accessories" element ={<ShoeCareandAccessories />} />
                      <Route path = "/konga/konga-fashion/mens-shoes/slippers-and-sandals" element ={<SlippersandSandals />} />
                    </Route>
                    <Route path = "/konga/konga-fashion/mens-wear" element = {<MensWear />} >
                      <Route path = "/konga/konga-fashion/mens-wear/jeans" element ={<Jeans />} />
                      <Route path = "/konga/konga-fashion/mens-wear/jerseys" element ={<Jerseys />} />
                      <Route path = "/konga/konga-fashion/mens-wear/polos" element ={<Polos />} />
                      <Route path = "/konga/konga-fashion/mens-wear/menshirts" element ={<MenShirts />} />
                      <Route path = "/konga/konga-fashion/mens-wear/tshirts" element ={<TShirts />} />
                      <Route path = "/konga/konga-fashion/mens-wear/trousers-and-shorts" element ={<TrousersandShorts />} />
                    </Route>
                    <Route path = "/konga/konga-fashion/watches" element = {<Watches />} >
                      <Route path = "/konga/konga-fashion/watches/menswatches" element ={<MensWatches />} />
                    </Route>
                    <Route path = "/konga/konga-fashion/womensaccessories" element = {<WomensAccessories />} >
                      <Route path = "/konga/konga-fashion/womensaccessories/women-bags" element ={<WomenBags />} />
                      <Route path = "/konga/konga-fashion/womensaccessories/women-belts" element ={<WomenBelts />} />
                      <Route path = "/konga/konga-fashion/womensaccessories/purses-and-clutches" element ={<PursesandClutches />} />
                      <Route path = "/konga/konga-fashion/womensaccessories/wallets" element ={<Wallets />} />
                    </Route>
                    <Route path = "/konga/konga-fashion/women-shoes" element = {<WomensShoes />} >
                      <Route path = "/konga/konga-fashion/women-shoes/heels" element ={<Heels />} />
                      <Route path = "/konga/konga-fashion/women-shoes/women-sandals-and-slippers" element ={<WomenSandalsandSlippers />} />
                      <Route path = "/konga/konga-fashion/women-shoes/shoes-and-bags" element ={<ShoesandBags />} />
                      <Route path = "/konga/konga-fashion/women-shoes/sport-shoes" element ={<SportShoes />} />
                      <Route path = "/konga/konga-fashion/women-shoes/wedges" element ={<Wedges />} />
                    </Route>
                    <Route path = "/konga/konga-fashion/women-wear" element = {<WomensWear />} >
                      <Route path = "/konga/konga-fashion/women-wear/dresses" element ={<Dresses />} />
                      <Route path = "/konga/konga-fashion/women-wear/lingerie-and-sleepwear" element ={<LingerieandSleepwear />} />
                      <Route path = "/konga/konga-fashion/women-wear/skirts" element ={<Skirts />} />
                      <Route path = "/konga/konga-fashion/women-wear/tops" element ={<Tops />} />
                      <Route path = "/konga/konga-fashion/women-wear/women-trousers" element ={<WomenTrousers />} />
                    </Route>
                </Route>

                <Route path = "/konga/home-and-kitchen" element = {<HomeandKitchen />}>
                    <Route path = "/konga/home-and-kitchen/furniture" element ={<Furniture />} >
                      <Route path = "/konga/home-and-kitchen/furniture/bedroom-furniture" element ={<BedroomFurniture />} />
                      <Route path = "/konga/home-and-kitchen/furniture/kitchens-and-dining-furniture" element ={<KitchenandDiningFurniture />} />
                      <Route path = "/konga/home-and-kitchen/furniture/living-room-furniture" element ={<LivingRoomFurniture />} />
                      <Route path = "/konga/home-and-kitchen/furniture/office-furniture" element ={<OfficeFurniture />} />
                    </Route>
                    <Route path = "/konga/home-and-kitchen/home-furnishings" element ={<HomeFurnishings />} >
                      <Route path = "/konga/home-and-kitchen/home-furnishings/bed-and-bathroom-furnishings" element ={<BedandBathroomFurnishings />} />
                      <Route path = "/konga/home-and-kitchen/home-furnishings/curtain-and-blinds" element ={<CurtainandBlinds />} />
                      <Route path = "/konga/home-and-kitchen/home-furnishings/decor" element ={<Decor />} />
                      <Route path = "/konga/home-and-kitchen/home-furnishings/light-fixtures" element ={<LightFixtures />} />
                      <Route path = "/konga/home-and-kitchen/home-furnishings/rings-and-carpets" element ={<RugsandCarpets />} />
                    </Route>
                    <Route path = "/konga/home-and-kitchen/kitchen-and-dining" element ={<KitchenandDining />} >
                      <Route path = "/konga/home-and-kitchen/kitchen-and-dining/cook-and-bakeware" element ={<CookandBakeware />} />
                      <Route path = "/konga/home-and-kitchen/kitchen-and-dining/dining" element ={<Dining />} />
                      <Route path = "/konga/home-and-kitchen/kitchen-and-dining/kitchen-utensils" element ={<KitchenUtensils />} />
                    </Route>
                    <Route path = "/konga/home-and-kitchen/large-appliances" element ={<LargeAppliances />} >
                      <Route path = "/konga/home-and-kitchen/large-appliances/airconditioners-and-coolers" element ={<AirConditionersandCoolers />} />
                      <Route path = "/konga/home-and-kitchen/large-appliances/cookers-and-ovens" element ={<CookersandOvens />} />
                      <Route path = "/konga/home-and-kitchen/large-appliances/fans" element ={<Fans />} />
                      <Route path = "/konga/home-and-kitchen/large-appliances/freezers" element ={<Freezers />} />
                      <Route path = "/konga/home-and-kitchen/large-appliances/refrigerators" element ={<Refrigerators />} />
                      <Route path = "/konga/home-and-kitchen/large-appliances/vacuum-cleaners" element ={<VacuumCleaners />} />
                      <Route path = "/konga/home-and-kitchen/large-appliances/water-dispensers" element ={<WaterDispensers />} />
                    </Route>
                    <Route path = "/konga/home-and-kitchen/small-appliances" element ={<SmallAppliances />} >
                      <Route path = "/konga/home-and-kitchen/small-appliances/blenders-juicers-and-mixers" element ={<BlendersJuicersandMixers />} />
                      <Route path = "/konga/home-and-kitchen/small-appliances/electric-kettles" element ={<ElectricKettles />} />
                      <Route path = "/konga/home-and-kitchen/small-appliances/hotplates-and-burners" element ={<HotPlatesandBurners />} />
                      <Route path = "/konga/home-and-kitchen/small-appliances/irons-and-steamers" element ={<IronsandSteamers />} />
                      <Route path = "/konga/home-and-kitchen/small-appliances/microwaves" element ={<Microwaves />} />
                      <Route path = "/konga/home-and-kitchen/small-appliances/processors-and-mincers" element ={<ProcessorsandMincers />} />
                    </Route>
                    <Route path = "/konga/home-and-kitchen/top-brands" element ={<TopBrands />} >
                      <Route path = "/konga/home-and-kitchen/top-brands/hisense" element ={<Hisense />} />
                      <Route path = "/konga/home-and-kitchen/top-brands/lg" element ={<LG />} />
                      <Route path = "/konga/home-and-kitchen/top-brands/polystar" element ={<Polystar />} />
                      <Route path = "/konga/home-and-kitchen/top-brands/samsung" element ={<Samsung />} />
                      <Route path = "/konga/home-and-kitchen/top-brands/scanfrost" element ={<Scanfrost />} />
                    </Route>
                </Route>

                <Route path = "/konga/baby-kids-and-toys" element = {<BabyKidsandToys />}>
                    <Route path = "/konga/baby-kids-and-toys/baby-essentials" element = {<BabyEssentials />} >
                      <Route path = "/konga/baby-kids-and-toys/baby-essentials/babyfood-and-formula" element = {<BabyfoodandFormula />} />
                      <Route path = "/konga/baby-kids-and-toys/baby-essentials/bibs-and-burpcloths" element = {<BibsandBurpCloths />} />
                      <Route path = "/konga/baby-kids-and-toys/baby-essentials/bottlefeeding" element = {<BottleFeeding />} />
                      <Route path = "/konga/baby-kids-and-toys/baby-essentials/breast-feeding" element = {<BreastFeeding />} />
                      <Route path = "/konga/baby-kids-and-toys/baby-essentials/feeding-and-nursing" element = {<FeedingandNursing />} />
                      <Route path = "/konga/baby-kids-and-toys/baby-essentials/pacifiers-and-teethers" element = {<PacifiersandTeethers />} />
                    </Route>
                    <Route path = "/konga/baby-kids-and-toys/diapering-and-dailycare" element = {<DiaperingandDailyCare />} >
                      <Route path = "/konga/baby-kids-and-toys/diapering-and-dailycare/bathtime-essentials" element = {<BathtimeEssentials />} />
                      <Route path = "/konga/baby-kids-and-toys/diapering-and-dailycare/dailycare" element = {<DailyCare />} />
                      <Route path = "/konga/baby-kids-and-toys/diapering-and-dailycare/diaperbags-and-changingmats" element = {<DiaperBagsandChangingMats />} />
                      <Route path = "/konga/baby-kids-and-toys/diapering-and-dailycare/diapers-and-babywipes" element = {<DiapersandBabyWipes />} />
                      <Route path = "/konga/baby-kids-and-toys/diapering-and-dailycare/potty-training" element = {<PottyTraining />} />
                    </Route>
                    <Route path = "/konga/baby-kids-and-toys/fashion-for-boys" element = {<FashionForBoys />} >
                      <Route path = "/konga/baby-kids-and-toys/fashion-for-boys/boy-body-suits-and-playsuits" element = {<BoyBodysuitsandPlaysuits />} />
                      <Route path = "/konga/baby-kids-and-toys/fashion-for-boys/denim-and-trousers" element = {<DenimandTrousers />} />
                      <Route path = "/konga/baby-kids-and-toys/fashion-for-boys/boy-sets" element = {<BoySets />} />
                      <Route path = "/konga/baby-kids-and-toys/fashion-for-boys/boy-shirts" element = {<BoyShirts />} />
                      <Route path = "/konga/baby-kids-and-toys/fashion-for-boys/boy-shoes" element = {<BoyShoes />} />
                      <Route path = "/konga/baby-kids-and-toys/fashion-for-boys/boy-sleepwear" element = {<BoySleepwear />} />
                      <Route path = "/konga/baby-kids-and-toys/fashion-for-boys/boy-underwear-and-socks" element = {<BoyUnderwearandSocks />} />
                      <Route path = "/konga/baby-kids-and-toys/fashion-for-boys/boy-watches" element = {<BoyWatches />} />
                    </Route>
                    <Route path = "/konga/baby-kids-and-toys/fashion-for-girls" element = {<FashionForGirls />} >
                      <Route path = "/konga/baby-kids-and-toys/fashion-for-girls/girl-body-suits-and-playsuits" element = {<GirlBodysuitsandPlaysuits />} />
                      <Route path = "/konga/baby-kids-and-toys/fashion-for-girls/girl-sets" element = {<GirlSets />} />
                      <Route path = "/konga/baby-kids-and-toys/fashion-for-girls/girl-shoes" element = {<GirlShoes />} />
                      <Route path = "/konga/baby-kids-and-toys/fashion-for-girls/girl-sleepwear" element = {<GirlSleepwear />} />
                      <Route path = "/konga/baby-kids-and-toys/fashion-for-girls/girl-underwear-and-socks" element = {<GirlUnderwearandSocks />} />
                      <Route path = "/konga/baby-kids-and-toys/fashion-for-girls/girl-watches" element = {<GirlWatches />} />
                    </Route>
                    <Route path = "/konga/baby-kids-and-toys/kidsbeddings-and-decor" element = {<KidsBeddingsandDecor />} >
                      <Route path = "/konga/baby-kids-and-toys/kidsbeddings-and-decor/bedding" element = {<Bedding />} />
                      <Route path = "/konga/baby-kids-and-toys/kidsbeddings-and-decor/decor-accessories" element = {<DecorAccessories />} />
                      <Route path = "/konga/baby-kids-and-toys/kidsbeddings-and-decor/kid-furniture" element = {<KidFurniture />} />
                    </Route>
                    <Route path = "/konga/baby-kids-and-toys/school-store" element = {<SchoolStore />} >
                      <Route path = "/konga/baby-kids-and-toys/school-store/bags-and-bagpacks" element = {<BagsandBackpacks />} />
                      <Route path = "/konga/baby-kids-and-toys/school-store/lunchboxes-and-waterbottles" element = {<LunchboxesandWaterbottles />} />
                      <Route path = "/konga/baby-kids-and-toys/school-store/school-shoes" element = {<SchoolShoes />} />
                    </Route>
                    <Route path = "/konga/baby-kids-and-toys/toys-and-activities" element = {<ToysandActivities />} >
                      <Route path = "/konga/baby-kids-and-toys/toys-and-activities/activities" element = {<Activities />} />
                      <Route path = "/konga/baby-kids-and-toys/toys-and-activities/bicycles-and-rideon" element = {<BicyclesandRideOn />} />
                      <Route path = "/konga/baby-kids-and-toys/toys-and-activities/bouncers-rockers-and-swingers" element = {<BouncersRockersandSwingers />} />
                      <Route path = "/konga/baby-kids-and-toys/toys-and-activities/educational-toys" element = {<EducationalToys />} />
                      <Route path = "/konga/baby-kids-and-toys/toys-and-activities/tablets-for-kids" element = {<TabletsForKids />} />
                    </Route>
                </Route>

                <Route path = "/konga/other-categories" element = {<OtherCategories />}>
                    <Route path = "/konga/other-categories/automotive" element = {<Automotive />} >
                        <Route path = "/konga/other-categories/automotive/autocare-and-maintenance" element = {<AutocareandMaintenance />} />
                        <Route path = "/konga/other-categories/automotive/automotivetools-and-accessories" element = {<AutomotiveToolsandAccessories />} />
                        <Route path = "/konga/other-categories/automotive/safety-and-security" element = {<SafetyandSecurity />} />
                        <Route path = "/konga/other-categories/automotive/tyres-and-batteries" element = {<TyresandBatteries />} />
                    </Route>
                    <Route path = "/konga/other-categories/beauty-and-personal" element = {<BeautyandPersonalCare />} >
                        <Route path = "/konga/other-categories/beauty-and-personal/contraceptives-and-lubricants" element = {<ContraceptivesandLubricants />} />
                        <Route path = "/konga/other-categories/beauty-and-personal/fragrances" element = {<Fragrances />} />
                        <Route path = "/konga/other-categories/beauty-and-personal/haircentre" element = {<HairCentre />} />
                        <Route path = "/konga/other-categories/beauty-and-personal/health" element = {<Health />} />
                        <Route path = "/konga/other-categories/beauty-and-personal/makeup" element = {<MakeUp />} />
                        <Route path = "/konga/other-categories/beauty-and-personal/sexual-wellness" element = {<SexualWellness />} />
                        <Route path = "/konga/other-categories/beauty-and-personal/skincare" element = {<SkinCare />} />
                    </Route>
                    <Route path = "/konga/other-categories/books-and-medialibrary" element = {<BooksandMediaLibrary />} >
                        <Route path = "/konga/other-categories/books-and-medialibrary/audio-books" element = {<AudioBooks />} />
                        <Route path = "/konga/other-categories/books-and-medialibrary/hardbooks" element = {<Books />} />
                        <Route path = "/konga/other-categories/books-and-medialibrary/keyboard-pianos-and-drums" element = {<KeyboardPianosandDrums />} />
                        <Route path = "/konga/other-categories/books-and-medialibrary/musical-equipment" element = {<MusicalEquipment />} />
                        <Route path = "/konga/other-categories/books-and-medialibrary/string-instruments" element = {<StringInstruments />} />
                    </Route>
                    <Route path = "/konga/other-categories/building-and-industrial" element = {<BuildingandIndustrial />} >
                        <Route path = "/konga/other-categories/building-and-industrial/construction-materials" element = {<ConstructionMaterials />} />
                        <Route path = "/konga/other-categories/building-and-industrial/plumbing-materials" element = {<PlumbingMaterials />} />
                        <Route path = "/konga/other-categories/building-and-industrial/sewingmachines-and-accessories" element = {<SewingMachinesandAccessories />} />
                        <Route path = "/konga/other-categories/building-and-industrial/tools" element = {<Tools />} />
                    </Route>
                    <Route path = "/konga/other-categories/generators-and-power" element = {<GeneratorsandPower />} >
                        <Route path = "/konga/other-categories/generators-and-power/generators-and-accessories" element = {<GeneratorsandAccessories />} />
                        <Route path = "/konga/other-categories/generators-and-power/inverters" element = {<Inverters />} />
                        <Route path = "/konga/other-categories/generators-and-power/solar-and-alternative-energy" element = {<SolarandAlternativeEnergy />} />
                        <Route path = "/konga/other-categories/generators-and-power/ups-and-surge-protectors" element = {<UPSandSurgeProtectors />} />
                    </Route>
                    <Route path = "/konga/other-categories/sports-and-fitness" element = {<SportsandFitness />} >
                        <Route path = "/konga/other-categories/sports-and-fitness/boxing" element = {<Boxing />} />
                        <Route path = "/konga/other-categories/sports-and-fitness/fitness" element = {<Fitness />} />
                        <Route path = "/konga/other-categories/sports-and-fitness/football" element = {<Football />} />
                        <Route path = "/konga/other-categories/sports-and-fitness/outdoor-and-indoorgames" element = {<OutdoorandIndoorGames />} />
                        <Route path = "/konga/other-categories/sports-and-fitness/sportswear" element = {<Sportswear />} />
                        <Route path = "/konga/other-categories/sports-and-fitness/swimming" element = {<Swimming />} />
                    </Route>
                </Route>
              </Route>
              {/* JUMIA ROUTE */}
                  {/* BEGIN HERE */}
              {/* EXPERTNAIRE ROUTE */}
                  {/* BEGIN HERE */}
                  <Route path = "*" element = {<NotFound />} />
            </Routes>
      </Router>
    </div>
  );
}


