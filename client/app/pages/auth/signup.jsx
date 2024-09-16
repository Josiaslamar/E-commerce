import { useDispatch } from 'react-redux';
import CommonForm from '../../components/common/form';
import { registerFormControls } from '@/config';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '@/store/auth-slice';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  userName: '',
  email: '',
  password: ''
}

function AuthSignup() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: 'Success!',
          description: data?.payload?.message || 'You have signed up successfully.'
        });
        navigate('/auth/login');
      } else {
        toast({
          title: 'Registration Failed',
          variant: "destructive",
          description: data?.payload?.message || 'Please try again later',
          status: 'error'
        });
      }
    });
  }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Create new account</h1>
        <p className='mt-2'>
          Already have an Account!
          <Link
            className='font-medium ml-2 text-primary hover:underline'
            to="/auth/login">
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={'Sign Up'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default AuthSignup