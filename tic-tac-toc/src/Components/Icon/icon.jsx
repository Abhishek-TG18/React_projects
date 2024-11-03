import {  FaPen, FaRegCircle, FaTimes } from 'react-icons/fa'

function Icon({name}){

        if(name === 'Circle')
            return <FaRegCircle />;
        if(name === 'Cross')
             return <FaTimes />;
        else 
            return <FaPen />
}



export default Icon;