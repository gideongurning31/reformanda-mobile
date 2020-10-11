import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DashboardScreen from './src/Dashboard';
import KegiatanScreen from './src/screens/KegiatanScreen';
import RenunganScreen from './src/screens/renungan/RenunganScreen';
import WartaScreen from './src/screens/WartaScreen';

const navigator = createStackNavigator(
  {
    Dashboard: DashboardScreen,
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
