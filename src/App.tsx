import UserImageFile from "./assets/images/avatar-jessica.jpeg";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import UserImage from "./components/UserImage/UserImage";

const buttonsList = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
];

function App() {
    return (
        <div className="bg-offblack text-white flex items-center justify-center h-screen w-screen">
            <Card>
                <UserImage src={UserImageFile} additionalClasses="mb-8" />
                <h2 className="text-3xl mb-1 font-semibold">Jessica Randall</h2>
                <p className="text-green font-bold mb-8">
                    London, United Kingdom
                </p>
                <p className="mb-8">"Front-end developer and avid reader."</p>
                <div className="flex flex-col gap-5 w-full">
                    {buttonsList.map((link) => (
                        <Button key={link}>{link}</Button>
                    ))}
                </div>
            </Card>
        </div>
    );
}

export default App;
