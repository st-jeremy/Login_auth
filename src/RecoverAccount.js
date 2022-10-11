import { BsArrowRight } from 'react-icons/bs';

const RecoverAccount = () => {
    return ( 
        <div className="RecoverAccount">
            <div className='icon'>
                <img src="" alt="Logo" />
                <p>| B2B Dashboard</p>
        </div>
        <div>
            <h3>Recover your account</h3>
            <label htmlFor="">Email Address</label>
            <input 
                type="email" 
                name="email" 
                id="email"
                placeholder="LeonidasX@sendme.ng"
            />
            <input 
                type="submit" 
                value="Change Password" 
            />
            <i><BsArrowRight /></i>
            
            <p>Remember?</p>
            Login
        </div>

        </div>
     );
}
 
export default RecoverAccount;