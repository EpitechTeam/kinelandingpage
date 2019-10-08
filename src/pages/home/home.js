import React from 'react';
import Presentation from './Presentation';
import Caracs from "./Caracs";
import Showcase from "./Showcase";
import Tryit from "./Tryit";
import Footer from "../../components/footer";


class Home extends React.Component {
    constructor(props) {
        super(props);
        document.title = "Kine+ | Accueil";
    }

    render() {
        return (
            <div>
                <Presentation />
                <Caracs />
                <Showcase />
                <Tryit />
                <Footer />
            </div>
        );
    }
}

export default Home;
