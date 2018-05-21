## react-native-slideable-calendar-strip [![Build Status](https://travis-ci.org/FaiChou/react-native-slideable-calendar-strip.svg?branch=master)](https://travis-ci.org/FaiChou/react-native-slideable-calendar-strip)![license](https://img.shields.io/github/license/mashape/apistatus.svg)

### How to use

Install package:

```
npm install --save react-native-slideable-calendar-strip
# or
yarn add react-native-slideable-calendar-strip
```

Import to your app:

```
import CalendarStrip from 'react-native-slideable-calendar-strip';
```

Use the component:

```
<CalendarStrip
  selectedDate={this.state.selectedDate}
  onPressDate={(date) => {
    this.setState({ selectedDate: date });
  }}
  onPressGoToday={(today) => {
    this.setState({ selectedDate: today });
  }}
  onSwipeDown={() => {
    alert('onSwipeDown');
  }}
  markedDate={['2018-05-04', '2018-05-15', '2018-06-04', '2018-05-01']}
/>
```

### API

API name       | Desc
---------------|----------------------------------------
selectedDate   | The current selected date, Required.
onPressDate    | Press date callback, Optional, `(date) => {}`
onPressGoToday | Press gotoday button callback, Optional, `(today) => {}`
markedDate     | Marked highlighted date array, Optional, `['2018-01-01', '2018-02-01']`
onSwipeDown    | Swipe down gesture callback, Optional, `() => {}`

