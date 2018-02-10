import { AsyncStorage } from 'react-native'
import { Facebook } from 'expo'
import appId from '../appId'

import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types'

export const facebookLogin = () => async dispatch => {
  return async (dispatch) => {
    let token = AsyncStorage.getItem('fb_token')
    if (token) {
      dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
    } else {
      doFacebookLogin(dispatch)
    }
  }
}

const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInPermissionsAsync(appId, {
    permissions: ['public_profile']
  })

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL })
  }

  await AsyncStorage.setItem('fb_token', token)
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
}
