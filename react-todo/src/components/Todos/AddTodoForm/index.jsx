import React, { useState, useCallback } from 'react';

import styles from './AddTodoForm.module.css';
import Input from '../../common/input';
import Button from '../../common/button';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

const validateTodo = (value) => {
  let error;
  if(!value) {
    error = 'Это поле не должно быть пустым';
  }
  return error;
}

const validate = (values) => {
  const errors = {};
  if(!values.todo) {
    errors.todo = 'Это поле не должно быть пустым';
  }
  return errors;
}

const validationSchema = Yup.object().shape({
  todo: Yup.string().required('Это поле не должно быть пустым')
});

const AddTodoForm = ({ onAddTodo }) => {

  const handleSubmit = useCallback((values) => {
    onAddTodo && onAddTodo(values.todo);
  }, [onAddTodo]
  );

  return (
    <Formik 
      initialValues={{
        todo: ''
      }} 
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {
        (props) => {
          return (
            <Form className={styles.addTodoForm}>
              <div>
                <Field name="todo">
                  { ({ field, form, meta }) => (
                      <Input
                        values={field.todo}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        name={field.name}
                        error={form.errors.todo}
                      />
                    )
                  }
                </Field>
              </div>
              <Button buttonText='Add todo' type='submit' />
            </Form>
          )
        }
      }
    </Formik> 

    // <form className={styles.addTodoForm} onSubmit={handleSubmit}>
    //   <div>
    //     <Input 
    //       onChange={handleFieldChange}
    //       name='todo'
    //       value={value}
    //     />
    //   </div>
    //   <Button buttonText={'Add todo'} type='submit' />
    // </form>
  );
}


export default AddTodoForm;