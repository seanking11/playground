import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './store'
import {
  AuthScreen,
  DeckScreen,
  MapScreen,
  ReviewScreen,
  SettingsScreen,
  WelcomeScreen
} from './screens'

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        })
      }
    })

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
