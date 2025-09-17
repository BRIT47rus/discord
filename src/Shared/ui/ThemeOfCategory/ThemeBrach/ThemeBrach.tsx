import { useState, useEffect } from 'react';
import { useGetBrachiesQuery } from '../../../../features/apiLenzaous';
import type { TBranch } from '../../../../features/types';
import '../ThemeOfCategory.css';
import { Notification } from '../../Notification/Notification';

export const ThemeBrach = ({ id }: { id: string }) => {
    const { data } = useGetBrachiesQuery();
    const [responseBranchies, setResponseBranchies] = useState<TBranch[]>([]);
    useEffect(() => {
        if (data) {
            const res = data.response;
            setResponseBranchies(res.filter((item) => item.chat_id === id));
        }
    }, [data, id]);
    return (
        <div className="theme-category__content">
            {responseBranchies &&
                responseBranchies.map((item) => (
                    <div className="theme-category__top" key={item.id}>
                        <div className="theme-category__line"></div>
                        <div className="theme-category__info">
                            <span>{item.title}</span>
                            <div className="theme-category__mention">
                                {item.mention && <Notification value={'@'} />}
                                {item.unread > 0 && (
                                    <Notification value={item.unread} />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};
