import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import {AboutComponent, Page} from '../AboutComponent/AboutComponent';

export class CopyRightComponent extends React.Component{

    page:Page = new Page();
    render() {
        return(
            <div className="copyright-details">
                <div className="copyright">
                    <div className= {{Page.class1},"text-center"}>
                        <ul className={{Page.class2},"about-social"}>
                            <li className="wow fadeIn" data-wow-delay=".2s"><a href="www.facebook.com" target="newtab"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li className="wow fadeIn" data-wow-delay=".4s"><a href="www.twitter.com" target="newtab"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li className="wow fadeIn" data-wow-delay=".6s"><a href="www.pinterest.com" target="newtab"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                            <li className="wow fadeIn" data-wow-delay=".8s"><a href="www.linkedin.com" target="newtab"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li className="wow fadeIn" data-wow-delay="1s"><a href="www.behance.com" target="newtab"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
                            <li className="wow fadeIn" data-wow-delay="1.2s"><a href="www.instagram.com" target="newtab"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>{/*<!-- end about-social-icon -->*/}
                    <h3>copyright and design: tamzid hossain</h3>
                </div>{/*<!-- end copyright -->*/}
            </div>
        )
    }

}

