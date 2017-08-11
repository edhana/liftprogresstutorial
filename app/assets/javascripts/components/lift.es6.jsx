class Lift extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.liftname}</td>
        <td>{this.props.weightlifted}</td>
        <td>{this.props.repsperformed}</td>
        <td>{this.props.onerm}</td>
      </tr>
    );
  }
}

Lift.propTypes = {
  liftname: React.PropTypes.string,
  weightlifted: React.PropTypes.number,
  repsperformed: React.PropTypes.number,
  onerm: React.PropTypes.number
};

