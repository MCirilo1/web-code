import React, { Component } from 'react';
import $ from 'jquery'
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Resume from './Resume';



class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            foo: 'bar',
            resumeData: {}
        };
    }

    getResumeData(){
        $.ajax({
            url:'/resumeData.json',
            dataType:'json',
            cache: false,
            successs: function(data){
                this.setstate({resumeData: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
                alert(err);
            }
        });
    }

    componentDidMount = () => {
        this.getResumeData();
    }

    render() {
        return null;
    }
}