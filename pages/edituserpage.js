import {View, Text, Button, TextInput} from 'react-native';
import { useState } from 'react';

import axios from 'axios';

export default function EditUserPage({route, navigation}) {
    const {user} = route.params;

    const [firstname, setFirstName] = useState(user.first_name);
    const [lastname, setLastName] = useState(user.last_name);
    const [user_email, setEmail] = useState(user.email);
    const [user_password, setPassword] = useState(user.password);
    const [user_gender, setGender] = useState(user.gender);

    const handleUpdate = () => {
        if (!firstname || !lastname || !user_email || !user_password || !user_gender) {
            window.alert("Error", " Please fill up all required fields.");
            return;
        }

        axios
            .put(`http://127.0.0.1:8000/signapp/api/users/${user.id}/`, {
                first_name: firstname,
                last_name: lastname,
                email: user_email,
                password: user_password,
                gender: user_gender,
            })
            .then(() => {
                window.alert("Success", "User updated successfully");
                navigation.goBack();
            })
            .catch((error) => {
                console.error(error);
                window.alert("Error", "Failed to update");
            });
    }

    return(
        <View style>
            <Text>Edit User</Text>

            <TextInput
            value={firstname}
            onChangeText={setFirstName}/>

            <TextInput
            value={lastname}
            onChangeText={setLastName}/>

            <TextInput
            value={user_email}
            onChangeText={setEmail}/>

            <TextInput
            value={user_password}
            onChangeText={setPassword}/>

            <TextInput
            value={user_gender}
            onChangeText={setGender}/>

            <View>
                <Button
                title="Update Record"
                onPress={handleUpdate}/>
            </View>
        </View>
    )
} 