/* import Lift from './lift.es6.jsx'*/

class Lifts extends React.Component {
  render () {
    let userLifts;

    if(this.props.lifts){
      userLifts = this.props.lifts.map(lift => {
        return (
          <div key={lift.id}>
            <div>Liftname: {lift.liftname}</div>
            <div>Weightlifted: {lift.weightlifted}</div>
            <div>Repsperformed: {lift.repsperformed}</div>
            <div>Onerm: {lift.onerm}</div>
          </div>
        );
      });
    }

    return (
      <div className="well">
        {userLifts}
      </div>
    );
  }
}

Lifts.propTypes = {
  lifts: React.PropTypes.array
};

