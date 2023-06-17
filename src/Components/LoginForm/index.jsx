import React from 'react'

import { useState } from "react";

import { useForm } from "react-hook-form"

import styles from "./LoginForm.module.css"

function LoginForm() {

  const { register, handleSubmit, formState: { errors }, } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

      <input type="text" name="nome" placeholder='Digite o seu nome' {...register("name", {
        required: true
      })} />
      
      <input type="text" name="email" placeholder='Digite o seu e-mail' {...register("email", {
        required: true,
        pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
      })} />
      {errors.email && errors.email.type === "required" && (
        <p className="errorMsg">Email is required.</p>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <p className="errorMsg">Email is not valid.</p>
      )}


      <input type="password" name="password" {...register("password",{
        required: true,
        minLength: 6
      })} />

      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
