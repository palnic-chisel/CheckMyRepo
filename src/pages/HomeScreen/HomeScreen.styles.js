import { StyleSheet } from 'react-native';
import { PALETTE } from '../../helper/constants';

const { typography, urlTypography } = PALETTE;

export const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: typography,
  },
  container: {
    paddingHorizontal: 24,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  body: {
    paddingVertical: 24,
  },
  click: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    margin: 0,
  },
  url: {
    fontSize: 40,
    color: typography,
  },
  urlPlaceholder: {
    fontSize: 40,
    color: urlTypography,
  },
  errorLabel: {
    fontSize: 20,
  },
  errorLabelContainer: {
    width: '70%',
    paddingVertical: 20,
  },
});
