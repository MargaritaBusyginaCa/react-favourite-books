import List from "./List";

const BookComponent =({books}) =>{
    return(
        <>
        {books.map((book)=>{
            const{id, title, author, cover} = book
            return(
                <div className="book-component">
                    <img src={cover} alt={title}/>
                    <div className="book-info">
                       <h3>{title}</h3>
                       <h5>by: {author}</h5>
                    </div>
                </div>
            )
        })}
        </>
    )
}
    


export default BookComponent;