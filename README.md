## react-native-slideable-calendar-strip [![Build Status](https://travis-ci.org/FaiChou/react-native-slideable-calendar-strip.svg?branch=master)](https://travis-ci.org/FaiChou/react-native-slideable-calendar-strip) [![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/react-native-slideable-calendar-strip) [![juejin](https://badge.juejin.im/entry/5b04334a6fb9a07aaa119aac/likes.svg?style=flat-square)](https://juejin.im/post/5b041fe66fb9a07aa43c8c8c) ![license](https://img.shields.io/github/license/mashape/apistatus.svg)


<img src="https://raw.githubusercontent.com/FaiChou/react-native-slideable-calendar-strip/master/Example/en.png" width="500"/>

<img src="https://raw.githubusercontent.com/FaiChou/react-native-slideable-calendar-strip/master/Example/zh.png" width="500"/>

[Live Calendar Demo.mp4](https://raw.githubusercontent.com/FaiChou/faichou.github.io/master/img/qiniu/calendar-strip.MP4)

### Feature

1. Support pull down gesture
2. Support go today
3. Support support marked date
4. Support Chinese lunar
5. Support current week of this year (W21)
6. Support both `Date` and Date string `('2018-01-01')` types
7. Support customized start of week

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
  isChinese
  showWeekNumber
  showChineseLunar
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
  weekStartsOn={1} // 0,1,2,3,4,5,6 for S M T W T F S, defaults to 0
/>
```

### API

API name         | Desc
-----------------|----------------------------------------
selectedDate     | The current selected date, Required.
onPressDate      | Press date callback, Optional, `(date) => {}`
onPressGoToday   | Press gotoday button callback, Optional, `(today) => {}`
markedDate       | Marked highlighted date array, Optional, `['2018-01-01', '2018-02-01']`
onSwipeDown      | Swipe down gesture callback, Optional, `() => {}`
isChinese        | Show Chinese Week or not, default false,
showChineseLunar | Show Chinese Lunar or not, default false,
showWeekNumber   | Show week number or not, default false,
weekStartsOn     | Set start of week, Optional, defaults to 0, `0 1 2 3 4 5 6` for `S M T W T F S`

