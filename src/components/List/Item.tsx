import { ReactNode } from "react";

interface ListItemProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "error" | "warn";
}

export const ListItem = (props: ListItemProps) => {
    const defaultStyle = "w-[140px] flex gap-2 justify-center items-center"

    const getVariant = () => {
        const variant = props.variant || "primary";
        switch (variant) {
            case "primary":
                return "text-gray-500";
            case "secondary":
                return "text-slate-700";
            case "error":
                return "text-red-500";
            case "warn":
                return "text-yellow-500";
        }
    }

    return (
        <li className={`${defaultStyle} ${getVariant()}`}>
            {props.children}
        </li>
    )
}