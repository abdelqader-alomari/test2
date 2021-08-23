import React from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import UpdateModal from './UpdateModal'
import { withAuth0 } from "@auth0/auth0-react";

class FavUnis extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favUnis: [],
            name: '',
            web_pages: [],
            updateUniObj: {},
            showUpdateModal: false,
        }
    }
    componentDidMount() {
        const url = `${process.env.REACT_APP_SERVER}/favUnis`;
        axios.get(url).then(result => {
            this.setState({
                favUnis: result.data,
            })
        }).catch();
    }
    showingModal = (element) => {
        this.setState({
            updateUniObj: element,
            showUpdateModal: !this.state.showUpdateModal
        })
    }

    deleteFav = (id) => {
        const url = `${process.env.REACT_APP_SERVER}/deleteUnis/${id}`;
        axios.delete(url).then(result => {
            this.setState({
                favUnis: result.data,
            })
        }).catch();
    }
    updateUni = ((e) => {
        e.preventDefault();
        const uniId = this.state.updateUniObj._id;
        const body = {
            web_pages: e.target.web_pages.value,
            name: e.target.name.value,
        };

        axios.put(`${process.env.REACT_APP_SERVER}/updateUnis/${uniId}`, body).then((updateResponse) => {


            const unisArr = this.state.favUnis.map(uni => {

                if (uni._id === uniId) {
                    uni.web_pages = updateResponse.data.web_pages;
                    uni.name = updateResponse.data.name;
                    return uni;
                }
                return uni;
            });
            this.setState({ favUnis: unisArr })
            this.showingModal({})
            this.setState({ showUpdateModal: false });


        }).catch(error => alert(error));
    });



    render() {
        return (
            <div>
                {this.showingModal &&
                    <UpdateModal
                        show={this.state.showUpdateModal}
                        showingModal={this.showingModal}
                        updateUni={this.updateUni}
                        updateUniObj={this.state.updateUniObj}
                    />
                }
                {
                    this.state.favUnis.length > 0 &&
                    this.state.favUnis.map((uni, idx) => {
                        return (
                            <Card style={{ width: '17rem', float: 'right', margin: '1rem 2rem 1rem 0rem' }} className="text-center mb-3">
                                <Card.Body>
                                    <Card.Title>{uni.name}</Card.Title>
                                    <Card.Text><a href={uni.web_pages}>Web Page</a></Card.Text>
                                    <Button style={{ marginRight: '15px' }} variant="primary" onClick={() => this.deleteFav(uni._id)}>Delete</Button>
                                    <Button variant="primary" onClick={() => this.showingModal(uni)}>update</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}
export default withAuth0(FavUnis)

