import React from 'react';
import test_img from './image/1.jpg';
import Zoom from 'react-medium-image-zoom';

export default function File2() {
  return (
    <div className="container">
        <div className="block">
          <div className="effect">
            <Zoom>
              <img src={test_img} alt="" />
            </Zoom>
          </div>
        </div>
    </div>
  )
}
