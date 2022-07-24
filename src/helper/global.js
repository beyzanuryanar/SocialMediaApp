import { Dimensions } from 'react-native'
import DeviceInfo from 'react-native-device-info'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export const isPortrait = () => {
  return windowHeight >= windowWidth
}
export const isLandspace = () => {
  return windowWidth >= windowHeight
}

export const wp = (value) =>
  isPortrait() ? windowWidth * (value / 100) : windowHeight * (value / 100)
export const hp = (value) =>
  isPortrait() ? windowHeight * (value / 100) : windowWidth * (value / 100)

export const isTablet = DeviceInfo.isTablet()
