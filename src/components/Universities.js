import React from 'react';
import axios from 'axios'
import swal from 'sweetalert';
import { Row, Card, Button } from 'react-bootstrap'
class Universities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            universities: [],
        }
    }

    componentDidMount() {
        const url = `${process.env.REACT_APP_SERVER}/getUnis`;
        axios.get(url).then(result => {
            //console.log(res.data);
            this.setState({
                universities: result.data,
            })
        }).catch(error => console.log(error));
    }


    addFavitem = (index) => {
        const addUni = {
            web_pages: this.state.universities[index].web_pages,
            name: this.state.universities[index].name,
        }
        console.log(addUni);
        const url = `${process.env.REACT_APP_SERVER}/createUnis`;
        axios.post(url, addUni).then(res => {

        }).catch();
        swal({
            title: "Added To Your Favorite",
            icon: "success",
            button: "Aww yiss!",
        });

    }



    render() {
        return (
            <div>
                <Row xs={2} md={2} className="g-3">
                    {
                        this.state.universities.length > 0 &&
                        this.state.universities.map((uni, idx) => {
                            return (
                                <Card style={{ width: '20rem' }} className="text-center mb-3">
                                    <Card.Body>
                                        <Card.Title>{uni.name}</Card.Title>
                                        <Card.Text><a href={uni.web_pages}>Web Page</a></Card.Text>

                                        <Button variant="primary" onClick={() => this.addFavitem(idx)}>add to favorite</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }
}
export default Universities;