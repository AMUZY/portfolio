import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


// CARD IMPORT
import {v4 as uuidv4} from "uuid"
// import { exp_prod } from "../MyFirebase"
// import { SendExp } from "../MyFirebase"

import { initializeApp } from "firebase/app";
import {
  getFirestore,collection,onSnapshot,
  addDoc,deleteDoc,doc
} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBZ4NkN8hyYtZbPcLC8CcvNrdODChx_hCU",
    authDomain: "amunation-73fba.firebaseapp.com",
    projectId: "amunation-73fba",
    storageBucket: "amunation-73fba.appspot.com",
    messagingSenderId: "524832572385",
    appId: "1:524832572385:web:cc20c14eeb074005ec08a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const product_db = getFirestore()

// Collection ref
const colRef = collection(product_db, "products");
const expColRef = collection(product_db, "exp")


export function SendKonga(){
    const [products,setProducts] = useState([])
    useEffect(()=>{
        onSnapshot(colRef, (snapshot)=>{
                var products = []
                snapshot.docs.forEach((doc)=>{
                    products.push({...doc.data() ,id: doc.id})
                    setProducts(products);
                    })
    })
    }, [])
    return products
}

export function SendExp(){
    // const [exp_prod,setExp_prod] = useState([])
    var exp_prod = []
    onSnapshot(expColRef, (snapshot)=>{
    
    snapshot.docs.forEach((doc)=>{
        exp_prod.push({...doc.data() ,id: doc.id})
        // setExp_prod(exp_prod);
        })
    })

    return exp_prod
}