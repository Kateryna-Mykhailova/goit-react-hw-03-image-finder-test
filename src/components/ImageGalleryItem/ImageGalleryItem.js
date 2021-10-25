import React from 'react';
import { Component } from 'react';



export default class ImageGalleryItem extends Component{
    state = {
        searchInfo: null,
        error: null,
        status:'idle'
}
    componentDidUpdate(prevProps, prevState) {
       
        if (prevProps.searchName !== this.props.searchName) {
            console.log('change name');
           
            this.setState({status: 'pending'})
             fetch(`https://pixabay.com/api/?q=${this.props.searchName}&page=&key=23204413-d213403835507960634485f04&image_type=photo&orientation=horizontal&per_page=12`)
                 .then(response => {
                     if (response.ok) {
                         return response.json()
                     }
                     return Promise.reject(
                        new Error (`There is no information for this query ${this.props.searchName}}`)
                    )
                 }
                     )
                 .then(searchInfo => this.setState({ searchInfo, status: 'resolved' }))
                 .catch(error => this.setState({error, status: 'rejected'}))
                 
//       .then(picture => this.setState({picture})).finally(() => this.setState({loading: false}))
        }
     }

    // 'idle'
// 'pending'
// 'resolved'
// 'rejected'
    
   
    render() {

        const { searchInfo, error, status } = this.state;
        // const { searchName } = this.props;
        if (status === 'idle') {
             return <div>Enter a search name</div>
        }
        
        if (status === 'pending') {
             return <div>Loading...</div>
        }

        if (status === 'rejected') {
             return  <h1>{error.message}</h1>
        }
        if (status === 'resolved') {
             return <p>{searchInfo.total}</p>
        }
        // return <div>
            
        //     {error && <h1>{error.message}</h1>}
       
        //     {loading && <div>Loading...</div>}
        //     {!searchName && <div>Enter a search name</div>}
        //     {searchInfo && <p>{searchInfo.total}</p>}
            
        // </div>
    }
}