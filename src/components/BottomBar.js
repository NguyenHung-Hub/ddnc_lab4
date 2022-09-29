import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const BottomBar = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.wrapperIcon}>
                <Image source={require("../../assets/icons/menu.png")} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.wrapperIcon}>
                <Image source={require("../../assets/icons/home.png")} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.wrapperIcon}
                onPress={() => navigation.goBack()}
            >
                <Image source={require("../../assets/icons/back.png")} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        paddingHorizontal: 12,

        width: "100%",
        height: 48,

        backgroundColor: "#1BA9FF",
    },
    wrapperIcon: {},
    wrapperIcon: {},
});
