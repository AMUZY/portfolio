import { useState,useEffect } from "react";
import { colRef } from "../MyFirebase"
import {
  onSnapshot
} from "firebase/firestore";


export const useServeAllKongaItems = (()=>{
    // Get Collection Data
    const [allproducts, setAllproducts] = useState([])
    useEffect(()=>{
        onSnapshot(colRef, (snapshot)=>{
            let tempgroup = []
            snapshot.docs.forEach((doc)=>{
                tempgroup.push({...doc.data() ,id: doc.id})
                setAllproducts(tempgroup)
            });
            // console.log(allproducts)
            })
    }, [])
    
    return allproducts
})