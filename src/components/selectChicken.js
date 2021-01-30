import React,{Component} from 'react'
import Card from './card.js'
import Top from './top.js'

class SelectChicken extends Component {
    render() {
        return(
            <div className="parent">
            <div className="topHalf">
              <Top/>
            </div>
            <div className="bottomHalf">
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
        )
    }
}

export default SelectChicken;