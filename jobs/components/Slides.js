import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#0288D1'
  }
}

class Slides extends Component {
  // eslint-disable-next-line consistent-return
  renderLastSlide(i) {
    if (i === this.props.data.length - 1) {
      return (
        <View style={{ marginTop: 15 }}>
          <Button
            title='Onwards!'
            raised
            buttonStyle={styles.buttonStyle}
            onPress={this.props.onComplete}
          />
        </View>
      )
    }
  }

  renderSlides() {
    return this.props.data.map((slide, i) => (
      <View
        key={slide.text}
        style={[styles.slideStyle, { backgroundColor: slide.color }]}
      >
        <Text style={styles.textStyle}>{slide.text}</Text>
        {this.renderLastSlide(i)}
      </View>
    ))
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    )
  }
}

export default Slides
