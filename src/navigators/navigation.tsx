/**
 * Application navigation stacks to be defined here.
 */
import { Navigation } from 'react-native-navigation';

import { SCREENS } from '../constants/screen';
import { TYPOGRAPHY } from '../view/styles/typography';

export const STATUS_BAR_OPTIONS = {
  hideWithTopBar: true,
  backgroundColor: TYPOGRAPHY.COLOR.StatusBar,
};

export const showSplash = () => {
  Navigation.setRoot({
    root: {
      component: { name: SCREENS.Splash},
    },
  });
};

export const tabbedNavigation = () =>
  Navigation.setRoot({
    root: {
      sideMenu: {
        center: {
          bottomTabs: {
            id: 'BottomTabsId',
            children: [
              {
                stack: {
                  children: [  
                    {
                      component: {
                        name: SCREENS.Home,
                        passProps: {
                          text: 'This is Home',
                        },
                      },
                    },              
                  ],
                  options: {
                    topBar: {
                      visible: false,
                      borderColor: "#075669",
                      elevation: 0,
                      noBorder: true,
                      scrollEdgeAppearance: {
                        active: false,
                        borderColor: "#075669",
                        noBorder: true
                      }
                    },
                    bottomTab: {
                      fontSize: 14,
                      text: 'Home',
                      textColor: TYPOGRAPHY.COLOR.Primary,
                      selectedTextColor: TYPOGRAPHY.COLOR.Warning,
                      selectedIconColor: TYPOGRAPHY.COLOR.Warning,
                      icon: require('../assets/images/tabbar/home.png'),
                      selectedIcon: require('../assets/images/tabbar/home.png'),
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: SCREENS.Settings,
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: true,
                    },
                    bottomTab: {
                      text: 'Settings',
                      fontSize: 14,
                      textColor: TYPOGRAPHY.COLOR.Primary,
                      selectedTextColor: TYPOGRAPHY.COLOR.Warning,
                      selectedIconColor: TYPOGRAPHY.COLOR.Warning,
                      icon: require('../assets/images/tabbar/settings.png'),
                      selectedIcon: require('../assets/images/tabbar/settings.png'),
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
  });

export default tabbedNavigation;
