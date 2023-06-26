
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function CreateTask() {
  const notifyCreation = () => toast("Task was Created");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, "sending data request");
    axios
      .post("http://localhost:3000", data)
      .then((response) => {
        console.log("Added new item Successfully:", response.data);
        reset();
        setTimeout(navigate(`/tasks`),2500)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // your form submit function which will invoke after successful validation

  console.log(watch("title"), watch("description"));
  // you can watch individual input by pass the name of the input

  return (
    <div>
      <h1>CreateTask</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          {...register("title", { required: true })}
          type="text"
          placeholder="Task title"
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          {...register("description", { required: true })}
          type="textarea"
          placeholder="Task escription"
        />

        <label for="priority">assign a priority</label>
        <select {...register("priority")}>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
       </select>

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <p>This field is required</p>}

        <input type="submit" value={"Submit"} onClick={notifyCreation}/>
      </form>
    </div>
  );
}
