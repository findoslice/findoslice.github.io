'use-strict';
import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="about">
                <h1>
                    Findlay Smith
                </h1>
                <br/>
                <p>
                    Findlay Smith is a student currently studying for a master's degree in <a href="https://www.ed.ac.uk/studying/undergraduate/degrees/index.php?action=programme&code=F355" target="_blank">Computational Physics </a> 
                     at the <a href="https://ed.ac.uk" target="_blank">University of Edinburgh</a>. He also works as a Software Engineer at <a href="//mappingbook.net" target="_blank">Mappingbook</a> and is an incoming intern at <a href="https://edjo.io" target="_blank">Edjo</a>.
                    In his spare time Findlay enjoys petting dogs, travelling, and learning languages. He is also well known to dislike writing in the third person.
                </p>
                <br/>
                <p>
                    For the past year Findlay has been the President of <a href="https://comp-soc.com" target="_blank"><span class="compsoc">Comp<span class="htb">Soc</span> Edinburgh</span></a>, Scotland's largest (and best) university technology society.
                    In this role he was responsible for liaising with corporate partners, organising a wide variety of events, and overseeing and supporting the rest of the committee in a variety of roles.
                    He was also heavily involved with the organisation of <a href="https://2019.hacktheburgh.com" target="_blank">Hack the Burgh <span class="htb">V</span></a> and the 2nd iteration of the Informatics ball.
                </p>
                <br/>
                <LangSection lang = "de" />
                <br/>
                <LangSection lang = "fr" />
            </div>
        )
    }
}

class LangSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {translate: false}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({translate: !this.state.translate})
    }

    render(){
        let content;
        if (this.props.lang == "de") {
            if (!this.state.translate) {
                content =
                    <p>
                        For the past three years Findlay has been teaching himself German, learning it both to communicate with friends and his girlfriend Ester. He
                        is able to speak German proficiently in both professional and informal contexts and is passionate about furthering his knowledge of the language 
                    <span onClick = {this.handleClick} className = "togglelang">
                    <br />
                    <br />
                        Click here to read this in German
                    </span>
                    </p>
            } else {
                content = <p>
                    Seit der letzten drei Jahre, Findlay hat sein selbst Deutsch beigebracht, um mitzusprechen mit seinen Freunden aus Deutschland, und seine Freundin Ester. Er 
                    kann Deutsch reden in formelle und laessig Lagen und er geniesst mehr ueber Deutsch zu lernen. Er gehoert auch keine deutsch Tastatur.
                <span onClick = {this.handleClick} className="togglelang">
                <br />
                <br />
                Druecken sie hier fuer den Englisch version
                </span>
                </p>
            }
        } else if (this.props.lang == "fr") {
            if (!this.state.translate) {
                content =
                    <p>
                        Findlay learnt French in school but enjoys furthering his knowledge of French language and culture, he was also once interviewed on the <i>Interfrance Brittany</i> radio station.
                    <span onClick = {this.handleClick} className = "togglelang">
                    <br /><br />
                        Click here to read this in French
                    </span>
                    </p>
            } else {
                content = <p>
                    Findlay a appris la francais dans l'ecole, mais il prends plaisir en apprendant de plus a propos de la langue et la culture francaise. Il etait aussi interviewe sur la station radio <i>Interfrance Bretagne</i>.
                    Il aussi n'a pas un clavier francais.
                <span onClick = {this.handleClick} className="togglelang">
                <br /><br />
                Appuyez-vous ici pour la version anglais.
                </span>
                </p>
            }
        }
        return content;

    }
}