import "./button.scss"
import "./theme.scss"
import "./font.scss"
import "./home.scss"
import { useReducer,useState } from "react"
import {v4 as uuidv4} from "uuid"
import x from "./SVGs/circle_x_btn.svg"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,collection,getDocs,
  addDoc,deleteDoc,doc
} from "firebase/firestore"
  
//   // MY OWN TEST PROMISE
//   let p = new Promise((resolve, reject)=>{
//     let a = 1 + 1
//     if(a  === 2){
//       resolve({
//         name : "Nnamdi",
//         class : "500L"
//       })
//     } else {
//       reject("failed")
//     }
//   })
  
//   p.then((message)=>{
//     console.log("My status is " + message.name + " " + message.class)
//   })
//   .catch((message)=>{
//     console.log("the promise " + message)
//   })

const UPDATEINFO = {
    UPDATETITLE : "updatetitle",
    UPDATESUBTITLE : "updatesubtitle",
    UPDATEWHY : "updatewhy",
    UPDATEIMG : "updateimg",
    UPDATEPRICE : "updateprice",
    UPDATESTAR : "updatestar",
    UPDATELINK : "updatelink",
    UPDATE_ID : "updateid",
}

// ALL PRODUCT FEATURES
let title = "";
let subtitle = "";
let image = "";
let price = "";
let star = "";
let link = "";
let id = "";

// ALL EXP PRODUCT FEATURES
let exp_title = "";
let exp_subtitle = "";
let exp_why = "";
let exp_image = "";
let exp_link = "";
let exp_id = "";

export default function MyFirebase (){
    function handlesubmit (e){
        e.preventDefault()
    }
    // RESET KONGA ADD FORM
    function ResetAddform(){
        title = "";
        dispatch({type : UPDATEINFO.UPDATETITLE , payload : title})
        subtitle = "";
        dispatch({type : UPDATEINFO.UPDATESUBTITLE , payload : subtitle})
        image = "";
        dispatch({type : UPDATEINFO.UPDATEIMG , payload : image})
        price = "";
        dispatch({type : UPDATEINFO.UPDATEPRICE , payload : price})
        star = "";
        dispatch({type : UPDATEINFO.UPDATESTAR , payload : star})
        link = "";
        dispatch({type : UPDATEINFO.UPDATELINK , payload : link})
    }
    // RESET EXP ADD FORM
    function ResetExpAddform(){
        exp_title = "";
        exp_dispatch({type : UPDATEINFO.UPDATETITLE , payload : exp_title})
        exp_subtitle = "";
        exp_dispatch({type : UPDATEINFO.UPDATESUBTITLE , payload : exp_subtitle})
        exp_why = "";
        exp_dispatch({type : UPDATEINFO.UPDATEWHY , payload : exp_why})
        exp_image = "";
        exp_dispatch({type : UPDATEINFO.UPDATEIMG , payload : exp_image})
        exp_link = "";
        exp_dispatch({type : UPDATEINFO.UPDATELINK , payload : exp_link})
    }
    // RESET KONGA DELETE FORM
    function ResetDelform(){
        id = "";
        dispatch({type : UPDATEINFO.UPDATE_ID , payload : id})
    }
    // RESET EXP DELETE FORM
    function ResetExpDelform(){
        exp_id = "";
        exp_dispatch({type : UPDATEINFO.UPDATE_ID , payload : exp_id})
    }
    // KONGA REDUCER FUNCTION
    function reducer(state, action){
        switch (action.type) {
            case UPDATEINFO.UPDATETITLE : {
                return {...state, title : action.payload }
            }
            case UPDATEINFO.UPDATESUBTITLE : {
                return {...state, subtitle : action.payload }
            }
            case UPDATEINFO.UPDATEIMG : {
                return {...state, image : action.payload }
            }
            case UPDATEINFO.UPDATEPRICE : {
                return {...state, price : action.payload }
            }
            case UPDATEINFO.UPDATESTAR : {
                return {...state, star : action.payload }
            }
            case UPDATEINFO.UPDATELINK : {
                return {...state, link : action.payload }
            }
            case UPDATEINFO.UPDATE_ID : {
                return {...state, id : action.payload }
            }
        }
    }
    // EXP REDUCER FUNCTION
    function exp_reducer(state, action){
        switch (action.type) {
            case UPDATEINFO.UPDATETITLE : {
                return {...state, exp_title : action.payload }
            }
            case UPDATEINFO.UPDATESUBTITLE : {
                return {...state, exp_subtitle : action.payload }
            }
            case UPDATEINFO.UPDATEWHY : {
                return {...state, exp_why : action.payload }
            }
            case UPDATEINFO.UPDATEIMG : {
                return {...state, exp_image : action.payload }
            }
            case UPDATEINFO.UPDATELINK : {
                return {...state, exp_link : action.payload }
            }
            case UPDATEINFO.UPDATE_ID : {
                return {...state, exp_id : action.payload }
            }
        }
    }

    // USE REDUCER INITIALIZATION
    const [product, dispatch] = useReducer(reducer, {title, subtitle, image, price, star, link, id})
    const [exp_product, exp_dispatch] = useReducer(exp_reducer, {exp_title, exp_subtitle, exp_why, exp_image, exp_link, exp_id})

    // DIV, LABALE AND INPUT STYLES
    const divstyle = "w-full h-max flex flex-row justify-between items-center flex-grow"
    const labelstyle = "mr-2 my-2 text-xl font-bold"
    const inputstyle = "ml-1 px-2 my-2 input rounded-xs border-[1px] border-gray-300 flex-grow text-xl overflow-hidden"

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
  
  
  // Get Collection Data
  let products = []
  let exp_prod = []
  
  getDocs(colRef)
      .then((snapshot)=>{
        snapshot.docs.forEach((doc)=>{
          products.push({...doc.data() ,id: doc.id})
        })
        console.log(products)
      })
      .catch((error)=>{
        console.log(error.message)
      })

    getDocs(expColRef)
    .then((snapshot)=>{
    snapshot.docs.forEach((doc)=>{
        exp_prod.push({...doc.data() ,id: doc.id})
    })
    console.log(exp_prod)
    })
    .catch((error)=>{
    console.log(error.message)
    })
  
  function AddProduct(){
    addDoc(colRef, {
      title : product.title,
      subtitle : product.subtitle,
      image : product.image,
      price : product.price,
      star : product.star,
      link : product.link,
    })
    .then(()=>{
        alert("item successfully created")
    })
  }

  function AddExpProduct(){
    addDoc(expColRef, {
      title : exp_product.exp_title,
      subtitle : exp_product.exp_subtitle,
      why : exp_product.exp_why,
      image : exp_product.exp_image,
      link : exp_product.exp_link,
    })
    .then(()=>{
        alert("item successfully created")
    })
  }
  
  function DelProduct(){
    setModaldisplay("hidden");
    //   Document ref
    const docRef = doc(product_db, "products", product.id )
    deleteDoc(docRef)
        .then(()=>{
            alert("item successfully deleted")
        })
  }

  function DelExpProduct(){
    setExpModaldisplay("hidden");
    //   Document ref
    const expdocRef = doc(product_db, "exp", exp_product.exp_id )
    deleteDoc(expdocRef)
        .then(()=>{
            alert("item successfully deleted")
        })
  }

  const [modaldisplay, setModaldisplay] = useState("hidden")
  const [expmodaldisplay, setExpModaldisplay] = useState("hidden")
  const [btnshow , setBtnshow] = useState("hidden");
//   const [name, setName] = useState("");
  const [search,setSearch] = useState("hidden")
  const [expsearch,setExpSearch] = useState("hidden")
  const [check,setCheck] = useState("");
  const [expcheck,setExpCheck] = useState("");
  const [xbtn,setXbtn] = useState("hidden");
  const [filtereditems,setFiltereditems] = useState([]);
  const [expfiltereditems,setexpFiltereditems] = useState([]);


//   final search
  let finalsearch = [...new Set(filtereditems.map((item)=>{return item }))];
// EXP final search
  let expfinalsearch = [...new Set(expfiltereditems.map((item)=>{return item }))];
  const handleChange = (e) => {
    // 👇 Get input value from "event"
    e.preventDefault();
    // setName(e.target.value);
    setCheck(e.target.value);
    setSearch("block");
    if(e.target.value === "")
    {
        setSearch("hidden")
    }
    if(check.length >= 0 && e.target.value !== ""){
        setXbtn("inline-block")
    }
    else{
        setXbtn("hidden")
    }
    setFiltereditems(products.filter((item)=>{
        return(
            item.title.toLowerCase().includes(check.toLowerCase())
        )
    }))

  };

//   EXP HANDLE CHANGE
  const exphandleChange = (e) => {
    // 👇 Get input value from "event"
    e.preventDefault();
    // setName(e.target.value);
    setExpCheck(e.target.value);
    setExpSearch("block");
    if(e.target.value === "")
    {
        setExpSearch("hidden")
    }
    if(expcheck.length >= 0 && e.target.value !== ""){
        setXbtn("inline-block")
    }
    else{
        setXbtn("hidden")
    }
    setexpFiltereditems(exp_prod.filter((item)=>{
        return(
            item.title.toLowerCase().includes(expcheck.toLowerCase())
        )
    }))

  };

    return (
        <>
            <h1 className="mt-3 title text-red-500"> KONGA </h1>

            <div className="p-3 mx-auto h-full flex flex-col justify-center items-start w-[90%] md:w-[50%]">
                <h1 className="text-xl font-bold mx-auto w-full flex flex-wrap underline"> CREATE </h1>
                <form onSubmit={handlesubmit}
                className="flex flex-col justify-between items-start mb-5 h-max w-full">
                    {/* TITLE */}
                    <div className={divstyle}>
                        <label className = {labelstyle} htmlFor = "title"> Title: </label>
                        <input className = {inputstyle} onChange={(e)=>{title = e.target.value; dispatch({type : UPDATEINFO.UPDATETITLE , payload : title})}} type = "text" name = "title" value={product.title}/>
                    </div>
                    <div className={divstyle}>
                        <label className = {labelstyle} htmlFor = "subtitle"> Subtitle: </label>
                        <input className = {inputstyle} onChange={(e)=>{subtitle = e.target.value; dispatch({type : UPDATEINFO.UPDATESUBTITLE , payload : subtitle})}} type = "text" name = "subtitle" value={product.subtitle}/>
                    </div>
                    <div className={divstyle}>
                        <label className = {labelstyle} htmlFor = "image"> image src: </label>
                        <input className = {inputstyle} onChange={(e)=>{image = e.target.value; dispatch({type : UPDATEINFO.UPDATEIMG , payload : image})}} type = "text" name = "image" value={product.image}/>
                    </div>
                    <div className={divstyle}>
                        <label className = {labelstyle} htmlFor = "price"> Price: </label>
                        <input className = {inputstyle} onChange={(e)=>{price = e.target.value; dispatch({type : UPDATEINFO.UPDATEPRICE , payload : price})}} type = "text" name = "price" value={product.price}/>
                    </div>
                    <div className={divstyle}>
                        <label className = {labelstyle} htmlFor = "star"> star: </label>
                        <input className = {inputstyle} onChange={(e)=>{star = e.target.value; dispatch({type : UPDATEINFO.UPDATESTAR , payload : star})}} type = "text" name = "star" value={product.star}/>
                    </div>
                    <div className={divstyle}>
                        <label className = {labelstyle} htmlFor = "link"> LInk: </label>
                        <input className = {inputstyle} onChange={(e)=>{link = e.target.value; dispatch({type : UPDATEINFO.UPDATELINK , payload : link})}} type = "text" name = "link" value={product.link}/>
                    </div>
                    {/* CREATE OR DELETE BUTTONS */}
                    <div className="w-max mx-auto p-2 flex flex-row items-center">
                        <button type = "reset" onClick = {()=>{AddProduct(); ResetAddform();}} className="min-w-[7rem] mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-xl">
                        Create Item
                        </button>
                    </div>
                </form>

                <h1 className="text-xl font-bold mx-auto w-full flex flex-wrap underline"> DELETE </h1>
                <form onSubmit={handlesubmit}
                className="flex flex-col justify-between items-start h-max w-full">
                    {/* NAME AND ID */}
                    <div className={divstyle + " relative"}>
                        <label className = {labelstyle} htmlFor = "name"> NAME: </label>
                        <input className = {inputstyle} onChange={handleChange} placeholder="type in item name" type = "text" name = "name" value={check}/>
                        {/* BUTTON TO CLEAR SEARCH BAR */}
                        <button className = {"absolute h-[98%] top-0 right-1 bottom-0 nohightlight " + xbtn} onClick={()=>{setCheck("");setXbtn("hidden");setSearch("hidden")}}><img className = "bg-white w-[25px]" src = {x} alt = "delete button"/></button>
                        {/* DIV WHERE ITEMS SHOW UP */}
                        <div className={"absolute z-[1] searcheddiv overflow-y-scroll black_col rounded-lg p-2 flex flex-col flex-nowrap left-0 translate-y-[100%] right-0 bottom-[-10%] max-h-[412px] " + search}> 
                            {
                                finalsearch.map((item)=>{
                                    return (
                                        <button type = "button" key = {uuidv4()} onClick = {()=>{
                                            setCheck(item.title);
                                            setSearch("hidden")
                                            dispatch({type : UPDATEINFO.UPDATE_ID , payload : item.id})
                                        }} className="flex flex-row text text-white mx-1 my-2 xl:my-1"> {item.title} </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={divstyle}>
                        <label className = {labelstyle} htmlFor = "id"> ID: </label>
                        <input className = {inputstyle} onChange={(e)=>{id = e.target.value; dispatch({type : UPDATEINFO.UPDATE_ID , payload : id})}} placeholder= "ID shows up automatically" type = "text" name = "id" value={product.id}/>
                    </div>
                    {/* CREATE OR DELETE BUTTONS */}
                    <div className="w-max mx-auto p-2 flex flex-row items-center">
                        <button type = "reset" onClick = {()=>{id = ""; dispatch({type : UPDATEINFO.UPDATE_ID , payload : id})}} className="min-w-[7rem] ml-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded-xl">
                        Clear ID
                        </button>
                        <button type = "reset" onClick = {()=>{
                            if(product.id.length === 20){
                                setModaldisplay("block");
                                setBtnshow("block");
                            }
                            else {
                                alert("No item Provided")
                            }
                        }} 
                            className="min-w-[7rem] ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl">
                        Delete Item
                        </button>
                    </div>
                </form>

                {/* BLUR BOX */}
                <button type = "button" className={"z-[1] absolute top-0 right-0 left-0 bottom-0 black_col opacity-70 " + btnshow}></button>

            </div>

            {/* MODAL */}
            <div id="popup-modal" tabIndex="-1" className={"top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex justify-center items-center z-50 p-4 overflow-x-hidden overflow-y-auto " + modaldisplay}>
                <div className="relative w-72 md:w-auto max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center">
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                            <button onClick = {()=>{DelProduct(); setBtnshow("hidden"); ResetDelform();}} data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Yes, I'm sure
                            </button>
                            <button onClick = {()=>{setModaldisplay("hidden"); setBtnshow("hidden"); ResetDelform(); setCheck(""); setXbtn("hidden");}} data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                        </div>
                    </div>
                </div>
            </div>
{/*             



             */}
            <h1 className="mt-12 title text-red-500"> EXPERTNAIRE/JVZOO </h1>
            <div className="p-3 mx-auto h-full flex flex-col justify-center items-start w-[90%] md:w-[50%]">
                <h1 className="text-xl font-bold mx-auto w-full flex flex-wrap underline"> CREATE </h1>
                <form onSubmit={handlesubmit}
                className="flex flex-col justify-between items-start mb-5 h-max w-full">
                    {/* TITLE */}
                    <div className={divstyle}>
                        <label className = {labelstyle} htmlFor = "title"> Title: </label>
                        <input className = {inputstyle} onChange={(e)=>{exp_title = e.target.value; exp_dispatch({type : UPDATEINFO.UPDATETITLE , payload : exp_title})}} type = "text" name = "title" value={exp_product.exp_title}/>
                    </div>
                    <div className={divstyle}>
                        <label className = {labelstyle} htmlFor = "subtitle"> Subtitle: </label>
                        <input className = {inputstyle} onChange={(e)=>{exp_subtitle = e.target.value; exp_dispatch({type : UPDATEINFO.UPDATESUBTITLE , payload : exp_subtitle})}} type = "text" name = "subtitle" value={exp_product.exp_subtitle}/>
                    </div>
                    <div className={divstyle}>
                        <label className = {labelstyle} htmlFor = "why"> Why: </label>
                        <input className = {inputstyle} onChange={(e)=>{exp_why = e.target.value; exp_dispatch({type : UPDATEINFO.UPDATEWHY , payload : exp_why})}} type = "text" name = "why" value={exp_product.exp_why}/>
                    </div>
                    <div className={divstyle}>
                        <label className = {labelstyle} htmlFor = "image"> image src: </label>
                        <input className = {inputstyle} onChange={(e)=>{exp_image = e.target.value; exp_dispatch({type : UPDATEINFO.UPDATEIMG , payload : exp_image})}} type = "text" name = "image" value={exp_product.exp_image}/>
                    </div>
                    <div className={divstyle}>
                        <label className = {labelstyle} htmlFor = "link"> LInk: </label>
                        <input className = {inputstyle} onChange={(e)=>{exp_link = e.target.value; exp_dispatch({type : UPDATEINFO.UPDATELINK , payload : exp_link})}} type = "text" name = "link" value={exp_product.exp_link}/>
                    </div>
                    {/* CREATE OR DELETE BUTTONS */}
                    <div className="w-max mx-auto p-2 flex flex-row items-center">
                        <button type = "reset" onClick = {()=>{AddExpProduct(); ResetExpAddform();}} className="min-w-[7rem] mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-xl">
                        Create Item
                        </button>
                    </div>
                </form>

                <h1 className="text-xl font-bold mx-auto w-full flex flex-wrap underline"> DELETE </h1>
                <form onSubmit={handlesubmit}
                className="flex flex-col justify-between items-start h-max w-full">
                    {/* NAME AND ID */}
                    <div className={divstyle + " relative"}>
                        <label className = {labelstyle} htmlFor = "expname"> NAME: </label>
                        <input className = {inputstyle} onChange={exphandleChange} placeholder="type in item name" type = "text" name = "expname" value={expcheck}/>
                        {/* BUTTON TO CLEAR SEARCH BAR */}
                        <button className = {"absolute h-[98%] top-0 right-1 bottom-0 nohightlight " + xbtn} onClick={()=>{setExpCheck("");setXbtn("hidden");setExpSearch("hidden")}}><img className = "bg-white w-[25px]" src = {x} alt = "delete button"/></button>
                        {/* DIV WHERE ITEMS SHOW UP */}
                        <div className={"absolute z-[1] searcheddiv overflow-y-scroll black_col rounded-lg p-2 flex flex-col flex-nowrap left-0 translate-y-[100%] right-0 bottom-[-10%] max-h-[412px] " + expsearch}> 
                            {
                                expfinalsearch.map((item)=>{
                                    return (
                                        <button type = "button" key = {uuidv4()} onClick = {()=>{
                                            setExpCheck(item.title);
                                            setExpSearch("hidden")
                                            exp_dispatch({type : UPDATEINFO.UPDATE_ID , payload : item.id})
                                        }} className="flex flex-row text text-white mx-1 my-2 xl:my-1"> {item.title} </button>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={divstyle}>
                        <label className = {labelstyle} htmlFor = "expid"> ID: </label>
                        <input className = {inputstyle} onChange={(e)=>{exp_id = e.target.value; exp_dispatch({type : UPDATEINFO.UPDATE_ID , payload : exp_id})}} placeholder= "ID shows up automatically" type = "text" name = "expid" value={exp_product.exp_id}/>
                    </div>
                    {/* CREATE OR DELETE BUTTONS */}
                    <div className="w-max mx-auto p-2 flex flex-row items-center">
                        <button type = "reset" onClick = {()=>{exp_id = ""; exp_dispatch({type : UPDATEINFO.UPDATE_ID , payload : exp_id})}} className="min-w-[7rem] ml-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded-xl">
                        Clear ID
                        </button>
                        <button type = "reset" onClick = {()=>{
                                if(exp_product.exp_id.length === 20){
                                    setExpModaldisplay("block");
                                    setBtnshow("block");
                                }
                                else{
                                    alert("No Item Provided")
                                }
                            }} 
                            className="min-w-[7rem] ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl">
                        Delete Item
                        </button>
                    </div>
                </form>

                {/* BLUR BOX */}
                <button type = "button" className={"z-[1] absolute top-0 right-0 left-0 bottom-0 black_col opacity-70 " + btnshow}></button>

            </div>

            {/* MODAL */}
            <div id="popup-modal" tabIndex="-1" className={"top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute flex justify-center items-center z-50 p-4 overflow-x-hidden overflow-y-auto " + expmodaldisplay}>
                <div className="relative w-72 md:w-auto max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center">
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                            <button onClick = {()=>{DelExpProduct(); setBtnshow("hidden"); ResetExpDelform();}} data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                Yes, I'm sure
                            </button>
                            <button onClick = {()=>{setExpModaldisplay("hidden"); setBtnshow("hidden"); ResetExpDelform(); setExpCheck(""); setXbtn("hidden");}} data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}