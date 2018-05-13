import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import {AboutComponent} from '../AboutComponent/AboutComponent';

export class CopyRightComponent extends React.Component{
    render() {
        return(
            <div className="copyright-details">
                <div className="copyright">
                    <div className= 'about-social-icon text-center'>
                        <ul className="about-social">
                            <li className="wow fadeIn" data-wow-delay=".2s"><a href="www.facebook.com" target="newtab"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li className="wow fadeIn" data-wow-delay=".4s"><a href="www.twitter.com" target="newtab"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li className="wow fadeIn" data-wow-delay=".6s"><a href="www.pinterest.com" target="newtab"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                            <li className="wow fadeIn" data-wow-delay=".8s"><a href="www.linkedin.com" target="newtab"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li className="wow fadeIn" data-wow-delay="1s"><a href="www.behance.com" target="newtab"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
                            <li className="wow fadeIn" data-wow-delay="1.2s"><a href="www.instagram.com" target="newtab"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>{/*<!-- end about-social-icon -->*/}
                    <h3>© 2018 Ethan Burrow Fairweather aka <a href="https://www.ebseiten.com">犬の大将</a></h3>
                    <h5>Design inspired by: Tamzid Hossain</h5>
                </div>{/*<!-- end copyright -->*/}
            </div>
        )
    }

}

