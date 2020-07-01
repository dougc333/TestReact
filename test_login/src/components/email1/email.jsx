import React from 'react'
import './email.css'
const EmailInput=(props)=>{
  return(
    <div>
    <div>email</div>
    <input onChange={props.onChange} placeholder={props.email_value} />
    <div>
    <button className="btn default" onSubmit={props.onChange}><span>Submit</span></button>
    </div>
    </div>
  )
}
export default EmailInput