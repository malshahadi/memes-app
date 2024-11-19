export default function Card(props){
    return(
        <>
        <div className="card">
        <div className="img" style={{backgroundImage: `url(${props.url})`}}></div>
        <h2>{props.name}</h2>
        </div>
        </>
    );
};