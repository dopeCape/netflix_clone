import {React,useState,useEffect} from 'react';

import "./NavBar.css";
function NavBar() {
	const [show,handleShow] = useState(false);
	const chelckForTransitioScrool = ()=>{
	if(window.scrollY >100){
		handleShow(true)
	}else{
		handleShow(false)

	}
	}
	useEffect(()=>{

	window.addEventListener("scroll",chelckForTransitioScrool)
		return()=>window.removeEventListener("scroll",chelckForTransitioScrool)
	},[])
  return (
    <div className={`navbar ${show&&"nav_black"}`}>
		<div className="nav_contents">
		<img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" className="logo"/>
	  	<img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" className="avtar"/>
	  </div>
	  </div>
  )
}

export default NavBar
