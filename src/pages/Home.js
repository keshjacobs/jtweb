import React from 'react';
import Brief from '../components/Sections/Brief';
import app from "../App.json";
import StoreButton from '../components/Buttons/StoreButtons';


class Home extends React.Component {
  render() {
        return (
            <>
            <Brief align="text-left" full={false} dark={true} data={app.contents[0]} set="first" button={<StoreButton />} image={app.contents[0].image}/>
            </>
        );
    }

}

export default Home;
