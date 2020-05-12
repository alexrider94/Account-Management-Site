import React from 'react'
import { Card } from 'react-bootstrap'

class StudyCard extends React.Component {
    render() {
        return (
            <Card id="card">
                <Card.Body>
                    <Card.Title id="card-title"></Card.Title>
                    <Card.Text id="card-text"></Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default StudyCard;