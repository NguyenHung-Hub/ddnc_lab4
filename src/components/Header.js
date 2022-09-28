import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Header = () => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.wrapperIcon}>
                <Image source={require("../../assets/icons/back_icon.png")} />
            </TouchableOpacity>
            <View style={styles.wrapperTitle}>
                <Text style={styles.title}>Chat</Text>
            </View>
            <TouchableOpacity style={styles.wrapperIcon}>
                <Image source={require("../../assets/icons/cart_icon.png")} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,

        width: "100%",
        height: 42,

        marginTop: 60,

        backgroundColor: "#1BA9FF",
    },
    wrapperIcon: {},
    wrapperTitle: {},
    title: {
        color: "white",
        fontSize: 18,
    },
});
