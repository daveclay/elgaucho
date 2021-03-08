import {connect} from "react-redux";
import {
  onReset
} from "../redux/actions"
import TableForm from "./TableForm";
import {Button} from "react-bootstrap";

const Controls = ({ onReset }) => (
  <div id="controls">
    <Button variant="danger" onClick={onReset}>Reset</Button>
    <TableForm/>
    <input type="text" id="coords" readOnly width="8"/>
  </div>
)

const mapStateToProps = (state, ownProps) => ownProps

export default connect(
  mapStateToProps,
  {
    onReset
})(Controls);
