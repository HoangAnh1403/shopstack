import React, { Component } from 'react';

class Footer extends Component {
	render() {
      	return (
	        <footer id="footer">
		        <section className="container footer-in">
		          <div className="row">
		            <div className="col-md-4">
		            <div className="widget">			
		            <div className="textwidget"><div className="vertical-space2" /></div>
		              </div></div>
		            <div className="col-md-4" />
		            <div className="col-md-4" />
		          </div>
		        </section>
		        <span id="scroll-top"><a className="scrollup" style={{display: 'block'}}><i className="fa-chevron-up" /></a></span>
      		</footer>
      	);
   }
}


export default Footer;