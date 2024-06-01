

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createData, deleteData, clearTodo, editTodo } from "../redux/action/Action";

const Home = () => {
  
  const List = useSelector((state) => state?.todoReducer?.List);

  const dispatch = useDispatch();

  const [addData, setAddData] = useState("");
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState("");

 

  

  const handleClearTodo = () => {
    dispatch(clearTodo());
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 mt-5 bg-light px-5">
          <h2 className="px-5">Todo list</h2>
          <div className="row mt-5">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={addData}
                onChange={(e) => setAddData(e.target.value)}
              />
            </div>
            <div className="col">
              <button
                type="submit"
                className="btn btn-info"
                onClick={()=>dispatch(createData(addData),setAddData(''))}
              >
                Add
              </button>
            </div>
          </div>

          <div className="row">
            {List?.map((item, id) => (
              <div className="row mt-5" key={id}>
                <div className="col border mx-3">
                  <h6 className="pt-2 px-2">{item.data}</h6>
                </div>
                <div className="col">
                  <button
                    type="submit"
                    className="btn btn-info"
                    onClick={ ()=> dispatch(deleteData(id))}
                  >
                    Delete
                  </button>{" "}
                  /
                  <button
                    type="submit"
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      setEditId(id)
                      setEditData(item.data);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}

            <div className="col mt-5 mb-5">
              <button
                type="submit"
                className="btn btn-info"
                onClick={handleClearTodo}
              >
                Clear List
              </button>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter name"
                      id="upDateData"
                      value={editData}
                      onChange={(e) => setEditData(e.target.value)}
                    />
                  </div>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body"></div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                  onClick={()=>dispatch(editTodo(editId, editData))}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;















// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { userAction } from "../redux/action/Action";
// import User from "./User";
// import { userReducer } from "../redux/reducer/ApiReducer";

// const Home = () => {
//   const [data, setData] = useState("");
//   const dispatch = useDispatch();
//   const userList = useSelector((state) => state?.userReducer);
//   console.log("🚀 ~ file: Home.js:11 ~ Home ~ userList:", userList);

//   const { loading } = userList;
//   console.log("🚀 ~ file: Home.js:14 ~ Home ~ loading:", loading);
     



//   return (
//     <header>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-2 col-sm-1 col-lg-2 col-xl-3"></div>
//           <div className="col-md-5 col-sm-10 col-lg-5 col-xl-5 text-center">
//             <h2 className="my-md-3 site-title text-color">
//               Illustrious Marketing
//             </h2>
              
//             <div className="div">
//               <button
//                 className="btn btn-primary"
//                 onClick={() => dispatch(userAction())}
               
//               >
//                 iewData
//               </button>

//               <table className="table table table-striped table-hover">
//                 <thead>
//                   <tr>
//                     <th scope="col">firstName</th>
//                     <th scope="col">lastName</th>
//                     <th scope="col">password</th>
//                   </tr>
//                 </thead>
//                 {
//                   loading?"Loading ...":(
//                     <tbody>
//                     {userList?.userList?.List?.map((item, id) => {
//                       return (
//                         <tr key={id}>
//                           <td>{item.firstName}</td>
//                           <td>{item.lastName}</td>
//                           <td>{item.password}</td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                   )
//                 }
               
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Home;

{
  /* <div className="div">
{userList?.userList?.List?.map((item, id) => {
  return (
     
    <ul className="list-group list-group-horizontal" key={id}>
      
        <ul className="border='2">
        <li>{item.firstName}</li>
        </ul>
       
        </ul>
  
  );
})}
</div> */
}
