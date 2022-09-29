import React from "react";
import {
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import products from "../../data/products";
import { BottomBar } from "../components/BottomBar";
import { Header } from "../components/Header";
import { ProductItem } from "../components/ProductItem";

export const ListProduct = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <Header navigation={navigation} />
            <View style={styles.body}>
                <Text style={styles.text1}>
                    Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với
                    shop!
                </Text>
                <View>
                    <FlatList
                        data={products}
                        numColumns={1}
                        renderItem={(product) => (
                            <ProductItem product={product.item} />
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
        flex: 1,
        marginTop: StatusBar.currentHeight,
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
