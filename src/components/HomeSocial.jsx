import { BsFacebook, BsLinkedin,  BsGithub   } from 'react-icons/bs';

const HomeSocial = () => {
    return (
        <div className='mt-8 flex'>
            <p className='mr-3 text-blue-500'><a  href="https://www.facebook.com/profile.php?id=100009366925338"> <BsFacebook /></a></p>
            <p className='mr-3 text-blue-500'><a href="https://github.com/iqbalzaber"> <BsGithub /></a> </p>
            <p className='mb-3 text-blue-500'><a href="https://www.linkedin.com/in/farhan-adnan-masum-08102a274/"> <BsLinkedin /></a> </p>
        </div>
    );
};

export default HomeSocial;