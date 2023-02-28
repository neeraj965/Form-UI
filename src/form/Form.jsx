import './Form.css'
import {MdBatteryStd} from 'react-icons/md'
import  {MdNetworkWifi} from 'react-icons/md'
import {VscTriangleDown} from 'react-icons/vsc'
import {CgProfile} from 'react-icons/cg'
import {MdOutlineWatchLater} from 'react-icons/md'
export default function Form(){

    return(

        <div>
      <div id='yellow-container-mid'>
      <MdBatteryStd id='battery'/>
      <MdNetworkWifi id='ntwrk'/>
      <VscTriangleDown id='triangle'/>
      <CgProfile id='profile'/>
      <MdOutlineWatchLater id='watch'/>
  
      <span id='time'>12:00</span>
      <span id='mentor-detail'>Mentor Details</span>
      <span id='image-container'>
      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" id='pic' />


      </span>

      </div>
      <div id='right-container'></div>

    
        <span id='change-picture'>Change Picture</span>
        </div>
    )

  
}