import React,{Component} from 'react'
import picture from '../public/Tendies.jpg'
import './card.css'

class Card extends Component {
    render() {
        return <div Class="card">
            <p>Tendies</p>
            <div Class="imgContainer"><img src={picture} alt="Logo"/></div>
            <p>Descriptor</p>
        </div>;
    }
}

export default Card;