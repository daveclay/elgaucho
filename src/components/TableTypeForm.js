import {connect} from "react-redux";
import {
  onOpenTableTypeForm,
  onUpdateTableTypeName,
  onCloseTableTypeForm,
  onSaveTableTypeForm,
  onAdjustTableSize,
  onAdjustTableRotation
} from "../redux/actions"
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import TableIcon from "./TableIcon";

const tableNameDisplay = (tableType) => {
  if (tableType.id) {
    return `Table ${tableType.name}`
  } else {
    return "New Table Type"
  }
}

const ConsoleLog = ({ children }) => {
  console.log(children);
  return false;
};

const TableTypeForm = ({
                         tableTypeForm,
                         onUpdateTableTypeName,
                         onCloseTableTypeForm,
                         onSaveTableTypeForm,
                         onAdjustTableSize,
                         onAdjustTableRotation
                       }) => (
  <div id="table-form">
    <Modal show={tableTypeForm.visible} onHide={onCloseTableTypeForm}>
      <Modal.Header closeButton>
        <Modal.Title>{tableNameDisplay(tableTypeForm.tableType)}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="table-form-modal">
        <Form>
          <Container>
            <Row>
              <Col xs={4}>
                <Form.Group controlId="tableTypeName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text"
                                value={tableTypeForm.tableType.name}
                                onChange={(e) =>
                                  onUpdateTableTypeName(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="tableTypeWidth">
                  <Form.Label>Width</Form.Label>
                  <Form.Control type="range"
                                value={tableTypeForm.tableType.styleConfig.width}
                                min={20}
                                max={200}
                                onChange={(e) =>
                                  onAdjustTableSize(e.target.value, tableTypeForm.tableType.styleConfig.height) }/>
                </Form.Group>
                <Form.Group controlId="tableTypeHeight">
                  <Form.Label>Height</Form.Label>
                  <Form.Control type="range"
                                value={tableTypeForm.tableType.styleConfig.height}
                                min={20}
                                max={200}
                                onChange={(e) =>
                                  onAdjustTableSize(tableTypeForm.tableType.styleConfig.width, e.target.value) }/>
                </Form.Group>
                <Form.Group controlId="height">
                  <Form.Label>Rotate</Form.Label>
                  <Form.Control type="range"
                                value={tableTypeForm.tableType.styleConfig.rotation || 0}
                                min={0}
                                max={360}
                                onChange={(e) =>
                                  onAdjustTableRotation(e.target.value) }/>
                </Form.Group>
              </Col>
              <Col xs={8}>
                <TableIcon table={{
                  name: "foo",
                  tableType: tableTypeForm.tableType
                }} style={{ marginLeft: "30%", marginTop: "30%"}}/>
              </Col>
            </Row>
          </Container>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCloseTableTypeForm}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onSaveTableTypeForm}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  tableTypeForm: state.tableTypeForm
})

export default connect(
  mapStateToProps,
  {
    onOpenTableTypeForm,
    onUpdateTableTypeName,
    onCloseTableTypeForm,
    onSaveTableTypeForm,
    onAdjustTableSize,
    onAdjustTableRotation
  }
)(TableTypeForm);
