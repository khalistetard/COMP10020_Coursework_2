import type { NextPage } from 'next';
import { Fragment } from 'react';
import Header from '../components/user_interface/header';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Header pageTitle='Competitions' />
    </Fragment>
  ); 
};

export default Home;