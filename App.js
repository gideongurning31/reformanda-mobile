import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DashboardScreen from './src/Dashboard';
import HomeScreen from './src/screens/HomeScreen';
import KegiatanScreen from './src/screens/KegiatanScreen';
import RenunganScreen from './src/screens/RenunganScreen';
import WartaScreen from './src/screens/WartaScreen';

const navigator = createStackNavigator(
  {
    Dashboard: DashboardScreen,
    Home: HomeScreen,
    Kegiatan: KegiatanScreen,
    Renungan: RenunganScreen,
    Warta: WartaScreen,
  },
  {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: {
      title: 'HKBP REFORMANDA',
    },
  }
);

export default createAppContainer(navigator);
