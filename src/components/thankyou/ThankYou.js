import auth from "../../auth/auth";
import React, { useState, useEffect }  from 'react';

const ThankYou = (props) => {
    const [email, setEmail] = useState();

    useEffect(() => {
        const loggedInUser = auth.getToken();
       
      //  setEmail(loggedInUser);
       if (loggedInUser!=="") {
            setEmail(loggedInUser);
        }
    },[]);

    return ( 
        <div className='container'>
            <div className='bg-light mt-4 p-5'>
                <h1>
                    Thank you {email}
                </h1>
                <br />
                <div>
                    We appreciate your comments: {props.Comment}
                </div>
            </div>
        </div>
    );
}
 
export default ThankYou;