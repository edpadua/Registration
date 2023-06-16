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
    <form className={styles.form} onSubmit={onSubmitForm}>

      <input type="text" name="nome" placeholder='Digite o seu nome' {...register("name"), {
        required: true
      }} />

      <input type="text" name="email" placeholder='Digite o seu e-mail' {...register("email"), {
        required: true
      }} />

      <input type="password" name="password" {...register("password"), {
        required: true, minLength: 6
      }} />
    </form>
  )
}

export default LoginForm
