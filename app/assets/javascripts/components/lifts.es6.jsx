class Lifts extends React.Component {
  render () {
    let userLifts;

    if(this.props.lifts){
      userLifts = this.props.lifts.map(lift => {
        return (
          <Lift key={lift.id}
            date={lift.date}
            liftname={lift.liftname}
            weightlifted={lift.weightlifted}
            repsperformed={lift.repsperformed}
            onerm={lift.onerm}
          />
        );
      });
    }

    return (
      <section>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Lift Name</th>
              <th>Weight Lifted</th>
              <th>Reps Performed</th>
              <th>1 RM</th>
            </tr>
          </thead>
          <tbody>
            {userLifts}
          </tbody>
        </table>
      </section>
    );
  }
}

Lifts.propTypes = {
  lifts: React.PropTypes.array
};

