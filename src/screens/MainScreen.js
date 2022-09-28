import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "../components/Card";
import { GridProduct } from "./GridProduct";
import { ListProduct } from "./ListProduct";

export const MainScreen = () => {
    return (
        <View style={styles.wrapper}>
            {/* <ListProduct /> */}
            <GridProduct />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
    },
});
