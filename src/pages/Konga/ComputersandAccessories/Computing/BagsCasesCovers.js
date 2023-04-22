import Products from "../../../../panels/Products";
import { useState,useEffect,useReducer } from "react";
// import { useOutletContext } from "react-router-dom";
// firebase imports
import { colRef } from "../../../../MyFirebase";
import {
  onSnapshot,
} from "firebase/firestore"
//IMPRTED OBJECTS
// import { item1, item2, item3, item4, item5 } from "../../Konga";
// import { NEWSOMETHING, useThis } from "../../Konga";

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
  const [newsome,setNewsome] = useState([])
  useEffect(()=>{
      onSnapshot(colRef, (snapshot)=>{
      var something = []
      snapshot.docs.forEach((doc)=>{
          something.push({...doc.data() ,id: doc.id})
          setNewsome(something)
          })
  })
  }, [])

  
  console.log(newsome)

  const products = [
    newsome[0],
    newsome[1],
  ];

  // RETURN
  return <Products products={products} />
}
