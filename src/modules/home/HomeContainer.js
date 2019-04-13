// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { homeOperations } from './duck';
import { getCount } from './duck/selectors';

type Props = {
  currentCount: number,
  onIncrementClick: () => {},
  onDecrementClick: () => {},
};

const HomeContainer = (props: Props) => (
  <HomeComponent
    {...props}
    onIncrementClick={props.onIncrementClick}
    onDecrementClick={props.onDecrementClick}
  />
);

const mapStateToProps = ({ home }) => ({
  currentCount: getCount(home),
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementClick: () => dispatch(homeOperations.incrementCount(1)),
  onDecrementClick: () => dispatch(homeOperations.decrementCount(1)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
