import React from 'react';
import {View} from 'react-native';

export default class App extends Component<Props> {
  state = {
    value: '',
  };

  onChangeText = text => {
    this.setState({value: text});
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomTextInput
          customKeyboardType="price"
          value={this.state.value}
          onChangeText={this.onChangeText}
          style={styles.input}
        />
      </View>
    );
  }
}
