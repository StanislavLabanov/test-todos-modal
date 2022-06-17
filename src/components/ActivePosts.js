import React from "react";
import MainLayout from "../layout/MainLayout";
import { useSelector } from 'react-redux'

export default function ActivePosts() {
   const selector = useSelector(state => state.mainReduser.todosMass)

   return (
      <MainLayout>
         {
            selector.length
            && selector.map((el, index) =>
               el.completed &&
               <div key={index} className="block_elem">
                  {el.text}
               </div>
            )
         }
      </MainLayout>
   )
}