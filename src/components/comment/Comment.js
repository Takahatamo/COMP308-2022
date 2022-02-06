import { Dropdown } from 'bootstrap';
import React, { useState, useEffect }  from 'react';
import { useHistory } from "react-router-dom";
import auth from "../../auth/auth";

const Comment = (props) => {
    const [courseCode, setCourseCode] = useState();
    const [courseName, setCourseName] = useState();
    const [rateCourse, setRateCourse] = useState();
    const [email, setEmail] = useState();
    const [comment, setComment] = useState();
    const history = useHistory();

    useEffect(() => {
        const loggedInUser = auth.getToken();
       
      //  setEmail(loggedInUser);
       if (loggedInUser!=="") {
            setEmail(loggedInUser);
        }
    },[]);

    const handleSubmit = e => {
        e.preventDefault();
        props.onCommentUpdate(comment);
        history.push('/result');
      };

    return ( 
        
        <div className='container'>
            <h1>Comment Your Course</h1>
            <div className='bg-light mt-4 p-5'>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
						<label>Course Code: </label>
						<input type="text" className="form-control" onChange={e => setCourseCode(e.target.value)} />
					</div>
                    <div className="col-md-6">
						<label>Course Name: </label>
						<input type="text" className="form-control" onChange={e => setCourseName(e.target.value)} />
					</div>

                    <div className="col-md-6">
						<label>Student Email: </label>
						<input type="text" className="form-control" defaultValue={email} disabled = {true} />
					</div>

                    <div></div>

                    <div className='col-md-6'>
                    <label>What was your favourite Lab/Assignment</label>
                        <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Lab Exercise or Assignment
                        </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item">Lab Exercise 1</a></li>
                            <li><a class="dropdown-item">Lab Exercise 2</a></li>
                            <li><a class="dropdown-item">Lab Exercise 3</a></li>
                            <li><a class="dropdown-item">Lab Exercise 4</a></li>
                            <li><a class="dropdown-item">Assignment 1</a></li>
                            <li><a class="dropdown-item">Assignment 2</a></li>
                            <li><a class="dropdown-item">Assignment 3</a></li>
                            <li><a class="dropdown-item">Assignment 4</a></li>
                            </ul>
                        
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label>Rate course from: 1(Awful) to 5(Excellent)</label>
                        <div>
                        <div class="row" onChange={e=>setRateCourse(e.target.value)}>
                            <div class="col"><button type="button" class="btn btn-danger">1</button></div>
                            <div class="col"> <button type="button" class="btn btn-warning">2</button></div>
                            <div class="col"> <button type="button" class="btn btn-warning">3</button></div>
                            <div class="col"> <button type="button" class="btn btn-success">4</button></div>
                            <div class="col"> <button type="button" class="btn btn-success">5</button></div>
                        </div>

                        </div>
                    </div>
                    <div className="col-md-12">
						<label>Your Comments: </label>
						<textarea className="form-control" placeholder="Leave a comment here" style={{
                            height: '100px'
                        }} onChange={e => setComment(e.target.value)} rows={5}></textarea>
					</div>

                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                    <button className="btn btn-success float-end">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Comment;