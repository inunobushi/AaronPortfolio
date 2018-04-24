import * as React from 'react';

export class RegistrationHeaderComponent extends React.Component{
    render() {
        return(
            <section className="inner-intro bg-img light-color overlay-before parallax-background">
             <div className="container">
               <div className="row title">
                 <div className="title_row">
                   <h1 data-title="Register"><span>Register</span></h1>
                   <div className="page-breadcrumb">
                       <a>Home</a>/ <span>Register</span>
                     </div>
                   
                 </div> 
               </div>
             </div>
           </section>
         )
    }
}