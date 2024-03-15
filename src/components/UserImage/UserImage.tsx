import { FC } from "react";

type Props = {
    src: string;
    additionalClasses?: string;
};

const UserImage: FC<Props> = ({ src, additionalClasses }) => {
    return (
        <div>
            <img
                src={src}
                alt="User"
                className={`w-28 h-28 rounded-full ${additionalClasses}`}
            />
        </div>
    );
};

export default UserImage;
