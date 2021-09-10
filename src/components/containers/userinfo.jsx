import React from 'react'
import Menu from "../menu";
import './userinfo.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faGlobe)

export default function  UserInfo() {
  return (
    <>
    <div className = "post d-flex">
      <div className = "image-wrapper">
        <img src = "pro_image.JPG" alt = "" />
      </div>

      <div className = "d-flex flex-column content">
        <h2>Sajeda Sultana</h2>
        <div> 1hr .<FontAwesomeIcon icon = 'globe'/></div>
      </div>

      <div className = "menu-bar">
        <Menu />
      </div>

    </div>
    <div className = "post-content">
      <p> It always seems impossible until it is done - Nelson Mandela </p>
    </div>
  </>
  )
}
