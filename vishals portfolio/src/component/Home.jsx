import React from 'react';
import Banner from './Banner';
import Service from './service';
import Project from './projects';
import Client from './ourClient';
import Comments from './Comments';
function Home() {
  return (
    <div>
      <Banner/>
      <Service/>
      <Project/>
      <Client/>
      <Comments/>
    </div>
  )
}

export default Home