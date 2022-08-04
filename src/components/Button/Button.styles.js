import { StyleSheet } from 'react-native';
import { PALETTE } from '../../helper/constants';

const { typography } = PALETTE;

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
  },
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  label: {
    fontWeight: 'bold',
    color: typography,
  },
});
