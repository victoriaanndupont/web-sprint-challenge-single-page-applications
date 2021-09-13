import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";

const Form = () => {
  const [food, setFood] = useState({
    name: "",
    size: "",
    cheese: false,
    ham: false,
    pepperoni: false,
    sausage: false,
    mushroom: false,
    pineapple: false,
    specialText: "",
  });

  const changeHandler = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFood({ ...food, [e.target.name]: value });
    console.log(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(`https://reqres.in/api/orders`, food)
      .then((res) => {
        alert(res.data, "Data!: res.data");
        setPost([...post, res.data]);
      })
      .catch((err) => console.log(err));
    console.log(food);
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Name Required")
      .min(2, "Must be at least 2 Letters"),
    size: Yup.string()
      .oneOf(["Small", "Medium", "Large"])
      .required("Must select a size"),
  });

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    schema.isValid(food).then((valid) => setDisabled(!valid));
  }, [food]);

  const [post, setPost] = useState([]);

  return (
    <>
      <h3>Select your toppings:</h3>
      {disabled && (
        <p style={{ color: "red" }}>name must be at least 2 characters</p>
      )}
      <form id="pizza-form" onSubmit={submitHandler}>
        <label htmlFor="name">
          Customer Name:
          <input
            type="text"
            name="name"
            id="name-input"
            value={food.name}
            onChange={changeHandler}
          />
        </label>
        <hr />
        {disabled && <p style={{ color: "blue" }}>Must select a size</p>}
        <label htmlFor="size">
          Sizes
          <select
            name="size"
            id="sizeDropdown"
            value={food.size}
            onChange={changeHandler}
          >
            <option value="size">Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>

        <p>Can we interest you in some toppings?</p>
        <label htmlFor="cheese">
          <input
            checked={food.cheese}
            type="checkbox"
            name="cheese"
            value={food.cheese}
            id="cheese"
            onChange={changeHandler}
          />
          Cheese
        </label>
        <label htmlFor="ham">
          <input
            checked={food.ham}
            type="checkbox"
            name="ham"
            value={food.ham}
            id="ham"
            onChange={changeHandler}
          />
          Ham
        </label>
        <label htmlFor="pepperoni">
          <input
            checked={food.pepperoni}
            type="checkbox"
            name="pepperoni"
            value={food.pepperoni}
            id="pepperoni"
            onChange={changeHandler}
          />
          Pepperoni
        </label>
        <label htmlFor="sausage">
          <input
            checked={food.sausage}
            type="checkbox"
            name="sausage"
            value={food.sausage}
            id="sausage"
            onChange={changeHandler}
          />
          Sausage
        </label>
        <label htmlFor="Mushroom">
          <input
            checked={food.mushroom}
            type="checkbox"
            name="Mushroom"
            value={food.mushroom}
            id="mushroom"
            onChange={changeHandler}
          />
          Mushroom
        </label>
        <label htmlFor="pineapple">
          <input
            checked={food.pineapple}
            type="checkbox"
            name="pineapple"
            value={food.pineapple}
            id="pineapple"
            onChange={changeHandler}
          />
          Signature Topping (pineapple)
        </label>

        <hr />
        <label htmlFor="specialText">
          Anything else? <br />
          <br />
          <textarea
            rows={6}
            cols={40}
            name="specialText"
            value={food.specialText}
            placeholder="Tell us how we can make it perfect..."
            id="special-text"
            onChange={changeHandler}
          />
        </label>
        <hr />
        <button id="orderButton" type="submit" disabled={disabled}>
          Place my Order{" "}
        </button>
      </form>
    </>
  );
};

export default Form;
