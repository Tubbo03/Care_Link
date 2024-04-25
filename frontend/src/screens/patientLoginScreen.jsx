import patient1 from '../assets/patient1.jpg'
import PatientLoginComponent from '../components/patientLoginComponent'
import  '../styles/loginsignupScreenStyle.css'

function PatientLoginScreen() {
    return (
        <>
        <div className='loginSignupMainContainer'>
            <div className='loginSignupimgContainer'>
                <img src={patient1} alt="" />
            </div>
            <div className='loginSignupContainer'>
                <PatientLoginComponent />
            </div>
        </div>
        </>
    )
}

export default PatientLoginScreen