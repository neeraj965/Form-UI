import './Main.css'

export default function Main(){

    return(
       <div>
       

       <span id='name'>Name</span>
       <input type="text" placeHolder='John Doe' id='input-name' />

       <span id="email">Email-id</span>
       <input type='email' placeHolder='johnDoee@pupa.com' id='input-email'/>


       <span id="number">Phone Number</span>
       <input type="number" placeHolder='+914477329864' id='input-number' />


       <span id="linkedin">Linkedin URL</span>
       <input type="url" placeHolder='johndoe@linkdin.com'id='linkedin-url' />

       <span id="whatsapp">Whatsapp Link</span>
       <input type="url" placeHolder='biwbbbskcbkw@whatsapp'id='whatsapp-url' />


<div className='update-container'>

<span id='update'>Update</span>
</div>






       </div>
    )
}