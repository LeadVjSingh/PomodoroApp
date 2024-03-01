import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {useFocusEffect} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import KeepAwake from 'react-native-keep-awake';
import {
  InterstitialAd,
  TestIds,
  AdEventType,
} from 'react-native-google-mobile-ads';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {
  // responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
let initialPomodoro = 25 * 60;
let initialShortBreak = 5 * 60;
let initialLongBreak = 30 * 60;
let initialCycle = 3;

const HomeScreen = ({navigation}) => {
  const [pomodoro, setPomodoro] = useState(initialPomodoro);
  const [BreakTime, setBreakTime] = useState(initialShortBreak);
  const [longBreak, setLongBreak] = useState(initialLongBreak);
  const [cycle, setCycle] = useState(initialCycle);
  const [cycleCount, setCycleCount] = useState(1);
  const [Awake, setAwake] = useState(true);
  const [vibratee, setVibratee] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('#3cd689');
  const [autoStartBreak, setAutoStartBreak] = useState(true);
  const [num, setNum] = useState(true);
  const [interstialAds, setInterstitalAds] = useState(null);
  const [signal, setSignal] = useState(true);

  const callFuntion = () => {
    if (currentState === 1) {
      AsyncStorage.getItem('pomodoroTime')
        .then(value => {
          if (value !== null) {
            setPomodoro(parseInt(value));
            setTimer(parseInt(value));
            setNum(!!false);
          }
        })
        .catch(error => {
          console.error('Error pomodoroTime', error);
        });
      AsyncStorage.getItem('shortBreakTime')
        .then(value => {
          if (value !== null) {
            setBreakTime(parseInt(value));
            setNum(!!false);
          }
        })
        .catch(error => {
          console.error('Error shortBreakTime', error);
        });

      AsyncStorage.getItem('longBreakTime')
        .then(value => {
          if (value !== null) {
            setLongBreak(parseInt(value));
            setNum(!!false);
          }
        })
        .catch(error => {
          console.error('Error longBreakTime', error);
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
          console.error('Error backgroundColor', error);
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
    } else if (currentState === 2) {
      AsyncStorage.getItem('pomodoroTime')
        .then(value => {
          if (value !== null) {
            setPomodoro(parseInt(value));
            setNum(!!false);
          }
        })
        .catch(error => {
          console.error('Error pomodoroTime', error);
        });
      AsyncStorage.getItem('shortBreakTime')
        .then(value => {
          if (value !== null) {
            setBreakTime(parseInt(value));
            setTimer(parseInt(value));
            setNum(!!false);
          }
        })
        .catch(error => {
          console.error('Error shortBreakTime', error);
        });

      AsyncStorage.getItem('longBreakTime')
        .then(value => {
          if (value !== null) {
            setLongBreak(parseInt(value));
            setNum(!!false);
          }
        })
        .catch(error => {
          console.error('Error longBreakTime', error);
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
          console.error('Error backgroundColor', error);
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
    } else if (currentState === 3) {
      AsyncStorage.getItem('pomodoroTime')
        .then(value => {
          if (value !== null) {
            setPomodoro(parseInt(value));
            setNum(!!false);
          }
        })
        .catch(error => {
          console.error('Error pomodoroTime', error);
        });
      AsyncStorage.getItem('shortBreakTime')
        .then(value => {
          if (value !== null) {
            setBreakTime(parseInt(value));
            setNum(!!false);
          }
        })
        .catch(error => {
          console.error('Error shortBreakTime', error);
        });

      AsyncStorage.getItem('longBreakTime')
        .then(value => {
          if (value !== null) {
            setLongBreak(parseInt(value));
            setTimer(parseInt(value));
            setNum(!!false);
          }
        })
        .catch(error => {
          console.error('Error longBreakTime', error);
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
          console.error('Error backgroundColor', error);
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
    }
  };

  useFocusEffect(() => {
    if (num == !!true) {  
      callFuntion();
    }

    if (Awake === true) {
      KeepAwake.activate();
    } else if (Awake === false) {
      KeepAwake.deactivate();
    }
  });

  const [currentState, setCurrentState] = useState(1);

  const [timer, setTimer] = useState(pomodoro); // 25 minutes in seconds
  const [timerType, setTimerType] = useState('POMODORO');
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
    initInterstitial();
  }, []);

  const initInterstitial = async () => { 
    const interstitalAd = InterstitialAd.createForAdRequest(
      TestIds.INTERSTITIAL,
    );
    interstitalAd.addAdEventListener(AdEventType.LOADED, () => {
      setInterstitalAds(interstitalAd);
    });

    interstitalAd.addAdEventListener(AdEventType.CLOSED, () => {
      setInterstitalAds(null);
      initInterstitial();
    });
    interstitalAd.load();
  };

  const AdMob = async () => {
    if (!!interstialAds) {
      interstialAds.show();
    }
  };

  const vibrateFunction = () => {
    if (vibratee === true) {
      Vibration.vibrate();
    }
  };

  const autoStartBreakFunction = () => {
    if (autoStartBreak === true) {
      setTimeout(() => {}, 3000); // 3000 milliseconds = 3 seconds
      if (timerType === 'POMODORO') {
        console.log(timerType, 'check timertype');
      } else if (timerType === 'SHORT BREAK') {
        toggleTimer();
        AdMob();
      } else if (timerType === 'LONG BREAK') {
        toggleTimer();
        AdMob();
      }
    } else if (autoStartBreak === false) {
      if (timerType === 'POMODORO') {
        toggleTimer();
        AdMob();
      } else if (timerType === 'SHORT BREAK') {
        toggleTimer();
        AdMob();
      } else if (timerType === 'LONG BREAK') {
        toggleTimer();
        AdMob();
      }
    }
  };

  const playSound = () => {
    if (signal === true) {
      notificationSound();
    } else {
      alarmSound();
    }
  };

  useEffect(() => {
    let interval;

    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      setTimerType('SHORT BREAK');
      toggleState();
      autoStartBreakFunction();
      playSound();
      vibrateFunction();
      if (timerType === 'POMODORO') {
        setCycleCount(cycleCount + 1);
        if (cycleCount === cycle) {
          setTimerType('LONG BREAK');
          toggleTimer();
          AdMob();
          setCurrentState(3);
          setTimer(longBreak); // 30 minutes in seconds
          setCycleCount(1);
        } else {
          setTimerType('SHORT BREAK');
          setCurrentState(2);
          setTimer(BreakTime); // 5 minutes in seconds
        }
      } else {
        setTimerType('POMODORO');
        setCurrentState(1);
        setTimer(pomodoro); // 25 minutes in seconds
      }
    }

    return () => clearInterval(interval);
  }, [timer, isRunning, timerType, cycleCount]);

  const notificationSound = () => {
    var Sound = require('react-native-sound');

    var whoosh = new Sound('whoosh.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          whoosh.getDuration() +
          'number of channels: ' +
          whoosh.getNumberOfChannels(),
      );

      // Play the sound with an onEnd callback
      whoosh.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  };

  const alarmSound = () => {
    var Sound = require('react-native-sound');
    var sound = new Sound('sound.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          sound.getDuration() +
          'number of channels: ' +
          sound.getNumberOfChannels(),
      );

      sound.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  };

  const toggleTimer = () => {
    if (isRunning) {
      setIsRunning(false); // Stop the timer if it's running
    } else {
      setIsRunning(true); // Start the timer if it's not running
    }
  };

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const resetTimer = () => {
    setIsRunning(false);
    {
      buttonText === 'POMODORO'
        ? setTimer(pomodoro)
        : buttonText === 'SHORT BREAK'
          ? setTimer(BreakTime)
          : setTimer(longBreak);
    }

    setCycleCount(1);
  };

  const toggleState = () => {
    switch (currentState) {
      case 1:
        setTimer(BreakTime);
        setTimerType('SHORT BREAK');
        break;
      case 2:
        setTimer(longBreak);
        setTimerType('LONG BREAK');
        break;
      case 3:
        setTimer(pomodoro);
        setTimerType('POMODORO');
        break;
      default:
        break;
    }
    setCurrentState(prevState => (prevState === 3 ? 1 : prevState + 1));
  };

  switch (currentState) {
    case 1:
      buttonText = 'POMODORO';
      break;
    case 2:
      buttonText = 'SHORT BREAK';
      break;
    case 3:
      buttonText = 'LONG BREAK';
      break;
    default:
      buttonText = 'Increment';
  }
  const funtionCall = () => {
    return timerType === 'POMODORO'
      ? (timer / pomodoro) * 100
      : timerType === 'SHORT BREAK'
        ? (timer / BreakTime) * 100
        : (timer / longBreak) * 100;
  };
  return (
    <ScrollView style={{backgroundColor: backgroundColor}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          {!isRunning ? (
            <View style={styles.iconView}>
              <TouchableOpacity
                onPress={() => {
                  setNum(!!true), navigation.navigate('Setting');
                }}>
                <View>
                  <Image
                    source={require('../images/icon.png')}
                    style={styles.ImageView}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.iconView}>
              <View style={styles.ImageView}></View>
            </View>
          )}
        </View>

        <View>
          <AnimatedCircularProgress
            size={responsiveWidth(73)}
            width={responsiveWidth(3)}
            fill={funtionCall()}
            rotation={0}
            tintColor="#ffffff"
            backgroundColor="#4f6269">
            {() =>
              isRunning ? (
                <TouchableOpacity
                  style={{
                    width: responsiveWidth(70),
                    height: responsiveWidth(70),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: responsiveWidth(35),
                    backgroundColor: backgroundColor,
                  }}
                  onPress={toggleTimer}>
                  <Text style={styles.TextStyle1}>{formatTime(timer)}</Text>
                  <Text style={styles.buttonText}>PAUSE</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    width: responsiveWidth(70),
                    height: responsiveWidth(70),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: responsiveWidth(35),
                    backgroundColor: backgroundColor,
                  }}
                  onPress={toggleTimer}>
                  <Text style={styles.TextStyle}>{formatTime(timer)}</Text>
                  <Text style={styles.buttonText}>START</Text>
                </TouchableOpacity>
              )
            }
          </AnimatedCircularProgress>
        </View>

        <View>
          {!isRunning ? (
            <View style={styles.toggleStateView}>
              <TouchableOpacity onPress={toggleState}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../images/arrow.png')}
                    style={styles.ImageViewDropdown}
                    resizeMode="contain"
                  />
                  <Text style={styles.PomodoroButtonText}>
                    {buttonText}{' '}
                    {buttonText === 'POMODORO'
                      ? pomodoro / 60
                      : buttonText === 'SHORT BREAK'
                        ? BreakTime / 60
                        : longBreak / 60}{' '}
                    MIN
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.toggleStateView}>
              <Text style={styles.PomodoroButtonText}>{timerType}</Text>
            </View>
          )}
        </View>

        <View>
          {!isRunning ? (
            <Text style={styles.TimerTextStyle}></Text>
          ) : (
            <View style={styles.ViewText1}>
              <Text style={styles.TimerTextStyle}>{formatTime(timer)}</Text>
            </View>
          )}
        </View>
        <View>
          {!isRunning ? (
            <TouchableOpacity
              style={styles.ResetButtonView}
              onPress={resetTimer}>
              <Text style={styles.resetbuttonText}>Reset</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.ResetButtonView}
              onPress={toggleTimer}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconView: {
    marginLeft: responsiveWidth(87),
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(8),
  },
  buttonText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: responsiveWidth(4),
    fontWeight: '500',
  },
  PomodoroButtonText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: responsiveWidth(3.15),
  },

  resetbuttonText: {
    color: '#ffffff',
    fontSize: responsiveWidth(3.7),
  },
  ImageView: {
    width: responsiveWidth(4),
    height: responsiveWidth(6),
    marginRight: responsiveWidth(1),
    opacity: 0.8,
  },
  ImageViewDropdown: {
    width: responsiveWidth(4),
    height: responsiveWidth(6),
    marginRight: responsiveWidth(1),
    opacity: 0.8,
  },
  TextStyle1: {
    fontSize: responsiveWidth(15),
    color: '#ffffff',
  },
  TextStyle: {
    fontSize: responsiveWidth(15),
    color: '#ffffff',
  },
  TimerTextStyle: {
    color: '#ffffff',
  },
  ViewText1: {
    marginTop: responsiveWidth(2.5),
  },
  ViewText: {
    marginTop: responsiveWidth(2.5),
  },
  toggleStateView: {
    marginTop: responsiveWidth(30),
  },
  ResetButtonView: {
    marginTop: responsiveWidth(10),
  },
});

export default HomeScreen;
