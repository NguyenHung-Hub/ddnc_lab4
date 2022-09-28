import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Rating } from "react-native-ratings";

export const Card = ({ product }) => {
    console.log(product);
    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapperImage}>
                <Image style={styles.image} source={product.imagePath} />
            </View>
            <View style={styles.wrapperInfo}>
                <Text style={styles.name}>{product.name}</Text>
                <View style={styles.wrapperRating}>
                    <Rating
                        style={styles.rating}
                        tintColor="#E4E6E9"
                        type="star"
                        ratingCount={5}
                        imageSize={18}
                    />
                    <Text>(15)</Text>
                </View>
                <View style={styles.wrapperPrice}>
                    <Text style={styles.price}>69000</Text>
                    <Text style={styles.discount}>39%</Text>
                </View>
            </View>
        </View>
    );
};

const widthScreen = Dimensions.get("window").width;
const widthCardPercent = 0.46;
const widthCard = widthScreen * widthCardPercent;
const margin = widthScreen * ((1 - widthCardPercent * 2) / 4);

const styles = StyleSheet.create({
    wrapper: {
        padding: 8,
        margin: margin,
        width: widthCard,

        backgroundColor: "#E4E6E9",
        borderRadius: 4,
    },
    wrapperImage: {
        width: "100%",
    },
    image: {
        width: "100%",
        height: 90,
        resizeMode: "contain",
    },
    imagePath: {},
    wrapperInfo: {
        flexDirection: "column",
    },
    name: {},
    wrapperRating: {
        flexDirection: "row",
    },
    rating: {
        backgroundColor: "#red",

        // backgroundColor:
    },
    wrapperPrice: { flexDirection: "row" },
    price: {},
    discount: {},
});
