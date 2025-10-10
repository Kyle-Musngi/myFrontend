import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../Style";


export default function Homepage({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.Text}>Homepage</Text>
            </View>
            <View style={styles.button}>
                <Button
                title="Register"
                onPress={() => navigation.navigate("Register")}
                />
            </View>
            <View style={styles.button}>
                <Button 
                title="User List"
                onPress={() => navigation.navigate("UserList")}
                />
            </View>
        </View>
    );
}