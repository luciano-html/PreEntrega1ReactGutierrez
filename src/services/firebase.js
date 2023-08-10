
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, where, query ,addDoc } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCDPwpnpM7CtG8U1lE-nsy_R7E_x1u4Ho0",
    authDomain: "proyectoreactecommerce.firebaseapp.com",
    projectId: "proyectoreactecommerce",
    storageBucket: "proyectoreactecommerce.appspot.com",
    messagingSenderId: "802431172399",
    appId: "1:802431172399:web:0e3ce1c01ccab6545eebda"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase)



async function getData() {
    const productRef = collection(db, "products")
    const documentSnap = await getDocs(productRef)
    // console.log(documentSnap.docs[0].data())
    const docData = documentSnap.docs.map(item => (
        { ...item.data(), id: item.id }
    )
        // let fullData = item.data()
        // fullData.id = item.id
        // return fullData
    )
    return docData
}
async function getProductData(id) {


    const docRef = doc(db, "products", id);
    const documentSnap = await getDoc(docRef);

    if (documentSnap.exists()) {
        return ({ ...documentSnap.data(), id: documentSnap.id })
    } else {
        console.log("No such document!");
    }

}

async function getProductByCategory(category){
    const productRef = collection(db, "products")
    const q = query(productRef,where("category","==",category))

    const documentSnap = await getDocs(q)
    // console.log(documentSnap.docs[0].data())
    const docData = documentSnap.docs.map(item => (
        { ...item.data(), id: item.id }
    )
        // let fullData = item.data()
        // fullData.id = item.id
        // return fullData
    )
    return docData
}

async function createDocOrder(newOrderData){
    const docRef = await addDoc(collection(db, "orders"), newOrderData,
    )
return docRef.id}
    
export { getData, getProductData , getProductByCategory,createDocOrder }

