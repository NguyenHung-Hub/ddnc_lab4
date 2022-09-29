import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HInput } from "./HInput";
import search from "../../assets/icons/search.png";

export const HeaderSearch = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                style={styles.wrapperIcon}
                onPress={() => navigation.goBack()}
            >
                <Image source={require("../../assets/icons/back_icon.png")} />
            </TouchableOpacity>

            <View style={styles.wrapperSearch}>
                <HInput
                    startIcon={<Image source={search} />}
                    placeholder="Tìm kiếm sản phẩm"
                    style={styles.search}
                />
            </View>

            <TouchableOpacity style={styles.wrapperIcon}>
                <Image source={require("../../assets/icons/cart_icon.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrapperIcon}>
                <Image source={require("../../assets/icons/dot_3.png")} />
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

        backgroundColor: "#1BA9FF",
    },
    wrapperIcon: {},
    wrapperSearch: {
        width: 200,
    },
    search: {
        paddingVertical: 3,
        paddingHorizontal: 9,
    },
});
