import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GridProduct } from "./src/screens/GridProduct";
import { ListProduct } from "./src/screens/ListProduct";
import { MainScreen } from "./src/screens/MainScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        options={{
                            animation: "fade_from_bottom",
                            headerShown: false,
                        }}
                        name="MainScreen"
                        component={MainScreen}
                    />
                    <Stack.Screen
                        options={{
                            animation: "fade_from_bottom",
                            headerShown: false,
                        }}
                        name="Lab4a"
                        component={ListProduct}
                    />
                    <Stack.Screen
                        options={{
                            animation: "fade_from_bottom",
                            headerShown: false,
                        }}
                        name="Lab4b"
                        component={GridProduct}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",

        marginTop: StatusBar.currentHeight,

        backgroundColor: "#fff",
    },
});
