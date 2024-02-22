import "./post.css"

export default function Post(){
    return(
        <div className="post">
            <img className="postImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu3HjZ74dHKWn5uWpLVzRb_Lg64MLJWvvDw&usqp=CAU" alt=""/>
            <div className="postInfo">
                <div className="postCats">
                  <span className="postCat">Music</span>
                  <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet </span>
                <hr/>
                <span className="postDate"></span>
                
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque modi eveniet deleniti nobis laborum, voluptas adipisci natus minima quasi amet!</p>

        </div>
    )
}