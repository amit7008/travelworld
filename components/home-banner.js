import React from 'react';
import bannerBg from '@/assets/img/mainbanner.jpg';
import SearchTab from './search-tab';

const HomeBanner = () => {
  return (
    <div className='homeBanner' style={{backgroundImage: `url(${bannerBg.src})` }}>
        <h1>GET AWAY FOR THE WEEKEND</h1>
        <p>Cost Friendly Packages On Your Way</p>
        <SearchTab />
    </div>
  )
}

export default HomeBanner