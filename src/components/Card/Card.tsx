import { FC, PropsWithChildren } from "react";

const Card: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="bg-darkgrey rounded-2xl p-12 sm:min-w-[400px] flex flex-col items-center">
            {children}
        </div>
    );
};

export default Card;
