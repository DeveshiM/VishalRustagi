import React from 'react';
import Banner from './Banner';
import Service from './service';
import Project from './projects';
import Client from './ourClient';
function Home() {
  return (
    <div>
      <Banner/>
      <Service/>
      <Project/>
      <Client/>
    </div>
  )
}

export default Home