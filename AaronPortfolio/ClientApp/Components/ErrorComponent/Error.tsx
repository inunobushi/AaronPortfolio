import * as React from 'react';



export  class WebError extends React.Component{
    render(){
        return(
            <div>
                <div className="main-content not-found">
                    <i className="material-icons icn-error">error_outline</i>
                    <h2>Page Not Found</h2>
                </div>
            </div>
        )
    }
};

export default WebError;