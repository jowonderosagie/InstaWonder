import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import Dimensions from 'Dimensions';


import LoginButton from './src/components/LoginButton'
const windowSize = Dimensions.get('window');


const standardComponentWidth = (0.82 * windowSize.width)

const colors = {
  facebook: 'rgb(59, 89, 152)',
  text: 'rgba(255, 255, 255, 0.7)',
  socialMediaButtonBorderColor: 'rgba(255, 255, 255, 0.35)'
}

const sizes = {
  buttonHeight: 45,
  pageFontSize: 12,
  borderWidth: 0.8,
  borderRadius: 5
}

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {

    }
  }

  buttonTapped = () =>{
    console.log('Button successfully tapped');
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

          <LoginButton
            buttonViewStyle={viewStyles.instagramLoginButtonView}
            buttonTextStyle={textStyles.instagramButtonTextStyle}
            buttonTapped={this.buttonTapped}
            activeOpacity={0.75}
            touchableHighlihgStyle={viewStyles.instagramTouchableHighlightStyle}
          >
            Log In (Via instagram)
          </LoginButton>


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
  },
  instagramLoginButtonView: {
    backgroundColor: 'transparent',
    borderColor: colors.socialMediaButtonBorderColor,
    borderWidth: sizes.borderWidth,
    borderRadius: sizes.borderRadius,
    width: standardComponentWidth,
    height: sizes.buttonHeight
  },
  instagramTouchableHighlightStyle: {
    width: standardComponentWidth,
    height: sizes.buttonHeight,
    marginTop: 5
  }

};

const textStyles = {

  instagramButtonTextStyle: {
    color: colors.text,
    fontWeight: '500'
  }
};
