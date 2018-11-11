import React, {Component} from 'react';
import PhotoList from './PhotoList/PhotoList';


class MainContainer extends Component {
    constructor() {
        super();

        this.state ={
            photos: []
        }
    }

    getWeather = async () => {
        try {
            const photos = await fetch('https://api.unsplash.com/photos/?client_id=1bb2a1cd3ca341da01eb3146e5d5a8e6d4025636c9566359fb0bcb5e44a6e2b9')           
            const photosJson = await photos.json();
            console.log(photosJson)
            return photosJson;
        
        } catch (err) {
            return(err)
        }


    }

    componentDidMount(){
        
        this.getWeather().then((photos) => {
          console.log(photos, ' this is data');
    
          this.setState({photos: photos});
    
        }).catch((err) => {
          console.log(err);
        });

    }
    


    render() {
        return(
            <div>
                <PhotoList photos = {this.state.photos}/>
            </div>
        )
    }
}

export default MainContainer;