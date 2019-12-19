import React from 'react'
import {Card} from 'react-bootstrap'

class StudyCard extends React.Component{
    render(){
        return(
            <Card id="card">
                <Card.Body>
                    <Card.Title id="card-title"></Card.Title>
                    <Card.Text id="card-text"></Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

function printCard(data) {
    var title ="test_title";
    var text ="test_text";

    const domTitle = "<Card.Title>" + title + "</Card.Title>"
    const domText = "<Card.Text>" + text + "</Card.Text>"
    for (var i = 0; i < data; i++) {
        var card = document.getElementById("card-title");
    }
}

export default StudyCard;