import SideBar from "../../components/sidebar/SideBar";
import "./settings.css";

export default function Settings()
{
    return (
        <div className="settings">
          <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <from className="settingsForm">
                <label> Profile Picture</label>
                <div className="settingsProfilePicture">
                    <img src="" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="abc" />
                <label>Email</label>
                <input type="email" placeholder="abc@gmail.com" />
                <label>Password</label>
                <input type="password" placeholder="abc" />
                <button className="settingsSubmit">Update</button>
            </from>
          </div>
          <SideBar/>
        </div>
    )
}