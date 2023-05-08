import "../../button.scss"
import "../../Expert.scss"
import Navbar from "../../panels/Navbar"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"

import { useState, useEffect } from "react"

// STARS IMPORT
import ExpNavbar from "../../panels/ExpNavbar"
import { firebaseConfig } from "../../MyFirebase"
import { initializeApp } from "firebase/app";
import {
  getFirestore,collection,onSnapshot,
} from "firebase/firestore"
import { expColRef } from "../../MyFirebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration


// EXPORTED ITEMS
export var EXPITEMS = [];

// ARRAY TO STORE ALL PATHS
export var EXPPATHS = []; 

// 
// 
// 
// 


export default function Expert (props) {
  let link = useLocation()
  EXPPATHS.push(link.pathname)

  // Get Collection Data

const [exp_prod,setExp_prod] = useState([])

useEffect(()=>{
    onSnapshot(expColRef, (snapshot)=>{
    var exp_prod = []
    snapshot.docs.forEach((doc)=>{
        exp_prod.push({...doc.data() ,id: doc.id})
        setExp_prod(exp_prod);
        EXPITEMS = exp_prod;
        })
})
}, [])


    return (
        <div className="relative w-full mainkonga flex flex-col">
          <ExpNavbar />
          <Outlet />
        </div>
    )
}