import React from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
    StatusBar,
    SafeAreaView,
} from "react-native";
import products, { products2 } from "../../data/products";
import { BottomBar } from "../components/BottomBar";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { HeaderSearch } from "../components/HeaderSearch";
import { ProductItem } from "../components/ProductItem";

export const GridProduct = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <HeaderSearch navigation={navigation} />
            <View style={styles.body}>
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        width: "100%",
        height: "100%",
        flexDirection: "column",

        // backgroundColor: "#fff",
    },
    body: {
        flex: 2,
        justifyContent: "center",
    },
    text1: {
        paddingVertical: 18,
        paddingHorizontal: 32,
    },
});
