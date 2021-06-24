import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Container } from '../../components';
import { CreateUserRequest } from '../../redux/actions';

const createUser = () => {
  const dispatch = useDispatch()
  const [newuser, setNewuser] = useState({
    first_name : '',
    last_name : '',
    email : '',
    phone_number: '',
    status:0
  });

  ...

  //Add new user 
  const add_user = () => {
    dispatch(CreateUserRequest({ newuser })); // <-- dispatch action payload
  }

  return (
    ...
  )
}
