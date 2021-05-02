import React, { Component } from 'react'

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
                    <h2>Portfolio - Share this link</h2>
                    <img crossOrigin='anonymous' id={'img'} src={this.state.previousFile} alt=""/>
                </div>
            </div>
        )
    }
}
