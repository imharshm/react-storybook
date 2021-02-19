import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import data from "../utils/data.json";

const Contacts = () => {
  const [inputData, setInputData] = useState({});
  const [persons, setPersons] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    console.log("Contact form data", inputData);
    event.preventDefault();
    const contactData = inputData;
    axios
      .post(`https://react.indexial.in/api/contacts.php/create`, {
        contactData,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    setPersons([
      {
        id: "1",
        title: "blog title",
        blog_desc: "blog desc",
        image_path: "",
        auther: "Somanath",
        created_on: "2021-01-11 09:02:50",
        status: "1",
      },
      {
        id: "2",
        title: "blog title",
        blog_desc: "blog desc",
        image_path: "",
        auther: "image path",
        created_on: "2021-01-11 09:08:16",
        status: "1",
      },
      {
        id: "3",
        title: "blog title",
        blog_desc: "blog desc",
        image_path: "image path",
        auther: "Somanath",
        created_on: "2021-01-11 09:09:13",
        status: "1",
      },
      {
        id: "4",
        title: "blog title4",
        blog_desc: "blog desc4",
        image_path: "image path4",
        auther: "Somanath",
        created_on: "2021-01-11 09:10:34",
        status: "1",
      },
    ]);
  }, []);

  return (
    <>
      <Form className="bg-white p-5 rounded shadow-sm" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label> Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            value={inputData.name}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label> Mobile:</Form.Label>
          <Form.Control
            type="text"
            name="mobile"
            placeholder="Enter mobile"
            value={inputData.mobile}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label> Email:</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Enter email"
            value={inputData.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label> Company:</Form.Label>
          <Form.Control
            type="text"
            name="company"
            placeholder="Enter company"
            value={inputData.company}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label> Message:</Form.Label>
          <Form.Control
            type="text"
            name="message"
            as="textarea"
            row={3}
            placeholder="Enter message"
            value={inputData.message}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button type="submit" className="btn btn-lg btn-primary">
          {data.website.Employee.AddNew.action}
        </Button>
      </Form>

      <ul>
        {persons &&
          persons.length > 0 &&
          persons.map((person, index) => <li key={index}>{person.title}</li>)}
      </ul>
    </>
  );
};

export default Contacts;
