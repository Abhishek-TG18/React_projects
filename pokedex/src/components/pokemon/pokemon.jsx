import './pokemon.css'
function Pokemon({name , image}){

        return(

            <div className='pokemon'>
                <p style={{letterSpacing:"5px", fontSize:"16px"}}>{name}</p>
                <div><img src={image} alt="image" /></div>
            </div>
        );
}
export default Pokemon;