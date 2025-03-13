import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {WrapperComponentStyle} from './styled';
/**
 * TODO Wrap Component
 */
export default (routeName: string) => (Wrap: React.ComponentType) => {
  const WrapperComponent: React.FC = props => {
    useEffect(() => {
      if (routeName) {
        // console.log(routeName);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [routeName]);

    return (
      <SafeAreaView style={WrapperComponentStyle.container}>
        <StatusBar
          barStyle={'dark-content'}
          translucent
          backgroundColor={'transparent'}
        />
        <Wrap {...props} />
      </SafeAreaView>
    );
  };
  return WrapperComponent;
};
