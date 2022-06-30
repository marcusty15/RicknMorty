
// import React, { useContext, useState } from "react";
// import { Context } from "../../store/Store";
// import CardPersonaje from "../CardPersonaje/CardPersonaje";
// import "./Search.css";
// const Search = () => {
//     const [busqueda, setBusqueda] = useState('');
//     const {personajes} = useContext(Context)

//     const handleChange = (e) =>{
//         setBusqueda(e.target.value)
//         personajes.filter()=>{
//             const {image, name, species, status} = personajes;
//       if(personajes.name===e.target.value){
//         <div className="card mb-3" style={{width: "18rem"}}>
//         <img src={image} className="card-img-top" alt={name} />
//         <div className="card-body">
//             <h5 className="card-title">{name}</h5>
//             <p className="card-text mb-1">{species}</p>
//             <p className="card-text">Status: {status === "Alive" ? "Vivo" : status === "unknown" ? "desconocido" : "muerto"}</p>
//             {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
//         </div>
//     </div>
//       } else {
//          alert("personaje no encvontrado")
//       }
//     }
// }
//     handleChange()
// return (
//   <div>
//     <input
//     value={busqueda}
//       placeholder="Enter Post Title"
//       onChange={(e) => handleChange(e)}
//       onSubmit={e=>{e.preventDefault()}}
//     />


//   </div>
// );
// }
// export default Search;
