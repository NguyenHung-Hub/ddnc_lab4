import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
// import HButton from "./HButton";
import HButton from "./HButton";

export const ProductItem = ({ product }) => {
    console.log(product);
    return (
        <View style={styles.wrapper}>
            <Image style={styles.image} source={product.imagePath} />
            <View style={styles.wrapperInfo}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.shop}>
                    Shop <Text style={styles.shopName}>{product.shop}</Text>
                </Text>
            </View>
            <View style={styles.wrapperBtn}>
                <HButton
                    style={styles.btn}
                    text="Chat"
                    bgColor="#F31111"
                    textColor="white"
                    fontSize={18}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",

        alignItems: "center",

        backgroundColor: "#fff",
        borderBottomColor: "#000",
        borderWidth: 1,
    },
    image: {},
    wrapperInfo: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",

        marginLeft: 16,
    },
    name: {},
    shop: {
        color: "#7D5B5B",
    },
    shopName: {
        color: "#000",
    },
    wrapperBtn: {
        marginRight: 24,
        marginVertical: 20,
    },
    btn: {},
});
