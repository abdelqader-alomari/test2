import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { withAuth0 } from "@auth0/auth0-react";

class UpdateModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.showingModal}>
                <Modal.Header>
                    <Modal.Title>update</Modal.Title>
                </Modal.Header>

                <Form style={{ padding: '20px' }} onSubmit={(e) => this.props.updateUni(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>University Name </Form.Label>
                        <Form.Control type="text" placeholder="University Name " defaultValue={this.props.updateUniObj.name} name='name' />

                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>University Website</Form.Label>
                        <Form.Control type="text" placeholder="University Website" defaultValue={this.props.updateUniObj.web_pages} name='web_pages' />
                    </Form.Group>

                    <Button style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }} variant="primary" type="submit">
                        Update
                    </Button>
                    <Button style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }} variant="secondary" onClick={this.props.showingModal}>
                        Close
                    </Button>

                </Form>
            </Modal>
        )
    }
}
export default withAuth0(UpdateModal)