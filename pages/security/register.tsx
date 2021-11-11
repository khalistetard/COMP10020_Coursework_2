import { NextPage } from "next";
import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import HeaderVarientOne from '../../components/user_interface/headers/HeaderVarientOne';
import { Button } from "react-bootstrap";

const Register: NextPage = () =>
{
    return(
        <Fragment>

            <Head>
                <title>Create an Account - LeagueRivalry</title>
            </Head>

            <HeaderVarientOne 
            bgColor='13181B' 
            textColor='ffffff'
            scrollDownCta={false}>

                <h1 className='custom-header-xl'>Create an Account.</h1>
            
                <Link href="/security/login" passHref>
                    <Button variant='outline-light' className='my-5'>Have an account? Login.</Button>
                </Link>

            </HeaderVarientOne>

        </Fragment>
    );
};

export default Register;