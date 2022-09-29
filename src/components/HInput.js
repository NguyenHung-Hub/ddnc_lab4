import { StyleSheet, TextInput, View } from "react-native";

export const HInput = ({
    style,
    borderWidth = 0,
    borderColor = "white",
    bgColor = "white",
    radius = 0,
    startIcon,
    endIcon,
    placeholder = "",
}) => {
    return (
        <View
            style={[
                styles.wrapper,
                {
                    borderWidth,
                    borderColor,
                    borderRadius: radius,
                    backgroundColor: bgColor,
                },
                style,
            ]}
        >
            {startIcon != null ? startIcon : <></>}

            <TextInput style={styles.input} placeholder={placeholder} />

            {endIcon != null ? endIcon : <></>}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        flex: 1,
        marginHorizontal: 8,
        // backgroundColor: "red",
    },
});
