import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Room extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.name,
            light: props.light
        }
    }
    
    toggleLight = () => {
        this.setState((state, props) => {
            if (this.state.light === "on") {
                return {
                    light: "off"
                }
            } else {
                console.log("Turning light on")
                return {
                    light: "on"
                }
            }
        })
    }

    render() {
        return(
            <div className="room">
                <div className="roomName">{this.state.name}</div>
                <div className={`roomLight ${this.state.light}`}></div>
                <button className="roomSwitch" onClick={this.toggleLight}>Switch</button>
            </div>
        )
    }

    //render() {{name, light}
    //return(
//     <div className="room">
//         <div className="roomName">{name}</div>
//         <div className={`roomLight ${light}`}></div>
//         <button className="roomSwitch">Switch</button>
//     </div>
//     )
// }
}

const Index = () => 
    <div>
        <Room name="Living Room" light="on"/>
        <Room name="Bed Room" light="on"/>
        <Room name="Kitchen" light="off"/>
        <Room name="Garage" light="off"/>
    </div>

ReactDOM.render(<Index />, document.querySelector('#root'))