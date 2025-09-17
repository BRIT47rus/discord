import type { FC } from 'react';
import './Notification.css';
type ValueProp = '@' | number;
interface Props {
    value: ValueProp;
}
export const Notification: FC<Props> = ({ value }) => {
    return (
        <div className="notification">
            {typeof value !== 'number' ? (
                <span>{value}</span>
            ) : (
                <span>{value}</span>
            )}
        </div>
    );
};
