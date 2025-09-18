import type { FC } from 'react';
import './Notification.css';
import classNames from 'classnames';
type ValueProp = '@' | number;
interface Props {
    value: ValueProp;
    className?: string;
}
export const Notification: FC<Props> = ({ value, className = '' }) => {
    const isNumber = typeof value === 'number';
    return (
        <div
            className={classNames('notification', className, {
                'notification-number': !isNumber,
            })}
        >
            <span>{value}</span>
        </div>
    );
};
