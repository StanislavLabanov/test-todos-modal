import React from "react"
import InputFormPage from './InputFormPage'
import MainLayout from "../layout/MainLayout";
import { useSelector } from 'react-redux'
import { newTodosObject } from "../action/action";
import { useDispatch } from 'react-redux'

function PostsPage() {
   const selector = useSelector(state => state.mainReduser.todosMass)
   const dispatch = useDispatch()

   function onChangeElements(id) {
      const todos = selector.map(el => {
         if (el.text === id) {
            el.completed = !el.completed
         }
         return el
      })
      dispatch(newTodosObject(todos))
   }

   return (
      <MainLayout>
         <InputFormPage />
         {
            selector.length
               ? selector.map((el, index) =>
                  <div key={index} className={el.completed ? "block_elem true" : "block_elem"}>
                     <input type="checkbox" onChange={() => onChangeElements(el.text)} />
                     {el.text}
                  </div>
               )
               : <h1>Нет заметок</h1>
         }
      </MainLayout>
   )
}

export default PostsPage