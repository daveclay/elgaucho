import {connect} from "react-redux";
import {
} from "../redux/actions"
import TableForm from "./TableForm";

const Controls = ({}) => (
  <div id="controls">
    <button className="btn btn-danger" id="reset">Reset</button>
    <TableForm/>
    <input type="text" id="coords" readOnly width="8"/>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  ownProps,
})

export default connect(
  mapStateToProps,
  {
  }
)(Controls);
