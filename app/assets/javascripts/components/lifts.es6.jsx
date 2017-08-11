class Lifts extends React.Component {
  render () {
    let userLifts;

    if(this.props.lifts){
      userLifts = this.props.lifts.map(lift => {
        return (
          <Lift key={lift.id} liftname={lift.liftname}
            weightlifted={lift.weightlifted}
            repsperformed={lift.repsperformed}
            onerm={lift.onerm}
          />
        );
      });
    }

    return (
      <section>
      {userLifts}
      </section>
    );
  }
}

Lifts.propTypes = {
  lifts: React.PropTypes.array
};

