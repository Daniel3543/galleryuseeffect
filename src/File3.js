import { vodka } from './baza';
import Zoom from 'react-medium-image-zoom';

export default function File3() {

  return (
    <div className="container">
      <h2>VODKA</h2>
        <div className="carcas">
            {
              vodka.map((elem, index) => {
                return (
                  <div className="block" key={elem.id}>
                    <div className="effect">
                      <p>{elem.name}</p>
                      <Zoom>
                      <img src={elem.img} alt="" />
                      </Zoom>
                      <span>{elem.price}</span>
                    </div>
                  </div>
                )
              })
            }
        </div>
    </div>
  )
}
