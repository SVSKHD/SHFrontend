import {useState} from "react"
import Link from "next/link"
import {emailContactForm} from "../../actions/form"
import {Form , InputGroup , InputGroupAddon , Input ,Button, Container , Row , Col, Card, CardBody} from "reactstrap"
import {FaPersonBooth , FaInbox, FaEnvelope, FaUpload} from "react-icons/fa"

const ContactForm = ({ authorEmail }) => {
    const [values, setValues] = useState({
        message: '',
        name: '',
        email: '',
        sent: false,
        buttonText: 'Send Message',
        success: false,
        error: false
    });

    const { message, name, email, sent, buttonText, success, error } = values;

    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, buttonText: 'Sending...' });
        emailContactForm({ authorEmail, name, email, message }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    sent: true,
                    name: '',
                    email: '',
                    message: '',
                    buttonText: 'Sent',
                    success: data.success
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, [name]: e.target.value, error: false, success: false, buttonText: 'Send Message' });
    };

    const showSuccessMessage = () => success && <div className="alert alert-info">Thank you for contacting us.</div>;

    const showErrorMessage = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const contactForm = () => {
        return (
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardBody>
            <form onSubmit={clickSubmit} className="pb-5">
                <div className="form-group">
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <Button outline color="light"><FaPersonBooth/></Button>
                    </InputGroupAddon>
                        <Input 
                        type="text" 
                        onChange={handleChange('name')}
                        className="form-control" 
                        value={name}
                        placeholder="name"
                        />
                    </InputGroup>
                </div>

                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <Button outline color="light"><FaEnvelope/></Button>
                    </InputGroupAddon>
                        <Input 
                        type="email" 
                        onChange={handleChange('email')}
                        className="form-control" 
                        value={email}
                        placeholder="Email"
                        />
                    </InputGroup>
                    <br/>

                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                    <Button outline color="light"><FaEnvelope/></Button>
                    </InputGroupAddon>
                        <Input 
                        type="textarea" 
                        onChange={handleChange('message')}
                        className="form-control" 
                        value={message}
                        placeholder="Message"
                        />
                    </InputGroup>
                    <br/>
                <div>
                    <Button size="sm" outline color="light" ><FaUpload size={20}/></Button>
                </div>
            </form>
            </CardBody>
        </Card>
        );
    };

    return (
        <React.Fragment>
            {showSuccessMessage()}
            {showErrorMessage()}
            {contactForm()}
        </React.Fragment>
    );
};

export default ContactForm;
