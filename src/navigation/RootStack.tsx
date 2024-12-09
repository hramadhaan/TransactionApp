import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllTransactionPage from '@features/transactions/screens/AllTransactionPage';
import DetailTransactionPage from '@features/transactions/screens/DetailTransactionPage';
import {RootStackParamList} from '@features/transactions/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AllTransactionPage">
      <Stack.Screen name="AllTransactionPage" component={AllTransactionPage} />
      <Stack.Screen
        name="DetailTransactionPage"
        component={DetailTransactionPage}
        options={{presentation: 'fullScreenModal'}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
