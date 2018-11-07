import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Header from './Header';

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            projectName: "",
            readme: [],
            error: ""
        }
    }

    componentDidMount(){
        // eslint-disable-next-line
        console.log(this.props.match);
        const {
            match: { params }
        } = this.props;

        this.setState(() => ({
            username: params.username,
            projectName: params.name
        }));

        axios
            .get(`https://api.github.com/repos/${params.username}/${params.name}/readme`)
            .then(readme => {
                this.setState(() => ({
                    readme: readme.data
                }));
            })
            .catch(err => {
                this.setState({error: err});
            });
    }

    backHandle(e){
        e.preventDefault();
        this.props.onBackHandle(this.props.history, this.state.username);
    }

    render(){
        return (
            <div>
                <Header title={this.state.projectName} backHandle={this.backHandle.bind(this)}/>
                {
                    this.state.error &&
                    (
                        <div>
                            <br/>
                            <section className="eight offset-by-two columns">
                                <h2>No Readme was Found</h2>
                            </section>
                        </div>
                    )
                }
                {
                    !this.state.error &&
                    (
                        <div>
                            <section className="eight offset-by-two columns">
                                <h2>Render Readme</h2>
                            </section>
                        </div>
                    )
                }
            </div>
        );
    }
}

Detail.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    onBackHandle: PropTypes.func.isRequired
}

export default Detail;