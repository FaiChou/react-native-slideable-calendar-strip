import React from 'React';
import ReactTestRenderer from 'react-test-renderer';
import CalendarStrip from '../index';

describe('CalendarStrip', () => {
  it('renders correctly', () => {
    const instance = ReactTestRenderer.create(
      <CalendarStrip
        selectedDate={new Date()}
        onPressDate={(date) => {
          console.log(date);
        }}
        onPressGoToday={(today) => {
          console.log(today);
        }}
        onSwipeDown={() => {
          console.log('swipe down!');
        }}
        markedDate={['2018-05-04', '2018-05-15', '2018-06-04', '2018-05-01',]}
      />
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });
});