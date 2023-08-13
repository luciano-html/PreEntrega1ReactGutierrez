import "./css/buttonComponentStyles.css"
import { Link } from "react-router-dom";
function ButtonComponent(props){
    return(
        <Link disabled={props.disabled} onClick={props.onClick} to={props.to} className="btnNav" href="">{props.label}</Link>
    )

}
export default ButtonComponent;