import './app.css'
export default function Cards({image, title, subtitle}){
    return(
        <div className="card_box">
            <img src={image} alt="" />
            <h4>{title}</h4>
            <p>{subtitle}</p>
        </div>
    )
}











