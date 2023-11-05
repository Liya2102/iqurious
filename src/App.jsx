import React from 'react';
import {Footer,Blog,Possibilities,Features,FQA,Intro,Header} from './containers';
import { CTA, Brand, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Intro />
      <Features />
      <Possibilities />
      <CTA />
      <Blog />
      <FQA />
      <Footer />
    </div>
  )
}

export default App