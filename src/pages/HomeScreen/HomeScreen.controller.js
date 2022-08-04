import {
  useMemo, useState, useEffect,
} from 'react';
import * as NetInfo from '@react-native-community/netinfo';
import {
  HOME_SCREEN, SET_DATA_SCREEN, STACK_SCREEN, PALETTE,
} from '../../helper/constants';
import { BASE_URL } from '../../helper/env';

export default function HomeScreenController(navigation, route) {
  const {
    USER, REPOSITORY,
  } = HOME_SCREEN;
  const { userPlaceholder, repositoryPlaceholder } = SET_DATA_SCREEN;
  const { SUCCESS, SET_DATA } = STACK_SCREEN;
  const { basicBg, successBg, errorsBg } = PALETTE;

  const [user, setUser] = useState('');
  const [repo, setRepo] = useState('');
  const [errors, setErrors] = useState(null);
  const [errorLabel, setErrorLabel] = useState(null);
  const [bgColor, setBgColor] = useState(basicBg);
  const netInfo = NetInfo.useNetInfo();

  useEffect(() => {
    if (route.params?.inputName) {
      setErrors(null);
      setErrorLabel(null);
      const { value, inputName } = route.params;
      if (inputName === USER) {
        setUser(value);
      } else if (inputName === REPOSITORY) {
        setRepo(value);
      }
    }
    if (route.params?.success) {
      setErrors(null);
      setErrorLabel(null);
      setBgColor(basicBg);
    }
  }, [route.params]);

  const backgroundStyle = {
    // eslint-disable-next-line no-nested-ternary
    backgroundColor: bgColor,
    height: '100%',
    paddingVertical: 10,
  };

  const checkInput = () => {
    if (user === '' || repo === '' || user.indexOf(' ') >= 0 || repo.indexOf(' ') >= 0) {
      setErrors(true);
      setErrorLabel([{ label: 'Check your ', weight: 'normal' }, { label: 'username ', weight: 'bold' }, { label: 'or your ', weight: 'normal' }, { label: 'repository ', weight: 'bold' }, { label: 'name', weight: 'normal' }]);
      setBgColor(errorsBg);
    } else if (netInfo?.isConnected?.toString() === 'false') {
      setErrors(true);
      setErrorLabel([{ label: 'Check your ', weight: 'normal' }, { label: 'internet connection', weight: 'bold' }]);
      setBgColor(errorsBg);
    } else {
      setErrors(false);
      setErrorLabel(null);
      setBgColor(successBg);
    }
  };

  const sendDataToApi = async () => {
    try {
      await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          repoUrl: `github.com/${user}/${repo}`,
          sender: user,
        }),
      });
      navigation.navigate(SUCCESS);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const inputField = useMemo(
    () => [
      {
        name: user || 'user',
        onPress: () => navigation.navigate(SET_DATA, {
          name: USER,
          placeholder: userPlaceholder,
        }),
      },
      {
        name: repo || 'repo',
        onPress: () => navigation.navigate(SET_DATA, {
          name: REPOSITORY,
          placeholder: repositoryPlaceholder,
        }),
      },
    ],
    [navigation, user, repo],
  );

  return {
    inputField,
    sendDataToApi,
    checkInput,
    backgroundStyle,
    errorLabel,
    errors,
  };
}
