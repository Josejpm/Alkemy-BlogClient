import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';


const PostDetails = () => {
    const {id} = useParams()
    console.log(id);

    return ( 
        <Fragment>
            <h1>Details </h1>
        </Fragment> 
    );
}
 
export default PostDetails;