import css from './registration.module.css'
import Input from '../input/input';
import Button from '../../common/button/Button';
// import Button from '../button/button';

function Registration (){
    return (
        <div className={css.registrationContener}>  
            <div>
                <Input/>
            </div>
            <div>
                <Input/>
            </div>
            <div>
                <Button>Sign in</Button>
            </div>
        </div>
    )
}

export default Registration;