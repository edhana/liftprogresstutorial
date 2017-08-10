class Lift extends React.Component {
  render () {
    return (
      <div>
        <div>Liftname: {this.props.liftname}</div>
        <div>Weightlifted: {this.props.weightlifted}</div>
        <div>Repsperformed: {this.props.repsperformed}</div>
        <div>Onerm: {this.props.onerm}</div>
      </div>
    );
  }
}

Lift.propTypes = {
  liftname: React.PropTypes.string,
  weightlifted: React.PropTypes.number,
  repsperformed: React.PropTypes.number,
  onerm: React.PropTypes.number
};

