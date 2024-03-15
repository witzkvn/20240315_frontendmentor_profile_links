import { FC, PropsWithChildren } from "react";

const Button: FC<PropsWithChildren> = ({ children }) => {
    return (
        <button className="rounded-xl bg-grey w-full p-4 transition-all hover:text-darkgrey hover:bg-green font-bold">
            {children}
        </button>
    );
};

export default Button;
