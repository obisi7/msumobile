import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Icon,
  Button,
  Left,
  Body,
  Right,
} from 'native-base';
import { Calendar } from 'react-native-calendars';

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString,
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Header style={styles.headerTitleStyle} iosBarStyle="light-content">
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="ios-arrow-back" style={styles.headerIconStyle} />
              </Button>
            </Left>
            <Body>
              <Text style={{ color: '#fff', fontSize: 15 }}>
                {' '}
                Academic
              </Text>
            </Body>

            <Right>
              <Icon
                name="md-calendar"
                style={{ color: '#fff', fontSize: 30 }}
              />
            </Right>
          </Header>
          <View style={styles.horizontalLine} />
          <ScrollView style={styles.container}>
            <Text style={styles.text}>
              Calendar with selectable date and arrows
            </Text>
            <Calendar
              onDayPress={this.onDayPress}
              style={styles.calendar}
              hideExtraDays
              markedDates={{ [this.state.selected]: { selected: true } }}
            />
            {/* <Text style={styles.text}>
              Calendar with marked dates and hidden arrows
            </Text>
            <Calendar
              style={styles.calendar}
              current="2012-05-16"
              minDate="2012-05-10"
              maxDate="2012-05-29"
              firstDay={1}
              markedDates={{
                '2012-05-23': { selected: true, marked: true },
                '2012-05-24': {
                  selected: true,
                  marked: true,
                  dotColor: 'green',
                },
                '2012-05-25': { marked: true, dotColor: 'red' },
                '2012-05-26': { marked: true },
                '2012-05-27': { disabled: true },
              }}
              // disabledByDefault={true}
              hideArrows
            />
            <Text style={styles.text}>Calendar with custom day component</Text>
            <Calendar
              style={[styles.calendar, { height: 300 }]}
              dayComponent={({ date, state }) => (
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: state === 'disabled' ? 'gray' : 'black',
                    }}
                  >
                    {date.day}
                  </Text>
                </View>
              )}
            /> */}
            <Text style={styles.text}>
              Calendar with period marking and spinner
            </Text>
            <Calendar
              style={styles.calendar}
              current="2018-01-16"
              minDate="2018-01-10"
              displayLoadingIndicator
              markingType="period"
              theme={{
                calendarBackground: '#333248',
                textSectionTitleColor: 'white',
                dayTextColor: 'red',
                todayTextColor: 'white',
                selectedDayTextColor: 'white',
                monthTextColor: 'white',
                selectedDayBackgroundColor: '#333248',
                arrowColor: 'white',
                // textDisabledColor: 'red',
                'stylesheet.calendar.header': {
                  week: {
                    marginTop: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  },
                },
              }}
              markedDates={{
                '2018-01-17': { disabled: true },
                '2018-01-08': { textColor: '#666' },
                '2018-01-09': { textColor: '#666' },
                '2018-01-14': {
                  startingDay: true,
                  color: 'blue',
                  endingDay: true,
                },
                '2018-01-21': { startingDay: true, color: 'blue' },
                '2018-01-22': { endingDay: true, color: 'gray' },
                '2018-01-24': { startingDay: true, color: 'gray' },
                '2018-01-25': { color: 'gray' },
                '2018-01-26': { endingDay: true, color: 'gray' },
              }}
              hideArrows={false}
            />
            {/* <Text style={styles.text}>Calendar with multi-dot marking</Text>
            <Calendar
              style={styles.calendar}
              current="2012-05-16"
              markingType="multi-dot"
              markedDates={{
                '2012-05-08': {
                  dots: [
                    {
                      key: 'vacation',
                      color: 'blue',
                      selectedDotColor: 'white',
                    },
                    { key: 'massage', color: 'red', selectedDotColor: 'white' },
                  ],
                  selected: true,
                },
                '2012-05-09': {
                  dots: [
                    { key: 'vacation', color: 'blue', selectedColor: 'red' },
                    { key: 'massage', color: 'red', selectedColor: 'blue' },
                  ],
                  disabled: true,
                },
              }}
              hideArrows={false}
            /> */}
            <Text style={styles.text}>Calendar with week numbers</Text>
            <Calendar
              onDayPress={this.onDayPress}
              style={styles.calendar}
              hideExtraDays
              showWeekNumbers
              markedDates={{ [this.state.selected]: { selected: true } }}
            />
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = {
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350,
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee',
  },
  headerTitleStyle: {
    flex: 4,
    flexDirection: 'row',
    alignSelf: 'center',
    // alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#f47937',
  },
  horizontalLine: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  text: {
    alignSelf: 'center',
    marginBottom: 7,
    fontSize: 20,
    color: '#1b4383',
  },
  dateContainer: {
    alignItems: 'center',
    marginRight: 20,
  },
  headerIconStyle: {
    color: '#fff',
    fontSize: 30,
  },
};
