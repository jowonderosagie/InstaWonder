import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import Dimensions from 'Dimensions';


const windowSize = Dimensions.get('window');


export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {

    }
  }

  loginScreenComponent = () => {
    return (
      <ImageBackground
        style={viewStyles.container}
        resizeMode={'cover'}
        source={require('./src/images/instabackground4.jpg')}
        >

        <ScrollView style={viewStyles.scrollViewStyles}>

          <Image
            style={viewStyles.instagramLogo}
            resizeMode={'contain'}
            source={require('./src/images/instagram-text-logo.png')}
          />

        </ScrollView>


      </ImageBackground>
    );
  }



  render() {
    return (
      this.loginScreenComponent()
    );

  }
}

const viewStyles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  instagramLogo: {
    width: (0.45 * windowSize.width),
    height: (0.15 * windowSize.height),
    marginBottom: 25,
    alignSelf: 'center'
  },
  scrollViewStyle: {
    paddingTop: '38%'
  }

};
