function clothescard({clothes}){
    return(
        <div className="clothescard">
            <div className="clothes-img">
                <img src={clothes.imageUrl} alt={clothes.name} />
            </div>
            <h3 className="clothes-name">{clothes.name}</h3>
            <h4 className="clothes-price">{clothes.price}₸</h4>
        </div>
    )
}

export default clothescard;