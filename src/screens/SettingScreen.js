import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';
import {
  BannerAd,
  TestIds,
  BannerAdSize,
} from 'react-native-google-mobile-ads';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';

const SettingScreen = () => {
  const navigation = useNavigation();
  const [backgroundColor, setBackgroundColor] = useState('#3cd689');

  let initialPomodoroTime = 25 * 60; // 25 minutes by default for Pomodoro
  let initialShortBreakTime = 5 * 60; // 5 minutes by default for short break
  let initialLongBreakTime = 30 * 60; // 15 minutes by default for long break
  let initialCycleCountValue = 3;

  const [pomodoro, setPomodoro] = useState(initialPomodoroTime);
  const [BreakTime, setBreakTime] = useState(initialShortBreakTime);
  const [longBreak, setLongBreak] = useState(initialLongBreakTime);
  const [cycle, setCycle] = useState(initialCycleCountValue);
  const [Awake, setAwake] = useState(true);
  const [vibratee, setVibratee] = useState(true);
  const [autoStartBreak, setAutoStartBreak] = useState(false);
  const [signal, setSignal] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('pomodoroTime')
      .then(value => {
        if (value !== null) {
          setPomodoro(parseInt(value));
        }
      })
      .catch(error => {
        console.error('Error pomodoroTime', error);
      });

    AsyncStorage.getItem('shortBreakTime')
      .then(value => {
        if (value !== null) {
          setBreakTime(parseInt(value));
        }
      })
      .catch(error => {
        console.error('Error shortBreakTime: ', error);
      });

    AsyncStorage.getItem('longBreakTime')
      .then(value => {
        if (value !== null) {
          setLongBreak(parseInt(value));
        }
      })
      .catch(error => {
        console.error('Error longBreakTime: ', error);
      });

    AsyncStorage.getItem('backgroundColor')
      .then(value => {
        if (value !== null) {
          setBackgroundColor(value);
        }
      })
      .catch(error => {
        console.error('Error backgroundColor', error);
      });

    AsyncStorage.getItem('Cycle')
      .then(value => {
        if (value !== null) {
          setCycle(parseInt(value));
        }
      })
      .catch(error => {
        console.error('Error Cycle', error);
      });

    AsyncStorage.getItem('Awake')
      .then(value => {
        if (value !== null) {
          setAwake(JSON.parse(value));
        }
      })
      .catch(error => {
        console.error('Error Awake', error);
      });

    AsyncStorage.getItem('Vibratee')
      .then(value => {
        if (value !== null) {
          setVibratee(JSON.parse(value));
        }
      })
      .catch(error => {
        console.error('Error Vibratee', error);
      });

    AsyncStorage.getItem('AutoStartBreak')
      .then(value => {
        if (value !== null) {
          setAutoStartBreak(JSON.parse(value));
        }
      })
      .catch(error => {
        console.error('Error AutoStartBreak', error);
      });

    AsyncStorage.getItem('Signal')
      .then(value => {
        if (value !== null) {
          setSignal(JSON.parse(value));
        }
      })
      .catch(error => {
        console.error('Error Signal', error);
      });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('pomodoroTime', pomodoro.toString()).catch(error => {
      console.error('Error pomodoroTime: ', error);
    });

    AsyncStorage.setItem('shortBreakTime', BreakTime.toString()).catch(
      error => {
        console.error('Error shortBreakTime: ', error);
      },
    );

    AsyncStorage.setItem('longBreakTime', longBreak.toString()).catch(error => {
      console.error('Error longBreakTime: ', error);
    });

    AsyncStorage.setItem('backgroundColor', backgroundColor.toString()).catch(
      error => {
        console.error('Error backgroundColor: ', error);
      },
    );
    AsyncStorage.setItem('Cycle', cycle.toString()).catch(error => {
      console.error('Error Cycle: ', error);
    });
    AsyncStorage.setItem('Awake', JSON.stringify(Awake)).catch(error => {
      console.error('Error Awake: ', error);
    });
    AsyncStorage.setItem('Vibratee', JSON.stringify(vibratee)).catch(error => {
      console.error('Error Vibratee: ', error);
    });
    AsyncStorage.setItem(
      'AutoStartBreak',
      JSON.stringify(autoStartBreak),
    ).catch(error => {
      console.error('Error AutoStartBreak: ', error);
    });
    AsyncStorage.setItem('Signal', JSON.stringify(signal)).catch(error => {
      console.error('Error Signal: ', error);
    });
  }, [
    pomodoro,
    BreakTime,
    longBreak,
    backgroundColor,
    cycle,
    Awake,
    vibratee,
    autoStartBreak,
    signal,
  ]);

  const incrementPomodoro = () => {
    setPomodoro((pomodoro / 60 + 1) * 60);
  };

  const decrementPomodoro = () => {
    if (pomodoro > 60) {
      setPomodoro((pomodoro / 60 - 1) * 60);
    }
  };

  const incrementBreak = () => {
    setBreakTime((BreakTime / 60 + 1) * 60);
  };

  const decrementBreak = () => {
    if (BreakTime > 60) {
      setBreakTime((BreakTime / 60 - 1) * 60);
    }
  };
  const incrementLongBreak = () => {
    setLongBreak((longBreak / 60 + 1) * 60);
  };

  const decrementLongBreak = () => {
    if (longBreak > 60) {
      setLongBreak((longBreak / 60 - 1) * 60);
    }
  };

  const changeColor = color => {
    setBackgroundColor(color);
    navigation.setParams({backgroundColor: color}); // Pass the selected color as a navigation parameter
  };

  const incrementCycle = () => {
    setCycle(cycle + 1);
  };
  const decrementCycle = () => {
    if (cycle > 1) {
      setCycle(cycle - 1);
    }
  };

  const AwakeOn = () => {
    setAwake(true);
  };
  const AwakeOff = () => {
    setAwake(false);
  };

  const VibrateOn = () => {
    setVibratee(true);
  };
  const VibrateOff = () => {
    setVibratee(false);
  };

  const AutoStartBreakFunctionOn = () => {
    setAutoStartBreak(true);
  };
  const AutoStartBreakFunctionOff = () => {
    setAutoStartBreak(false);
  };

  const NotifiactionSound = () => {
    setSignal(true);
  };

  const AlarmSound = () => {
    setSignal(false);
  };

  const openGmail = () => {
    const email = 'hr@startupindiabuddy.com';
    const subject = 'Your Feedback Matters for Pomodoro!';
    const body = `Dear Sir/Mam,

    I'm Vijay Singh, the creator of Pomodoro. We're eager to hear your thoughts and suggestions to enhance our app. Could you share your experiences, what you like, what could be improved, and any features you wish we had? Your feedback is invaluable and will directly shape our updates.
    
    Thank you for your support and insights!
    
    Best,
    Vijay Singh`;
    Linking.openURL(`mailto:${email}?subject=${subject}&body=${body}`);
  };

  const openPlayStoreURL = () => {
    const url =
      'https://play.google.com/store/search?q=Pomodoro&c=apps&hl=en&gl=US';

    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.error('Cannot open this URL');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <ScrollView style={{backgroundColor: backgroundColor}}>
      <View style={styles.Main}>
        <View>
          <TouchableOpacity
            style={styles.BackButtonStyle}
            onPress={() => navigation.navigate('Home')}>
            <View>
              <Text style={styles.BackButtonText}>{'<'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.DurationText}>DURATIONS</Text>
        </View>
        <View style={styles.TimerMainView}>
          <TouchableOpacity style={styles.TimerButtonView} onPress={() => {}}>
            <View style={styles.TimerView}>
              <Text style={styles.TopText}>{pomodoro / 60}</Text>
              <Text style={styles.BottomText}>POMODORO</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TimerButtonView} onPress={() => {}}>
            <View style={styles.TimerView}>
              <Text style={styles.TopText}>{BreakTime / 60}</Text>
              <Text style={styles.BottomText}>BREAK</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TimerButtonView} onPress={() => {}}>
            <View style={styles.TimerView}>
              <Text style={styles.TopText}>{longBreak / 60}</Text>
              <Text style={styles.BottomText}>LONG BREAK</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.PlusMinusMainView}>
          <TouchableOpacity
            style={styles.PlusMinusTouchableView}
            onPress={incrementPomodoro}>
            <View style={styles.PlusMinusView}>
              <Text style={styles.PlusMinusText}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.PlusMinusTouchableView}
            onPress={decrementPomodoro}>
            <View style={styles.PlusMinusView}>
              <Text style={styles.PlusMinusText}>-</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.PlusMinusTouchableView}
            onPress={incrementBreak}>
            <View style={styles.PlusMinusView}>
              <Text style={styles.PlusMinusText}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.PlusMinusTouchableView}
            onPress={decrementBreak}>
            <View style={styles.PlusMinusView}>
              <Text style={styles.PlusMinusText}>-</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.PlusMinusTouchableView}
            onPress={incrementLongBreak}>
            <View style={styles.PlusMinusView}>
              <Text style={styles.PlusMinusText}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.PlusMinusTouchableView}
            onPress={decrementLongBreak}>
            <View style={styles.PlusMinusView}>
              <Text style={styles.PlusMinusText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.ColorThemeStyle}>COLOR THEMES</Text>
        </View>

        <View style={styles.ColorMainView}>
          <View style={styles.ColorColomnView}>
            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#3cd689'}]}
              onPress={() => changeColor('#3cd689')}>
              {backgroundColor === '#3cd689' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#0ef280'}]}
              onPress={() => changeColor('#0ef280')}>
              {backgroundColor === '#0ef280' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#b6afb0'}]}
              onPress={() => changeColor('#b6bfb0')}>
              {backgroundColor === '#b6bfb0' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#68d3d9'}]}
              onPress={() => changeColor('#68d3d9')}>
              {backgroundColor === '#68d3d9' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#006357'}]}
              onPress={() => changeColor('#006357')}>
              {backgroundColor === '#006357' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.ColorColomnView}>
            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#0fd000'}]}
              onPress={() => changeColor('#0fd000')}>
              {backgroundColor === '#0fd000' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#aaa080'}]}
              onPress={() => changeColor('#aaa080')}>
              {backgroundColor === '#aaa080' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#bbbfb0'}]}
              onPress={() => changeColor('#bbbfb0')}>
              {backgroundColor === '#bbbfb0' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#ccc3d9'}]}
              onPress={() => changeColor('#ccc3d9')}>
              {backgroundColor === '#ccc3d9' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#ddd357'}]}
              onPress={() => changeColor('#ddd357')}>
              {backgroundColor === '#ddd357' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.ColorColomnView}>
            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#345daf'}]}
              onPress={() => changeColor('#345daf')}>
              {backgroundColor === '#345daf' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#0aa080'}]}
              onPress={() => changeColor('#0aa280')}>
              {backgroundColor === '#0aa280' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#099fb0'}]}
              onPress={() => changeColor('#099fb0')}>
              {backgroundColor === '#099fb0' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#0cc3d9'}]}
              onPress={() => changeColor('#0cc3d9')}>
              {backgroundColor === '#0cc3d9' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#1aa357'}]}
              onPress={() => changeColor('#1aa357')}>
              {backgroundColor === '#1aa357' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.ColorColomnView}>
            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#0dd000'}]}
              onPress={() => changeColor('#0dd813')}>
              {backgroundColor === '#0dd813' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#0fff80'}]}
              onPress={() => changeColor('#0fff80')}>
              {backgroundColor === '#0fff80' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#3fffb0'}]}
              onPress={() => changeColor('#3fffb0')}>
              {backgroundColor === '#3fffb0' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#8ff3d9'}]}
              onPress={() => changeColor('#8ff3d9')}>
              {backgroundColor === '#8ff3d9' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.ColorButtonStyle, {backgroundColor: '#9bb357'}]}
              onPress={() => changeColor('#9bb357')}>
              {backgroundColor === '#9bb357' && (
                <Text style={styles.ColorText}>✓</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.SoundThemsStyle}>SOUND THEMS</Text>
        </View>
        <View style={styles.SoundThemsMainView}>
          <TouchableOpacity onPress={NotifiactionSound}>
            <View style={styles.NotifiactionSoundView}>
              {signal === true ? (
                <Text style={styles.NotificationTrue}>✓</Text>
              ) : (
                <Text style={styles.NotificationFalse}>✗</Text>
              )}
              <Text style={styles.NotificationBottom}>NOTIFICATION SOUND</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={AlarmSound}>
            <View style={styles.AlarmSoundView}>
              {signal === false ? (
                <Text style={styles.AlarmTure}>✓</Text>
              ) : (
                <Text style={styles.AlarmFalse}>✗</Text>
              )}
              <Text style={styles.AlarmBottom}>ALARM SOUND</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.OtherPreferanceText}>OTHER PREFERENCES</Text>
        </View>
        <View style={styles.PomodoroUnitLongBreakView}>
          <TouchableOpacity
            style={styles.PomodoroUnitlLBButton}
            onPress={() => {}}>
            <View style={styles.PomodoroUntilLBView}>
              <Text style={styles.TopTextTwo}>{cycle}</Text>
              <Text style={styles.BottomTextTwo}>
                POMODOROS UNTIL LONG BREAK
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.PlusMinusMainView}>
          <TouchableOpacity
            style={styles.PlusMinusTouchableView}
            onPress={incrementCycle}>
            <View style={styles.PlusMinusView}>
              <Text style={styles.PlusMinusText}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.PlusMinusTouchableView}
            onPress={decrementCycle}>
            <View style={styles.PlusMinusView}>
              <Text style={styles.PlusMinusText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.SoundThemsMainView}>
          <TouchableOpacity onPress={VibrateOn}>
            <View style={styles.NotifiactionSoundView}>
              {vibratee === true ? (
                <Text style={styles.NotificationTrue}>✓</Text>
              ) : (
                <Text style={styles.NotificationFalse}>✗</Text>
              )}
              <Text style={styles.NotificationBottom}>VIBRATE ON</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={VibrateOff}>
            <View style={styles.AlarmSoundView}>
              {vibratee === false ? (
                <Text style={styles.AlarmTure}>✓</Text>
              ) : (
                <Text style={styles.AlarmFalse}>✗</Text>
              )}
              <Text style={styles.AlarmBottom}>VIBRATE OFF</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.SoundThemsMainView}>
          <TouchableOpacity onPress={AutoStartBreakFunctionOn}>
            <View style={styles.NotifiactionSoundView}>
              {autoStartBreak === true ? (
                <Text style={styles.NotificationTrue}>✓</Text>
              ) : (
                <Text style={styles.NotificationFalse}>✗</Text>
              )}
              <Text style={styles.NotificationBottom}>AUTOSTART BREAKS ON</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={AutoStartBreakFunctionOff}>
            <View style={styles.AlarmSoundView}>
              {autoStartBreak === false ? (
                <Text style={styles.AlarmTure}>✓</Text>
              ) : (
                <Text style={styles.AlarmFalse}>✗</Text>
              )}
              <Text style={styles.AlarmBottom}>AUTOSTART BREAKS OFF</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.SoundThemsMainView}>
          <TouchableOpacity onPress={AwakeOn}>
            <View style={styles.NotifiactionSoundView}>
              {Awake === true ? (
                <Text style={styles.NotificationTrue}>✓</Text>
              ) : (
                <Text style={styles.NotificationFalse}>✗</Text>
              )}
              <Text style={styles.NotificationBottom}>KEEP PHONE AWAKE ON</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={AwakeOff}>
            <View style={styles.AlarmSoundView}>
              {Awake === false ? (
                <Text style={styles.AlarmTure}>✓</Text>
              ) : (
                <Text style={styles.AlarmFalse}>✗</Text>
              )}
              <Text style={styles.AlarmBottom}>KEEP PHONE AWAKE OFF</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.TimerContainerTwo}>
          <TouchableOpacity
            style={styles.ResponseButton}
            onPress={() => navigation.navigate('Screen1')}>
            <View style={styles.ResponseView}>
              <Text style={styles.ResponseTopText}>{'?'}</Text>
              <Text style={styles.ResponseBottomText}>HOW TO USE?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ResponseButton} onPress={openGmail}>
            <View style={styles.ResponseView}>
              <Text style={styles.ResponseTopTextOne}>{'@'}</Text>
              <Text style={styles.ResponseBottomTextOne}>WRITE US</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ResponseButton}
            onPress={openPlayStoreURL}>
            <View style={styles.ResponseView}>
              <Text style={styles.ResponseTopTextTwo}>{'*'}</Text>
              <Text style={styles.ResponseBottomTextTwo}>RATE US</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View >
          <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  bannerAd: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'lightgray', // Example background color
    height: 60, // Adjust the height as needed
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 0,
    marginTop: 540,
    zIndex: 1,
  },
  BackButtonText: {
    fontSize: responsiveScreenWidth(6),
    color: '#ffffff',
  },
  BackButtonStyle: {
    marginLeft: responsiveScreenWidth(5),
    marginTop: responsiveScreenWidth(3),
    marginRight: responsiveScreenWidth(90),
  },
  DurationText: {
    color: '#ffffff',
    fontSize: responsiveScreenWidth(3.15),
    textAlign: 'center',
    fontWeight: '500',
    marginTop: responsiveScreenWidth(1),
  },
  TimerMainView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: responsiveScreenWidth(5),
  },
  TimerButtonView: {
    width: responsiveScreenWidth(28.75),
    height: responsiveScreenWidth(29),
    textAlign: 'center',
    textAlignVertical: 'bottom',
    backgroundColor: 30,
    borderRadius: responsiveScreenWidth(1.2),
  },
  TimerView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TopText: {
    color: '#ffffff',
    fontSize: responsiveScreenWidth(9.4),
    paddingTop: responsiveScreenWidth(4.9),
    fontWeight: '300',
  },
  BottomText: {
    fontSize: responsiveScreenWidth(3.4),
    fontWeight: '400',
    textAlign: 'center',
    paddingBottom: responsiveScreenWidth(3),
    color: '#ffffff',
  },
  PlusMinusMainView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: responsiveScreenWidth(3),
  },
  PlusMinusTouchableView: {
    width: responsiveScreenWidth(11),
    height: responsiveScreenWidth(11),
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  PlusMinusView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 30,
    borderRadius: responsiveScreenWidth(1.2),
  },
  PlusMinusText: {
    fontSize: responsiveScreenWidth(5.5),
    color: '#ffffff',
    paddingTop: responsiveScreenWidth(1.2),
  },
  ColorThemeStyle: {
    color: '#ffffff',
    fontSize: responsiveScreenWidth(3.15),
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: responsiveScreenWidth(7),
    fontWeight: '500',
  },
  ColorMainView: {
    width: responsiveScreenWidth(92.1),
    height: responsiveScreenWidth(73.1),
    backgroundColor: 30,
    marginTop: responsiveScreenWidth(4),
    borderRadius: responsiveScreenWidth(1.2),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  ColorButtonStyle: {
    borderRadius: responsiveScreenWidth(1.2),
    width: responsiveScreenWidth(15.3),
    height: responsiveScreenWidth(14.8),
    marginLeft: responsiveScreenWidth(1.2),
    marginRight: responsiveScreenWidth(1.2),
  },
  ColorColomnView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
    marginLeft: responsiveScreenWidth(1.8),
    marginRight: responsiveScreenWidth(1.8),
    marginTop: responsiveScreenWidth(1.2),
    marginBottom: responsiveScreenWidth(1.2),
    paddingLeft: responsiveScreenWidth(0.3),
  },
  ColorText: {
    color: 'white',
    fontSize: responsiveScreenWidth(6.1),
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: responsiveScreenWidth(2.5),
  },
  SoundThemsStyle: {
    color: '#ffffff',
    fontSize: responsiveScreenWidth(3.15),
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: responsiveScreenWidth(7),
    fontWeight: '500',
  },
  SoundThemsMainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveScreenWidth(5.5),
  },
  NotifiactionSoundView: {
    width: responsiveScreenWidth(44.3),
    height: responsiveScreenWidth(28),
    backgroundColor: 30,
    marginRight: responsiveScreenWidth(3),
    borderRadius: responsiveScreenWidth(1.2),
  },
  AlarmSoundView: {
    width: responsiveScreenWidth(44.3),
    height: responsiveScreenWidth(28),
    backgroundColor: 30,
    borderRadius: responsiveScreenWidth(1.2),
  },
  NotificationTrue: {
    color: 'white',
    fontSize: responsiveScreenWidth(7.3),
    fontWeight: 'bold',
    alignSelf: 'center',
    position: 'absolute',
    paddingTop: responsiveScreenWidth(6),
  },
  NotificationFalse: {
    color: 'white',
    fontSize: responsiveScreenWidth(7.3),
    fontWeight: '300',
    alignSelf: 'center',
    position: 'absolute',
    paddingTop: responsiveScreenWidth(6),
  },
  NotificationBottom: {
    fontSize: responsiveScreenWidth(3.15),
    paddingTop: responsiveScreenWidth(20),
    position: 'absolute',
    alignSelf: 'center',
    fontWeight: '500',
    color: '#ffffff',
  },
  AlarmTure: {
    color: 'white',
    fontSize: responsiveScreenWidth(7.3),
    fontWeight: 'bold',
    alignSelf: 'center',
    position: 'absolute',
    paddingTop: responsiveScreenWidth(6),
  },
  AlarmFalse: {
    color: 'white',
    fontSize: responsiveScreenWidth(7.3),
    fontWeight: '300',
    alignSelf: 'center',
    position: 'absolute',
    paddingTop: responsiveScreenWidth(6),
  },
  AlarmBottom: {
    fontSize: responsiveScreenWidth(3.15),
    paddingTop: responsiveScreenWidth(20),
    position: 'absolute',
    alignSelf: 'center',
    fontWeight: '500',
    color: '#ffffff',
  },
  OtherPreferanceText: {
    color: '#ffffff',
    fontSize: responsiveScreenWidth(3.15),
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: responsiveScreenWidth(7),
    fontWeight: '500',
  },
  PomodoroUnitLongBreakView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: responsiveScreenWidth(4),
  },
  PomodoroUnitlLBButton: {
    width: responsiveScreenWidth(91.3),
    height: responsiveScreenWidth(29.2),
    textAlign: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 30,
    borderRadius: responsiveScreenWidth(1.2),
  },
  PomodoroUntilLBView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopTextTwo: {
    color: '#ffffff',
    fontSize: responsiveScreenWidth(9),
    fontWeight: '300',
    paddingBottom: responsiveScreenWidth(3.15),
  },
  BottomTextTwo: {
    fontSize: responsiveScreenWidth(3.15),
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    color: '#ffffff',
  },
  TimerContainerTwo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: responsiveScreenWidth(5),
  },
  ResponseButton: {
    width: responsiveScreenWidth(27.3),
    height: responsiveScreenWidth(25.6),
    backgroundColor: 30,
    borderRadius: responsiveScreenWidth(1.21),
    marginBottom: responsiveScreenWidth(4.87),
  },
  ResponseView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ResponseTopText: {
    color: '#ffffff',
    fontSize: responsiveScreenWidth(9.25),
    paddingTop: responsiveScreenWidth(1.95),
    fontWeight: '300',
  },
  ResponseBottomText: {
    fontSize: responsiveScreenWidth(3.65),
    fontWeight: '400',
    textAlign: 'center',
    paddingBottom: responsiveScreenWidth(3),
    color: '#ffffff',
  },
  ResponseTopTextOne: {
    color: '#ffffff',
    fontSize: responsiveScreenWidth(8.53),
    paddingTop: responsiveScreenWidth(1.21),
    fontWeight: '300',
  },
  ResponseBottomTextOne: {
    fontSize: responsiveScreenWidth(3.65),
    fontWeight: '400',
    textAlign: 'center',
    paddingBottom: responsiveScreenWidth(2.9),
    color: '#ffffff',
  },
  ResponseTopTextTwo: {
    color: '#ffffff',
    fontSize: responsiveScreenWidth(11),
    paddingTop: responsiveScreenWidth(1.21),
    fontWeight: '300',
  },
  ResponseBottomTextTwo: {
    fontSize: responsiveScreenWidth(3.65),
    fontWeight: '400',
    textAlign: 'center',
    paddingBottom: responsiveScreenWidth(3.3),
    color: '#ffffff',
  },
});
export default SettingScreen;
