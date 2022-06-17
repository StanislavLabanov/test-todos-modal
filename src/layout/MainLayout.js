import React from "react";
import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
   return (
      <>
         <div className='container'>
            <div className='modal'>
               <h1>Todos</h1>
               <div className="main_block_todo">
                  <div className="flex_buttons">
                     <Link to="/"><button>All tosos</button></Link>
                     <Link to="/active"><button>Active tosos</button></Link>
                     <Link to="/notodos"><button>Not active tosos</button></Link>
                  </div>
                  {children}
               </div>
            </div>
         </div>
      </>
   )
}