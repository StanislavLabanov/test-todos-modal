import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { pailoadTesxtInput } from "../action/action";


function InputFormPage() {
   const dispatch = useDispatch()
   const [valueInp, setValueInp] = useState('')

   const changeHandler = (e) => {
      setValueInp(e.target.value)
   }

   const submitHandler = (e) => {
      e.preventDefault()
      dispatch(pailoadTesxtInput({ text: valueInp, completed: false }))
      setValueInp('')
   }

   return (
      <div className="input_form">
         <form onSubmit={(e) => submitHandler(e)}>
            <input type="text" className="form_input" value={valueInp} onChange={(e) => changeHandler(e)} placeholder="What needs to be done?" />
         </form>
      </div>
   );
}

export default InputFormPage