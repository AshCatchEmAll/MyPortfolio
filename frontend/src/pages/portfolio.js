import React, { Component } from 'react'
import '../styles/style.css'

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            previousFile: null
        };
    }
    // Getting the previous file and converting it from raw data bytes to blob
    toDataURL = (url, callback) => {
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
          var reader = new FileReader();
          reader.onloadend = function() {
            callback(reader.result);
          }
          reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }

    // When page loads get previous image
    componentDidMount = () => {
        this.toDataURL(`http://localhost:8080/api/image/${this.props.match.params.username}`, dataUrl => {
            this.setState({
                previousFile: dataUrl
            })
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h2 style={{color:'white'}}>Portfolio - Share this link</h2>
                    <img crossOrigin='anonymous' id={'img'} src={this.state.previousFile} alt="" style={{maxHeight:"400px", maxWidth:"400px", display: 'block', marginLeft:'auto', marginRight:'auto'}}/>
                    <p style={{color:'#A17EEC', textAlign:'center'}}>
                        Hello my name is {this.props.match.params.username}!
                        <br/>
                        <br/>
                        Special Talents:
                        <br/>
                        -Google, Stackoverflow, and asking coworkers for help 24/7.
                        <br/>
                        -can fix their printers, wifi and coffee machines
                        <br/>
                        -learned python in 2 days and currently working on machine learning
                        <br/>
                        <br/>
                        Languages:
                        <br/>
                        -HTML, coded in notepad (dark mode of course :D)
                        <br/>
                        <br/>
                        Extra info:
                        <br/>
                        -ctrl + c, ctrl + v are my best friends
                        <br/>
                        -I am proficient in Internet Explorer, Firefox, and all related search engines.
                        <br/>
                        <br/>
                        Algorithm snippet:
                        <br/>
                        <div style={{background:'black', color:"green", textAlign:'left', height:'200px', width:'400px', display: 'block', marginLeft:'auto', marginRight:'auto'}}>
                            import numpy as np<br/>
                            import pandas as pd<br/>
                            import tensorflow as tf<br/>
                            import tensorflow.keras as keras <br/>
                            import cv2<br/>
                            <br/>
                            Print["Hello World"]()<br/>
                        </div>
                    </p>
                </div>
            </div>
        )
    }
}
