
import { Link , Navigate} from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [
        signInWithEmailAndPassword,
      
    ] = useSignInWithEmailAndPassword(auth);

    const [user] = useAuthState(auth);

 


   

    
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        if(user){
            <Navigate  to='/'></Navigate>
        }
    }

    return (
        <section className='h-screen w-screen flex justify-center items-center snb'>
            <div className='bg-white p-8 rounded shadow lg:w-1/3 md:w-1/2 w-2/3 lg:mx-0 md:mx-0 mx-4'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-3xl font-bold mb-8'>Sign in now</h1>
                    <div className='flex flex-col'>
                        <div className='mb-3'>
                            <input
                                placeholder="Email"
                                type="text"
                                {...register("email", { required: true })}
                                className='border w-full py-2 px-3 rounded'
                            />
                            {errors.email && <p className='text-[#7f0e0e]'>Email is required</p>}
                        </div>

                        <div className='mb-4'>
                            <input
                                placeholder="Password"
                                type="text"
                                {...register("password", { required: true })}
                                className='border w-full py-2 px-3 rounded'
                            />
                            {errors.password && <p className='text-[#7f0e0e]'>Password is required</p>}
                        </div>

                        <input
                            type="submit"
                            value={'Sign in'}
                            className='border bg-accent text-white rounded-3xl hover:bg-white hover:border-[#7f0e0e] hover:text-[#7f0e0e] duration-500 py-2 w-full'
                        />
                    </div>
                </form>
                <p className='text-center'>If you are not user please <Link to='/signUp'><button class="btn btn-active btn-link">SignUp</button></Link></p>
            </div>
        </section>
    );
};

export default Login;