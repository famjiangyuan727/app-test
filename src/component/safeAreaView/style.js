import { StyleSheet } from 'react-native';
import { Colors } from '../../style';

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  flexGlow: {
    flexGrow: 1,
  },
  backgroundColor: {
    backgroundColor: Colors.white
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primary
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white
  },
  toucableIcon: {
    height: 32,
    width: 32,
  }
})


export default styles
