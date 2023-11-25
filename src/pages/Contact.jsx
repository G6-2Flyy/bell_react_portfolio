import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const validateInput = ()=> {
        let valid = true
        let emailTest = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        if (name.length < 3) {
            setError('The name entered is too short!')
            valid = false;
        } else if (!email.match(emailTest)) {
            setError('Invalid email!')
            valid = false;
        } else if (message.length < 2) {
            setError('Invalid message!')
            valid = false;
        }  else setError('')
       return valid
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        validateInput()
    }

    return (
        <div>
            <h3>Contact</h3>
            <Form className='contact-form' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name here" onChange={(e) => setName(e.target.value.trim())} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value.trim())} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} onFocus={()=>validateInput()}  onChange={(e) => setMessage(e.target.value.trim())} required />
                </Form.Group>
               {error && <p>{error}</p>}
                <button type='submit'>Submit</button>
            </Form>
        </div>
    )
}

