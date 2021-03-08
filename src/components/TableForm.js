import {connect} from "react-redux";
import {
  onOpenTableForm,
  onUpdateTableName,
  onTableColorSelected,
  onCloseTableForm,
  onSaveTableForm,
  onDeleteTable
} from "../redux/actions"
import TableTypeDropdown from "./TableTypeDropdown";
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import { CirclePicker } from 'react-color';
import TableIcon from "./TableIcon";
import TableTypeForm from "./TableTypeForm";

const tableNameDisplay = (table) => {
  if (table.id) {
    return `Table ${table.name}`
  } else {
    return "New Table"
  }
}

const TableForm = ({
                     tableForm,
                     onOpenTableForm,
                     onTableColorSelected,
                     onUpdateTableName,
                     onCloseTableForm,
                     onSaveTableForm,
                     onDeleteTable
}) => (
    <div id="table-form">
      <div className="config-option">
        <Button variant="primary" onClick={() => onOpenTableForm()}>Add Table</Button>
      </div>
      <Modal show={tableForm.visible} onHide={onCloseTableForm}>
        <Modal.Header closeButton>
          <Modal.Title>{tableNameDisplay(tableForm.table)}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="table-form-modal">
          <Form>
            <Container>
            <Row>
              <Col>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text"
                                value={tableForm.table.name}
                                onChange={(e) => onUpdateTableName(e.target.value)}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="type">
                  <Form.Label>Table Type</Form.Label>
                  <TableTypeDropdown />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="color">
                  <Form.Label>Color</Form.Label>
                  <CirclePicker
                    onChange={onTableColorSelected}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <TableIcon table={tableForm.table}/>
              </Col>
            </Row>
          </Container>
          </Form>
          <TableTypeForm />
        </Modal.Body>
        <Modal.Footer>
          {
            tableForm.table.id ?
              <Button variant="danger" onClick={onDeleteTable} className="mr-auto">
                Delete
              </Button>
              : null
          }
          <Button variant="secondary" onClick={onCloseTableForm}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onSaveTableForm}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  tableForm: state.tableForm
})

export default connect(
  mapStateToProps,
  {
    onOpenTableForm,
    onUpdateTableName,
    onTableColorSelected,
    onCloseTableForm,
    onSaveTableForm,
    onDeleteTable
  }
)(TableForm);
