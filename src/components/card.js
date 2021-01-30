import React,{Component} from 'react'
import picture from '../public/Tendies.jpg'
import './card.css'

class Card extends Component {
    render() {
        return(
            <div className="card">
                    <div>
                        <img src={picture} alt="Logo"/>
                    </div>
                    <p className="title">Tendies</p>
                    {/* <p className="descr">Descriptor</p> */}
            </div>
        )
    }
}

export default Card;