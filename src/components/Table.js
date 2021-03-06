import { connect } from "react-redux";
import {
} from "../redux/actions"

const Table = ({table}) => (
    <div className="draggable table" style={table.style}>
        <div className="table-content">
            <span className="table-id">{table.id}</span>
            <div className="form-content">
                <div className="form-inline" role="form">
                    <div className="form-group">
                        <input className="tableId" type="text" placeholder="10"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
})

export default connect(
    mapStateToProps,
    {
    }
)(Table);
