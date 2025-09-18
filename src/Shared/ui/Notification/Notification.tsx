import type { FC } from 'react';
import './Notification.css';
import classNames from 'classnames';
type ValueProp = '@' | number;
interface Props {
    value: ValueProp;
}
export const Notification: FC<Props> = ({ value }) => {
    const isNumber = typeof value === 'number';
    return (
        <div
            className={classNames('notification', {
                'notification-number': !isNumber,
            })}
        >
            <span>{value}</span>
        </div>
    );
};
