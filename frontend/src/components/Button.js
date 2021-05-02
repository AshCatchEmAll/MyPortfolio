import React from "react"
import { randomInt } from "../Utility"

function generateStyle(axis, speed) {
    return {
        marginTop: `${randomInt(0, 25)}px`,
        marginLeft: `${randomInt(250, 350)}px`,
        width: '150px',
        backgroundColor: '#4FD8E0',
        color: '#3A3758'
    };
}

class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonStyle: generateStyle()
        };
    }

    mouseOver() {
        const update = () => {
            this.setState(() => ({
                buttonStyle: generateStyle()
            }));
        }
        let times = 50;
        const interval = setInterval(() => {
            if (times > 0) update();
            else clearInterval(interval)
            times--;
        }, 1000 / 60);
    }

    render() {
        return (
            <button onMouseOver={() => { this.mouseOver() }} style={this.state.buttonStyle} className='btn' onClick={() => window.location.href = `/template`}>
                Make
            </button>
        );
    }
}

export default Button
