// 1 GENERAMOS LA PROMISE
// 2 SIMULAMOS LOS RETARDOS CON SETTIMEOUT
// 3 rESOLVEMOS LOS PRODUCTOS CON "RESOLVE"
// 4 RETORNAMOS LA PROMISE

const data = [
    {
        title: "Ventana de aluminio estándar",
        category: "ventanas",
        id: 1,
        price: 150,
        stock: 10,
        description: "Ventana de aluminio estándar de tamaño medio.",
        img: "https://www.aberturasruta8.com.ar/wp-content/uploads/2019/11/ventana-aluminio-modena1.jpg"
    },
    {
        title: "Ventana de aluminio con cristal doble",
        category: "ventanas",
        id: 2,
        price: 200,
        stock: 5,
        description: "Ventana de aluminio con cristal doble para mayor aislamiento.",
        img: "https://http2.mlstatic.com/D_NQ_NP_890556-MLA31578035313_072019-O.webp"
    },
    {
        title: "Ventana de aluminio repartida",
        category: "ventanas",
        id: 3,
        price: 180,
        stock: 8,
        description: "Ventana de aluminio corredera de tamaño grande.",
        img: "https://www.tecnooeste.com.ar/image/cache/herrero/ventanas-aluminio-blanco-120x110-vidrio-repartido-D_NQ_NP_623086-MLA32093709828_092019-F-800x800.jpg"
    },
    {
        title: "Puerta de aluminio moderna",
        category: "puertas",
        id: 4,
        price: 200,
        stock: 10,
        description: "Una elegante puerta de aluminio con diseño moderno.",
        img: "https://www.aberturastorri.com.ar/sitio/wp-content/uploads/2021/06/V580-1.jpg"
    },
    {
        title: "Puerta de aluminio clásica",
        category: "puertas",
        id: 5,
        price: 180,
        stock: 5,
        description: "Una puerta de aluminio clásica y resistente.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVzyUMxdXg0BEqrwRg0o1zhhrSHxi8b5ndA&usqp=CAU"
    }
]

function getData(idURL) {
    return new Promise((resolve, reject) => {

        console.log(data.find((item) => item.id === parseInt(idURL)))
        setTimeout(() => {
            resolve(data)
        }, 1000);
    })
}

export function getProductData(idURL) {
    return new Promise((resolve, reject) => {
        const request = (data.find((item) => item.id === parseInt(idURL)))
        setTimeout(() => {
            resolve(request)
        }, 1000);
    })
}

export function getProductByCategory(category) {
    return new Promise((resolve,reject)=>{
        const request = (data.filter(item => item.category.toLowerCase() === category.toLowerCase()))
        setTimeout(() => {
            resolve(request)
        }, 1000);
    })
}

export default getData;