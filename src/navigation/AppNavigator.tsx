import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
