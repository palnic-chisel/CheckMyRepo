import { StyleSheet } from 'react-native';
import { PALETTE } from '../../helper/constants';

const { typography } = PALETTE;

export const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: typography,
    textAlign: 'center',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
});
