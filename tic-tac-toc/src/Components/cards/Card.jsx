import Icon from "../Icon/icon";
import './card.css'

function Card({gameend,player ,onPlay ,index }){
    let icon = <Icon />

    if(player ==='X' )
        icon = <Icon name="Cross" />
    else if(player === 'O')
        icon = <Icon name="Circle" />


    return (

        <div className="card"  onClick={()=> !gameend && player==" " && onPlay(index)}>
            {icon}
        </div>
    );

}

export default Card;