import Link from "next/link"
import {useState,useEffect} from "react"
import {getCookie , isAuth , updateUser } from "../../actions/auth"
import {getProfile , update} from "../../actions/user"


import {
    Alert , 
    Card,
    Container,
    Row,
    Col,
    CardBody,
    Button, 
    Input,
    InputGroupAddon,
    InputGroup, 
    Form} from "reactstrap"
    
import {
        FaUser,
        FaAddressCard,
        FaEnvelopeOpen, 
        FaAlignLeft, 
        FaUnlock , 
        FaUpload
    } from "react-icons/fa"
import { API } from "../../config"
    



const ProfileUpdate = () => {
    const [values, setValues] = useState({
        username: '',
        name: '',
        email: '',
        about: '',
        password: '',
        error: false,
        success: false,
        loading: false,
        photo: '',
        userData: ''
    });

    const token = getCookie('token');
    const { username, name, email, about, password, error, success, loading, photo, userData } = values;

    const init = () => {
        getProfile(token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    username: data.username,
                    name: data.name,
                    email: data.email,
                    about: data.about
                });
            }
        });
    };

    useEffect(() => {
        init();
    }, []);

    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        let userFormData = new FormData();
        userFormData.set(name, value);
        setValues({ ...values, [name]: value, userData: userFormData, error: false, success: false });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values, loading: true });
        update(token, userData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false, loading: false });
            } else {
                updateUser(data, () => {
                    setValues({
                        ...values,
                        username: data.username,
                        name: data.name,
                        email: data.email,
                        about: data.about,
                        password: '',
                        success: true,
                        loading: false
                    });
                });
            }
        });
    };

    const profileUpdateForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="btn btn-outline-info">
                    Profile photo
                    <input onChange={handleChange('photo')} type="file" accept="image/*" hidden />
                </label>
            </div>
            
            <div className="form-group">
                
                <InputGroup>
                <InputGroupAddon addonType="prepend">
                <Button outline color="dark"><FaUser size={20}/></Button>
                </InputGroupAddon>
                <input
                onChange={handleChange('username')} 
                type="text" 
                value={username} 
                placeholder="Username"
                className="form-control" />
                </InputGroup>
            </div>
            
            
            <div className="form-group">
               
                <InputGroup>
                <InputGroupAddon addonType="prepend">
                <Button outline color="dark"><FaAddressCard size={20}/></Button>
                </InputGroupAddon>
                <input
                onChange={handleChange('name')} 
                type="text" 
                value={name} 
                placeholder="name"
                className="form-control" />
                </InputGroup>
            </div>

            <div className="form-group">
                <InputGroup>
                <InputGroupAddon addonType="prepend">
                <Button outline color="dark"><FaEnvelopeOpen size={20}/></Button>
                </InputGroupAddon>
                <input
                onChange={handleChange('email')} 
                type="text" 
                value={email} 
                placeholder="About"
                className="form-control" />
                </InputGroup>
            </div>
            
            
            <div className="form-group">
                <InputGroup>
                <InputGroupAddon addonType="prepend">
                <Button outline color="dark"><FaAlignLeft size={20}/></Button>
                </InputGroupAddon>
                <textarea 
                onChange={handleChange('about')} 
                type="text" 
                value={about} 
                placeholder="About"
                className="form-control" />
                </InputGroup>
            </div>

            <div className="form-group">
                <InputGroup>
                <InputGroupAddon addonType="prepend">
                <Button outline color="dark"><FaUnlock size={20}/></Button>
                </InputGroupAddon>
                <Input 
                onChange={handleChange('password')} 
                type="password" 
                value={password} 
                placeholder="Password"
                />
                </InputGroup>
            </div>

            <div>
                
                <Button size="sm" type="submit" outline color="dark">
                <FaUpload size={30}/>
                </Button>
            </div>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            Profile updated
        </div>
    );

    const showLoading = () => (
        <div className="alert alert-info" style={{ display: loading ? '' : 'none' }}>
            Loading...
        </div>
    );

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src={`${API}/user/photo/${username}`}
                            className="img img-fluid img-thumbnail mb-3"
                            style={{ maxHeight: 'auto', maxWidth: '100%' }}
                            alt="user profile"
                        />
                    </div>
                    <div className="col-md-8 mb-5">
                        {showSuccess()}
                        {showError()}
                        {showLoading()}
                        {profileUpdateForm()}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProfileUpdate;