import Link from 'next/link';
import { Fragment } from 'react';

function index(){
    return(
        <Fragment>
            <h1>This is Home page</h1>
            <ul>
                <li>
                    <Link href="/meet">Go to Second Pages</Link>
                </li>
            </ul>
        </Fragment>
    );
}

export default index;