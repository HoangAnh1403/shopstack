import React, { Component } from 'react';
import Topbar from './components/topbar/topbar';
import Header from './components/header/header';
import Parallax from './components/parallax/parallax';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';
import Services from './components/services/services';
import Counttime from './components/counttime/counttime';
import Work from './components/work/work';
import Clients from './components/clients/clients';
import Footer from './components/footer/footer';

// import Resume from './components/resume/resume';
// import resumeData from './resumeData';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App" id="wrap">
        <Topbar />
        <Header />
        <Parallax />
        <Contact />
        <Services />
        <Portfolio/>
        <Counttime/>
        <Work/>
        <Clients/>
        <Footer/>

      </div>
    );
  }
}

export default App;
