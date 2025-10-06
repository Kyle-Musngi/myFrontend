import {View, Text, Button, Alert} from "react-native";
import {styles} from "../Style";
import axios from "axios";

export default function ReviewPage({route, navigation}) {
    const {formData} = route.params;

    const handleSubmit = async() => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/signapp/api/register/", 
                formData
            );
            Alert.alert("Success", "User registered successfully");
            navigation.getBack();
        } catch (error) {
            Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong"));
        }
        
    };
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.Text}>Review Information</Text>
            </View>
            

            <Text style={styles.input}>First Name: {formData.first_name}</Text>
            <Text style={styles.input}>Last Name: {formData.last_name}</Text>
            <Text style={styles.input}>Email: {formData.email}</Text>
            <Text style={styles.input}>Password: {formData.password}</Text>
            <Text style={styles.input}>Gender: {formData.gender}</Text>
            
            <View style={styles.button}>
                <Button title="Go Back" onPress={() => navigation.goBack()} />
            </View>

            <View style={styles.button}>
                <Button title="Submit" onPress={handleSubmit} />
            </View>
            
        </View>
    );
}