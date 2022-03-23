import spinner from "../image/spinner.gif";

const Spinner = () => {
    return ( 
        <img src={ spinner } alt="loading" style={{
            width: 200,
            margin: "auto",
            display: "block",
        }} />
     );
}
 
export default Spinner;