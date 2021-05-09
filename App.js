import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  //Linking,
} from 'react-native';
import pokeSpeedtestService from './src/service/PokeSpeedtestService';
import status from './src/enum/enum';

const App = () => {
  // Linking.addEventListener('url', (evt) => {
  //   resumeApp(evt.url);
  // });
  const [result, setResult] = useState({
    text: '',
    color: '#000000',
  });
  const [buttonStatus, setButtonStatus] = useState(status.BUTTON_STATUS_OFF);

  // const resumeApp = (url) => {
  //   switch (url) {
  //     case 'ResumePokeSpeedtest://homepage':
  //       taskStartUI();
  //   }
  // };

  const pokeSpeedtest = async () => {
    setResult({
      text: '連線中...',
      color: '#000000',
    });
    await pokeSpeedtestService.Start();
    taskStartUI();
  };

  const stopPokeSpeedtest = async () => {
    setButtonStatus(status.BUTTON_STATUS_OFF);
    await pokeSpeedtestService.Stop();
    setResult({
      text: '排程已結束',
      color: '#000000',
    });
  };

  const taskStartUI = () => {
    setResult({
      text: '排程已開始，每15秒會戳一次Speedtest',
      color: '#FF5555',
    });
    setButtonStatus(status.BUTTON_STATUS_ON);
  };

  const sa = () => {};

  return (
    <SafeAreaView
      style={{
        height: '100%',
      }}>
      <View style={{alignItems: 'center', marginTop: 100}}>
        <Text style={{fontSize: 18}}>每15秒戳一下Speedtest.net</Text>
        <TouchableOpacity
          style={{
            width: '50%',
            alignItems: 'center',
            marginTop: 20,
            borderWidth: 1,
            borderRadius: 10,
            padding: 15,
          }}
          onPress={async () => {
            if (buttonStatus === status.BUTTON_STATUS_ON) {
              stopPokeSpeedtest();
            } else {
              pokeSpeedtest();
            }
          }}>
          <Text>
            {buttonStatus === status.BUTTON_STATUS_ON ? '點我結束' : '點我開始'}
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            marginTop: 20,
            fontWeight: 'bold',
            color: result.color,
          }}>
          {result.text}
        </Text>
      </View>
      <View style={{position: 'absolute', bottom: 8, alignSelf: 'center'}}>
        <Text style={{fontSize: 10}}>此App僅供於學術交流，勿用於不法用途</Text>
      </View>
    </SafeAreaView>
  );

  const veryIntensiveTask = async (taskDataArguments) => {
    const delay = 1000;
    console.log('dsdoadjiojio');
  };
};

export default App;
