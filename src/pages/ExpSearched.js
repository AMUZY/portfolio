import SearchCard from "../components/SearchCard";
import { v4 as uuidv4 } from "uuid";
import { allprods } from "../App";
import { SEARCHED } from "../panels/ProductArea";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import bluearrow from "../SVGs/r_b_arrow.svg";
import { PATHS } from "./Konga/Konga";
import { useParams } from "react-router-dom";
import { EXPITEMS } from "./Expertnaire/Expert";
import ExpSearchCard from "../components/ExpSearchCard";

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


export default function ExpSearched() {
    const { searched } = useParams();

    const [products,setProducts] = useState([])
    const [exp_prod,setExp_prod] = useState([])


    onSnapshot(colRef, (snapshot)=>{
        var products = []
        snapshot.docs.forEach((doc)=>{
            products.push({...doc.data() ,id: doc.id})
            })
        // console.log(products)
    })

    useEffect(()=>{
        onSnapshot(expColRef, (snapshot)=>{
        var exp_prod = []
        snapshot.docs.forEach((doc)=>{
            // var newObj = {
            //     id : doc.id,
            //     title : doc.data().title,
            //     subtitle : doc.data().subtitle,
            //     image : doc.data().image,
            //     why : doc.data().why,
            //     link : doc.data().link,
            // }
            exp_prod.push({...doc.data() ,id: doc.id})
            setExp_prod(exp_prod);
            })
    })
    }, [])

    var state;
    let count = [1];
    exp_prod.forEach((item) => {
        if (searched === item.title) {
            const newstuff = {
            title: item.title,
            subtitle: item.subtitle,
            image: item.image,
            why: item.why,
            link : item.link,
            };
            state = newstuff;
        }
    });
      return (
            <div className="w-full h-full p-8">
                {count.map(()=>{
                        if(state){
                            return (
                                <div key = {uuidv4()}>
                                    <Link className="mb-4 specs flex flex-row items-center justify-center" to = "/expertnaire/exp-products" > <img className = "rotate-180 mx-2" src= {bluearrow}/> Return to view more </Link>
                                    <ExpSearchCard
                                        title={state.title}
                                        subtitle={state.subtitle}
                                        image={state.image}
                                        why = {state.why}
                                        link = {state.link}
                                    />
                                </div>

                            )
                        }
                        else{
                            return (
                                <Link key = {uuidv4()} className="mb-4 specs flex flex-row items-center justify-center" to = "/expertnaire/exp-products" > <img className = "rotate-180 mx-2" src= {bluearrow}/> Return to view more </Link>
                            )
                        }
                    })
                }
            </div>
      );
}
