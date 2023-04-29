import { useState,useEffect } from "react";
import { colRef } from "../MyFirebase"
import {
  query, where, onSnapshot
} from "firebase/firestore"


export function ServeGroupItems (gname){
    const [groupitems, setGroupitems] = useState([])
    const q = query(colRef, where("group", "==", gname))
    useEffect(()=>{
      onSnapshot(q, (snapshot)=>{
        let tempgroup = []
        snapshot.docs.forEach((doc)=>{
            tempgroup.push({...doc.data() ,id: doc.id})
            // console.log(tempgroup)
            setGroupitems(tempgroup)
            })
    })
    }, [])
    return groupitems
}