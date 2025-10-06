import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../Style";


export default function Homepage({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.Text}>Homepage</Text>
            </View>
            <View>
                <Button
                title="Register"
                onPress={() => navigation.navigate("Register")}
                />
            </View>
        </View>
    );
}