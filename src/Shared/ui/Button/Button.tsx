import type { FC, HTMLAttributes } from 'react';
import './Button.css';
interface Props extends HTMLAttributes<HTMLButtonElement> {
    onClick: VoidFunction;
    text: string;
}
export const Button: FC<Props> = ({ onClick, text }) => {
    return (
        <div className="button">
            <button onClick={onClick} />
            {text}
        </div>
    );
};
