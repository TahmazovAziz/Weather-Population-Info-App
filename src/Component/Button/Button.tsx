interface ButtonInterface{
    children:string;
    Click:()=>void;
}
export default function Button({children, Click}:ButtonInterface){
    return(
        <div className="container__button">
            <button onClick={Click}>{children}</button>
        </div>
    )
}