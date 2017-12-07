import React, {Component} from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';

class LoginButton extends Component {

  constructor(props){
    super(props);
  }


  getViewCompnent = () => {
    if(this.props.iconSource){
      return(
        <View style={[this.props.buttonViewStyle, viewStyles.buttonViewStyles]}>
          <Image
            resizeMode={'contain'}
            style={[ {width: 30, height: 30},this.props.iconStyle]}
            source={this.props.iconSource}
            />
          <Text style={[this.props.buttonTextStyle,{ backgroundColor: 'transparent', marginLeft: 20} ]}>{this.props.children}</Text>
        </View>
      );
    }
    else {
      return(
        <View style={[this.props.buttonViewStyle, viewStyles.buttonViewStyles]}>
          <Text style={[this.props.buttonTextStyle,{ backgroundColor: 'transparent'} ]}>{this.props.children}</Text>
        </View>
      );
    }

  }
  render(){
    return(
      <TouchableHighlight
        underlaycolor={'transparent'}
        activeOpacity={this.props.activeOpacity}
        style={[this.props.touchableHighlihgStyle, viewStyles.touchableHighlightStyle]}
        onPress={this.props.buttonTapped}

      >


        <View style={[this.props.buttonViewStyle, viewStyles.buttonViewStyles]}>
          <Text style={[this.props.buttonTextStyle,{ backgroundColor: 'transparent'} ]}>{this.props.children}</Text>
        </View>
      </TouchableHighlight>
    );
  }

}


const viewStyles = {
  touchableHighlihgStyle: {
    justifyContent: 'centre',
    alignItems: 'center'
},

  buttonViewStyle: {
    flexDirection: 'row',
    justifyContent: 'centre',
    alignItems: 'center'
  }

};

const textStyles = {

};

export default LoginButton;
