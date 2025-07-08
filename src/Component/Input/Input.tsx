interface InputField{
    value:string;
    onChangeInput:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
export default function Input({value, onChangeInput, onKeyDown}:InputField){
    return(
        <div className="container__input">
            <input type="text" value={value}  onChange={onChangeInput}  onKeyDown={onKeyDown}/>
        </div>
    )
}