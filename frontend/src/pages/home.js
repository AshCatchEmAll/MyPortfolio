import React, { Component } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import '../styles/style.css'
import { randomInt } from '../Utility'

const pStyle = {
    fontSize: '40px',
    color: '#ffffff'
}
const pParaStyle = {
    fontSize: '25px',
    color: '#ffffff'
}

export default class Home extends Component {
    constructor() {
        super();
        this.my = `M${'y'.repeat(randomInt(0, 2)) + 'e'.repeat(randomInt(0, 1))}`;
        this.portfolio = 'P' + 'Portfolio'.split('').map(c => c.repeat(randomInt(0, 2))).join('');
    }

    render() {
        return (
            <div>
                <Header title = {this.my+this.portfolio}></Header>
                <body>
                    <div className='container'>
                        <p className='align-middle' style={pStyle}>{this.portfolio} made easy.</p>
                        <p className='align-middle' style={pParaStyle}>Making your {this.portfolio} shouldnt be a hasle. pick from our templats, fill in the blank, and let your employing agenst know whaty ou can do.</p>
                        <Button></Button>
                    </div>
                </body>
            </div>
        )
    }
}
