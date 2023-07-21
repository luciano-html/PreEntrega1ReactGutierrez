import "./css/buttonComponentStyles.css"
import { Link } from "react-router-dom";
function ButtonComponent(props){
    return(
        <Link to={props.to} className="btnNav" href="">{props.label}</Link>
    )

}
export default ButtonComponent;