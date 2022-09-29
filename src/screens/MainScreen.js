import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "../components/Card";
import HButton from "../components/HButton";
import { GridProduct } from "./GridProduct";
import { ListProduct } from "./ListProduct";

export const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            {/* <ListProduct /> */}
            {/* <GridProduct /> */}
            <HButton
                style={styles.btn}
                text="Lab 4a"
                bgColor="#72D3FE"
                fontSize={18}
                fontWeight="bold"
                textColor="white"
                radius={8}
                onPress={() => navigation.navigate("Lab4a")}
            />
            <HButton
                style={styles.btn}
                text="Lab 4c"
                bgColor="#72D3FE"
                fontSize={18}
                fontWeight="bold"
                textColor="white"
                radius={8}
                onPress={() => navigation.navigate("Lab4b")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        paddingHorizontal: 24,
    },
    btn: {
        marginBottom: 16,
    },
});
