import { connect } from "react-redux";
import {
  onOpenTableForm,
  onTableMoved
} from "../redux/actions"
import Draggable from 'react-draggable';
import TableIcon from "./TableIcon"; // The default

const Table = ({
                 table,
                 onOpenTableForm,
                 onTableMoved
}) => (
  <Draggable position={{x: table.x, y: table.y}}
             onDrag={(e, draggableData) => onTableMoved(table, draggableData)}>
    <div className="table-container" onDoubleClick={() => onOpenTableForm(table) }>
            <TableIcon table={table}/>
            <div className="table-content">
                <span className="table-id">{table.name}</span>
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
      onOpenTableForm,
      onTableMoved
    }
)(Table);
