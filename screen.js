import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class Screen extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <View data-layer="f4085350-dd27-4c88-ace5-0e69aa645739" style={styles.screen}>
        <View data-layer="0a51ffb7-08e2-4e02-805d-d5452b0dee07" style={styles.screen_component11}>
            <View data-layer="48190468-72ef-4b1f-8f6a-f57ed8b9e50d" style={styles.screen_component11_rectangle1}></View>
            <Text data-layer="eb673836-dfe7-4917-9351-b97e70793949" style={styles.screen_component11_clickMe} onPress={() => this.props.setCount(this.props.count + 1)}>ClickME</Text>
        </View>
        <View data-layer="e48c497e-3f8e-4736-892d-c5b6c515912a" style={styles.screen_component21}>
            <View data-layer="ca95bd78-5dda-41d4-92f7-f6d0cdc4a8ad" style={styles.screen_component21_rectangle2}></View>
        </View>
    <Text data-layer="f500a3d8-4792-4b22-b275-fa60872e620f" style={styles.screen_x1}>{this.props.count}</Text>
    </View>
    );
  }
}

Screen.propTypes = {

}

Screen.defaultProps = {

}


const styles = StyleSheet.create({
  "screen": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 414,
    "height": 736,
    "left": 0,
    "top": 0
  },
  "screen_component11": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 299,
    "height": 94,
    "left": 58,
    "top": 533
  },
  "screen_component11_rectangle1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(22, 18, 18, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 40,
    "borderTopRightRadius": 40,
    "borderBottomLeftRadius": 40,
    "borderBottomRightRadius": 40,
    "width": 299,
    "height": 80,
    "left": 0,
    "top": 7
  },
  "screen_component11_clickMe": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(239, 223, 223, 1)",
    "fontSize": 70,
    "fontWeight": "400",
    "fontStyle": "normal",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 262,
    "height": 94,
    "left": 24,
    "top": 0
  },
  "screen_component21": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 288,
    "height": 260,
    "left": 61,
    "top": 155
  },
  "screen_component21_rectangle2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 3,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 3,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 3,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 3,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 72,
    "borderTopRightRadius": 72,
    "borderBottomLeftRadius": 72,
    "borderBottomRightRadius": 72,
    "width": 288,
    "height": 260,
    "left": 0,
    "top": 0
  },
  "screen_x1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 15, 15, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "normal",
    "textAlign": "center",
    "flex" : 1,
    "justifyContent" : "center",
    // "top" : 100,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 38,
    "height": 94,
    "left": 181,
    "top": 270
  }
});