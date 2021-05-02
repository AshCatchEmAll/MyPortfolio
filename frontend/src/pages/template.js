import React, { Component } from 'react'
import axios from 'axios'

export default class Template extends Component {
    constructor(props) {
        super(props)
        this.state = {
            picturePreview: null,
            pictureAsFile: null,
        };
    }
    // handling change when image is added to input
    uploadPicture = (e) => {
        this.setState({
            /* contains the preview, if you want to show the picture to the user
               you can access it with this.state.picturePreview */
            picturePreview : URL.createObjectURL(e.target.files[0]),
            /* this contains the file we want to send */
            pictureAsFile : e.target.files[0]
        })
    };
    // Uploading image to database
    saveTemplate = () => {
        const formData = new FormData();
        formData.append(
            "file",
            this.state.pictureAsFile
        );
        axios({
            method: 'POST',
            url: 'http://localhost:8080/api/image/upload',
            data: formData,
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                Accept: 'application/json',
            },
            withCredentials: true,
            mode: 'cors'
        })
        .then(res => {
        window.location.href = `/portfolio/${res.data}`
        })
        .catch(err => {
        console.log(err)
        })
    };

    render() {
        return (
            <div>
                <h1>Upload an image of yourself to generate your portfolio</h1>
                <button onClick={this.saveTemplate}>Save</button>
                <div>
                    <img crossOrigin='anonymous' id={'img'} src={this.state.picturePreview} alt=""/>
                </div>
                <div>
                    <input 
                    type="file" 
                    name="file" 
                    onChange={this.uploadPicture} 
                    multiple
                    accept="image/png, image/jpeg"/>
                </div>
            </div>
        )
    }
}
