import "./header.css";

export default function Header(){
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://images.unsplash.com/photo-1669649265855-7c3f10453f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>

        </div>
    )
}