import React, {Component} from 'react';

class PhotoList extends Component {
    render() {

        const photoList = this.props.photos.map((photo, i) => {
            return (
                <li key={i}>
                    
                    Description: {photo.urls.raw}<br/>
                    By: {photo.user.username}

                </li>

            )

        })

      
        return(
            <div>
                <h1>Most Recent Images from Unsplash</h1>
                <p>
                    {photoList}
                </p>
            </div>
        )
    }

}

export default PhotoList;