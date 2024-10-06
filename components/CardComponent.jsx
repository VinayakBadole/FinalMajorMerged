import { StyleSheet, View } from 'react-native'
import * as React from 'react';
import {Image} from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';
import MERA_THELA from "~/assets/MERA_THELA.jpeg";
import { getVendor } from '~/utils/Firebase';
import { useNavigation } from '@react-navigation/native';
import { useScooter } from '../provider/ScooterProvider';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardComponent = ({name, id, ContactNo}) => {
    const { selectedScooter} = useScooter();
    // console.log("inside card ",selectedScooter.ContactNo); 
    console.log(name);
    
   
    

  const navigation = useNavigation()
  const [items, setItems] = React.useState([]);
  // React.useEffect(()=>{
  //   getVendor(id, setItems);
  // },[id])
  return (
    <View>
      <Card>
      <Card.Title title={name} subtitle="Card Subtitle" left={LeftContent} />

        <Card.Actions>
          <Button> Status </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('VegetableListVendor', { ContactNo:ContactNo , name:name })}
          >Order Now</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

export default CardComponent

const styles = StyleSheet.create({})