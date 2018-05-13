import * as React from 'react';

export class ContactDirect extends React.Component {

    render() {
        return (
            <div className="row main-row text-center">
                <div className="col-md-4 col-sm-12">
                    <div className="info-details">
                        <i className="fa fa-desktop contact-icon" aria-hidden="true"></i>
                        <h3>Email</h3>
                        <p>Lamisa@gmail.com</p>
                    </div>{/*<!-- end info-details  -->*/}
                </div>{/*<!-- end col-md-4 -->*/}
                <div className="col-md-4 col-sm-12">
                    <div className="info-details">
                        <i className="fa fa-phone contact-icon" aria-hidden="true"></i>
                        <h3>Phone</h3>
                        <p>+8748347934</p>
                    </div>{/*<!-- end info-details  -->*/}
                </div>{/*<!-- end col-md-4 -->*/}
                <div className="col-md-4 col-sm-12">
                    <div className="info-details">
                        <i className="fa fa-car contact-icon" aria-hidden="true"></i>
                        <h3>Address</h3>
                        <p>Noakhali,Chittagong</p>
                    </div>{/*<!-- end info-details  -->*/}
                </div>{/*<!-- end col-md-4 -->*/}
            </div>
        )
    }
}