import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import products, { products2 } from "../../data/products";
import { BottomBar } from "../components/BottomBar";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { ProductItem } from "../components/ProductItem";

export const GridProduct = () => {
    return (
        <View style={styles.wrapper}>
            <Header />
            <View style={styles.body}>
                <Text style={styles.text1}>
                    Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với
                    shop!
                </Text>
                <View>
                    <FlatList
                        data={products2}
                        numColumns={2}
                        renderItem={(product) => (
                            <Card product={product.item} />
                        )}
                    />
                </View>
            </View>
            <BottomBar />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: "100%",
        flexDirection: "column",

        backgroundColor: "#fff",
    },
    body: {
        flex: 1,
        justifyContent: "center",
    },
    text1: {
        paddingVertical: 18,
        paddingHorizontal: 32,
    },
});
