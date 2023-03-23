
function Hero(props) {
  return (
    <div className="heroes-card">
        <div className="heroes__container">
        <div className = "heroes__photo"> 
        <img src = {props.url}/>
        </div>
        <h2> {props.name}</h2>
        <div className="heroes__title">Вселенная: 
        <span className="heroes__subtitle"> {props.universe}</span>  
        </div>
        <div className="heroes__title">   Альтер эго:
        <span className="heroes__subtitle"> {props.alterego} </span> 
        </div>
        <div className="heroes__title">  Род деятельности:
        <span className="heroes__subtitle"> {props.name}</span>
        </div>
        <div className="heroes__title">  Друзья:
        <span className="heroes__subtitle">{props.friends} </span>
        </div>
        <div className="heroes__title">  Суперсилы:
        <span className="heroes__subtitle"> {props.superpowers} </span>
        </div>
        <div className="star-container">
	     <h2> Подробнее </h2>
	    <div className="content heroes__subtitle">	{props.info}</div>
        </div>
        </div>
        </div>);
        }



export default Hero;
