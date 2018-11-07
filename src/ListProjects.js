import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Panel, Row, Col, Button } from 'react-bootstrap';

class ListProjects extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: []
        }
    };

    componentDidMount() {
        // eslint-disable-next-line
        console.log(this.props.match.params.username);
        // eslint-disable-next-line
        console.log(this.props.match);
        const { 
            match: { params }
        } = this.props;

        axios
            .get(`https://api.github.com/users/${params.username}/repos`)
            .then(projects => 
                this.setState(() => ({
                    projects: projects.data
                }))
            )
            .catch(err => console.log(err.message)); // eslint-disable-line
    }

    backHandle(e){
        e.preventDefault();
        this.props.onBackHandle(this.props.history);
    }

    clickProject(id, projectName, user){
        console.log(`projectName: ${projectName} - id: ${id} - user: ${user}`); //eslint-disable-line
        if(this.props.onClickProject && projectName && id && user)
            this.props.onClickProject(this.props.history, user, id, projectName);
    }

    render(){
        return(
            <div>
                <Header title={this.props.match.params.username} backHandle={this.backHandle.bind(this)}/>
                <div className="container">
                    <br/>
                    <section className="eight offset-by-two columns">
                        <h2>Projects</h2>
                    </section>
                    <br/>
                    <section className="eight offset-by-two columns">
                        <Panel>
                            <Row>
                                <Col xs={12} md={12}>
                                    {
                                        this.state.projects.map(
                                            proj => 
                                                <Button
                                                    key={proj.id}
                                                    onClick = {this.clickProject.bind(this, proj.id, proj.name, proj.owner.login)}
                                                    className = "buttonStyle"
                                                >
                                                    {proj.name}
                                                    <br/>
                                                </Button>
                                        )
                                    }
                                </Col>
                            </Row>
                        </Panel>
                    </section>
                </div>
            </div>
        );
    }
}

ListProjects.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    onBackHandle: PropTypes.func.isRequired,
    onClickProject: PropTypes.func.isRequired
};

export default ListProjects;