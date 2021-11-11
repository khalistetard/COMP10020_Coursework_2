import { NextPage } from "next";
import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import HeaderVarientOne from '../../components/user_interface/headers/HeaderVarientOne';
import { Button } from "react-bootstrap";

const Login: NextPage = () =>
{
    return(
        <Fragment>

            <Head>
                <title>Sign In - LeagueRivalry</title>
            </Head>

            <HeaderVarientOne 
            bgColor='13181B' 
            textColor='ffffff'
            scrollDownCta={false}>

                <h1 className='custom-header-xl'>Login to Account.</h1>
            
                <Link href="/security/register" passHref>
                    <Button variant='outline-light' className='my-5'>Don't have an account? Register.</Button>
                </Link>

            </HeaderVarientOne>

        </Fragment>
    );
};

export default Login;