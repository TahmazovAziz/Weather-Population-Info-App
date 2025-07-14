interface ButtonInterface{
    children: React.ReactNode;
    className?:string;
    Click:()=>void;
}
export default function Button({children, Click, className}:ButtonInterface){
    return(
        <div className="container__button">
            <button className={className} onClick={Click}>{children}</button>
        </div>
    )
}