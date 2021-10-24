import React from 'react';
import { Component } from 'react';

export default class ImageGalleryItem extends Component{

    render() {
        return <div>
            <h1>Info</h1>
            <p>{ this.props.searchName}</p>
        </div>
    }
}