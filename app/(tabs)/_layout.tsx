import { Tabs } from 'expo-router';
import { Trash, UserCircle, Bell, MapPinLine } from 'phosphor-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: 'grey',
        headerShown: false,
        tabBarInactiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarStyle: {
            borderTopWidth: 0,
          },
          title: 'Bin Status',
          tabBarIcon: ({ color }) => <Trash size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          title: 'Alerts',
          tabBarStyle: {
            backgroundColor: 'rgba(74,222,128,1)',
            borderTopWidth: 0,
          },
          tabBarIcon: ({ color }) => <Bell size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <UserCircle size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="route"
        options={{
          title: 'Routes',
          tabBarIcon: ({ color }) => <MapPinLine size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
