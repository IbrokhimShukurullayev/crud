import React , {useState} from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useSelector , useDispatch } from "react-redux"
import { removeFromUsers } from "../../context/usersSlice"
import id, { getId } from "../../context/id";

function Users({ data }) {
    const dispatch = useDispatch()
      const theme = useSelector(s=> s.theme.value)
      const [modal , setModal] =useState(false)
      const toggleModal = () => {
        setModal(!modal)
      }
  return (
    <>
     <div className={` ${theme ? "dark" : "light"}`}>
      <div className="users__wrapper" >
        {data?.map((user) => (
          <div onClick={(e) => dispatch(getId(e.target.id))} key={user.id} className="users__card">
            <img src={user.gender === "male" ? male : female} alt="" />
            <h2>{user.name}</h2>
            <p>{user.profession}</p>
            <p>{user.age} years old</p>
            <div className="user__buttons">
              <button onClick={()=> dispatch(removeFromUsers(user))}>Remove</button>
              <button id={user.id} onClick={toggleModal} className="user__edit">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <form className="create__user-form" action="">
              <input
                type="text"
                placeholder="name"
              />
              <input
                type="text"
                placeholder="profession"
              />
              <input
                type="number"
                placeholder="age"
              />
              <select
              name="" 
              id=""
              >
                <option value="">gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
              <div className="modal__buttons">
                <button className="madal__button__1" type="submit">Save</button>
                <button className="close-modal" onClick={toggleModal}>
                  CLOSE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Users;
