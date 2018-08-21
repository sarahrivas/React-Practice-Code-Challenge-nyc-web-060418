import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {


  return (
      <div className="belt">
        {props.allSushi.map((sushi) => (
            <Sushi
              key={sushi.id}
              sushi={sushi}
              sushiPlateClick = {props.sushiPlateClick}
              sushiImg={sushi.img_url}
            />
          )
        )}
        <MoreButton moreSushiClick={props.moreSushiClick}/>
      </div>
  )
}

export default SushiContainer
