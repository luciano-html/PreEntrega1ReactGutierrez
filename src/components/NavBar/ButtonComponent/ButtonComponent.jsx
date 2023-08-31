import "./css/buttonComponentStyles.css"
import { Link } from "react-router-dom";
function ButtonComponent(props){
    return(
        <Link style={props.styles} disabled={props.disabled} onClick={props.onClick} to={props.to} className="btnNav" href="">{props.label.toUpperCase()}</Link>
    )

}
export default ButtonComponent;