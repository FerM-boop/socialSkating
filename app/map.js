import React, { useState, useEffect } from 'react';
import MapView, {Marker} from 'react-native-maps';
import { Pressable, StyleSheet, View, Text, Dimensions } from 'react-native';
import * as Location from 'expo-location';

export default function Map() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 21.307585,
    longitude: -157.850665,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const userLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }
    
    let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge:10000});
    console.log(location.coords.latitude, location.coords.longitude)
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }); 
  }


  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        region={mapRegion}
      >
      </MapView>
    </View>
  );
}
//Marker Template:
//<Marker coordinate={mapRegion} title='Marker'/> (goes inside MapView tag)


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#0a0a0a',
    height: 60,
    width: 160,
    opacity: 0.7,
    margin: 5
  },
});
