import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const TabStack = createStackNavigator();
const Modal = createStackNavigator();
const Tab = createBottomTabNavigator();

function Screen1({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => navigation.navigate("Screen2")} style={{ fontSize: 20 }}>
        Screen1
      </Text>
      <Text onPress={() => navigation.navigate("ModalScreen1")} style={{ fontSize: 20 }}>
        Screen1 Modal
      </Text>
    </View>
  );
}

function Screen2() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Screen2</Text>
    </View>
  );
}

function ModalScreen1() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>ModalScreen1</Text>
    </View>
  );
}

function ModalScreen2() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>ModalScreen2</Text>
    </View>
  );
}

function TabScreen1({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => navigation.navigate("ModalScreen1")}>TabScreen1</Text>
    </View>
  );
}

function TabScreen2({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => navigation.navigate("TabStackScreen1")}>TabScreen2</Text>
    </View>
  );
}

function TabScreen3({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>TabScreen3</Text>
    </View>
  );
}

function TabStackScreen1({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>TabStackScreen1</Text>
    </View>
  );
}

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        // options={{ headerBackTitle: " ", title: "second screen" }}
        option={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="TabScreen1">
      <Tab.Screen name="TabScreen1" component={StackNavigation} options={{ headerShown: false }} />
      <Tab.Screen name="TabScreen2" component={TabScreen2} options={{ headerShown: false }} />
      <Tab.Screen name="TabScreen3" component={TabScreen3} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function TabStackScreen() {
  return (
    <TabStack.Navigator initialRouteName="TabNavigation">
      <TabStack.Screen
        name="TabStackScreen1"
        component={TabStackScreen1}
        // options={{ headerShown: false }}
      />
      <TabStack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
    </TabStack.Navigator>
  );
}

// modal headerShown false로 해준다.
function ModalNavigation() {
  return (
    <Modal.Navigator initialRouteName="TabStackScreen" mode="modal">
      <Modal.Screen
        name="TabStackScreen"
        component={TabStackScreen}
        options={{ headerShown: false }}
      />
      <Modal.Screen name="ModalScreen1" component={ModalScreen1} options={{ headerShown: false }} />
      {/* <Modal.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{ headerShown: false }}
      /> */}
    </Modal.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <ModalNavigation />
    </NavigationContainer>
  );
}
// modal 내에 stack 안에 tab 안에 stack이 또 들어간다노...
// drawer는 modal이랑 같은 선상..

export default Navigation;
