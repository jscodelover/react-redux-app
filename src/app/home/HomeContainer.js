// @flow
import * as React from "react";
import { connect } from "react-redux";
import HomeComponent from "./HomeComponent";
import { homeOperations } from "./duck";

type Props = {
  currentCount: number,
  onIncrementClick: () => {},
  onDecrementClick: () => {}
};

const HomeContainer = (props: Props) => {
  return (
    <HomeComponent
      {...props}
      onIncrementClick={props.onIncrementClick}
      onDecrementClick={props.onDecrementClick}
    />
  );
};

const mapStateToProps = ({ home }) => {
  return {
    currentCount: home.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementClick: () => dispatch(homeOperations.incrementCount(1)),
    onDecrementClick: () => dispatch(homeOperations.decrementCount(1))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
