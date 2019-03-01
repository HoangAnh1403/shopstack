import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Portfolio extends Component {
	constructor(props) {
         super(props);
         this.state = { text: '' };
    }
    componentWillMount() {
      console.log("componentWillMount da chay")
    }

    componentDidMount() {
        console.log("componentDidMount da chay")
    }

	render() {
      	return (
        	<portfolio id="portfolio">
		        <section className="blox  dark     respo-bg-none w-animate  w-start_animation" style={{paddingTop: 'px', paddingBottom: '0px', background: 'url("http://www.shopstack.asia:80/wp-content/uploads/2015/12/blx-d-p01v2-1.jpg") no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover', minHeight: '810px', backgroundColor: '#373332'}}><div className="max-overlay" style={{backgroundColor: ''}} /><div className="wpb_row vc_row-fluid full-row"><div className="container"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner vc_custom_1454330016557"><div className="wpb_wrapper"><hr className="vertical-space4" />
                  <div className="wpb_text_column wpb_content_element  vc_custom_1470462140669">
                    <div className="wpb_wrapper">
                      <p>eCommerce</p>
                      <p>Responsive Design</p>
                    </div>
                  </div>
                  <div className="vc_row wpb_row vc_inner vc_row-fluid"><div className="wpb_column vc_column_container vc_col-sm-4"><div className="vc_column-inner vc_custom_1456058882953"><div className="wpb_wrapper"><hr className="vertical-space2" /><article className="icon-box"><i className="fa-code" style={{}} /><h4>Premium Development</h4><p>An emphasis on cutting-edge design and modern usability standards</p></article><hr className="vertical-space2" /><article className="icon-box"><i className="sl-screen-smartphone" style={{}} /><h4>Retina Ready</h4><p>Devices show more pixels per square inch, resulting in sharper images</p></article><hr className="vertical-space2" /><article className="icon-box"><i className="sl-screen-desktop" style={{}} /><h4>Super Flexible</h4><p>Content moves freely across all screen resolutions and all devices</p></article><hr className="vertical-space2" /></div></div></div><div className="wpb_column vc_column_container vc_col-sm-4"><div className="vc_column-inner "><div className="wpb_wrapper" /></div></div><div className="wpb_column vc_column_container vc_col-sm-4"><div className="vc_column-inner "><div className="wpb_wrapper"><hr className="vertical-space4" /><hr className="vertical-space2" /><hr className="vertical-space2" /></div></div></div></div></div></div></div></div></div></section>
		    </portfolio>
	    );
   }
}

export default Portfolio;



