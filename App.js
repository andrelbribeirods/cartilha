import * as React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          margin: 24,
          fontSize: 18,
          tWeight: 'bold',
          textAlign: 'center',
        }}>
        Home
      </Text>

      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        Voltar
      </Pressable>
    </View>
  );
}


const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
container:{
  flex: 1, alignItems: 'center', justifyContent: 'center'
}
})

export default App;
