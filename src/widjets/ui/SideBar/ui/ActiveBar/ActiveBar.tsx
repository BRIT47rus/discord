import { useEffect, useState } from 'react';
import { useGetChatsQuery } from '../../../../../features/apiLenzaous';
import { BoxIcon } from '../../../../../Shared/ui/BoxIcon/BoxIcon';
import { BrancheIcon } from '../../../../../Shared/ui/BrancheIcon/BrancheIcon';
import './ActiveBar.css';
import { Notification } from '../../../../../Shared/ui/Notification/Notification';
export const ActiveBar = () => {
    const { data } = useGetChatsQuery();
    const [unread, setUnread] = useState<number>(0);

    useEffect(() => {
        if (data?.response) {
            const count = data?.response.reduce(
                (acc, curr) => acc + curr.unread,
                0
            );
            setUnread(count);
        }
    }, [data]);

    return (
        <div className="active-bar">
            <div className="active-bar__title">
                <div className="active-bar__title-left">
                    <BoxIcon />
                    <span>Новые</span>
                </div>
                <Notification value={unread} />
            </div>
            <div className="active-bar__title">
                <div className="active-bar__title-left">
                    <BrancheIcon />
                    <span>Ветки</span>
                </div>
                {/* <Notification value={unread} /> */}
            </div>
        </div>
    );
};
