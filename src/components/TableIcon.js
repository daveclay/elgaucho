import { connect } from "react-redux";
import {buildTableStyle} from "../tableUtils";

const TableIcon = ({table, style}) => (
    <div className="table" style={
      {
        ...style,
        ...buildTableStyle(table.tableType, table.tableColor)
      }
    }/>
)

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
})

export default connect(
    mapStateToProps,
)(TableIcon);
