import "./css/buttonComponentStyles.css"
function ButtonComponent(props){
    return(
        <a className="btnNav" href="">{props.label}</a>
    )

}
export default ButtonComponent;