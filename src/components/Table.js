import { connect } from "react-redux";
import {
} from "../redux/actions"
import Draggable from 'react-draggable';
import TableIcon from "./TableIcon"; // The default

const Table = ({table}) => (
    <Draggable positionOffset={{x: table.x, y: table.y}}>
        <div className="table-container">
            <TableIcon table={table}/>
            <div className="table-content">
                <span className="table-id">{table.name}</span>
                <div className="form-content">
                    <div className="form-inline" role="form">
                        <div className="form-group">
                            <input className="tableId" type="text" placeholder="10"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Draggable>
)

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
})

export default connect(
    mapStateToProps,
    {
    }
)(Table);
