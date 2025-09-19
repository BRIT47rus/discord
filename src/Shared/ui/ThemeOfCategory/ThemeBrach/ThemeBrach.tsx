import { useState, useEffect } from 'react';
import { useGetBrachiesQuery } from '../../../../features/apiLenzaous';
import type { TBranch } from '../../../../features/types';
import '../ThemeOfCategory.css';
import { Notification } from '../../Notification/Notification';
import classNames from 'classnames';
export const ThemeBrach = ({ id }: { id: string }) => {
    const { data } = useGetBrachiesQuery();
    const [selected, setSelected] = useState<{ [key: string]: boolean }>({});
    const [responseBranchies, setResponseBranchies] = useState<TBranch[]>([]);

    useEffect(() => {
        if (data) {
            const res = data.response;
            setResponseBranchies(res.filter((item) => item.chat_id === id));
        }
    }, [data, id]);
    useEffect(() => {
        const initSelected: { [key: string]: boolean } = {};
        responseBranchies.forEach((item) => {
            initSelected[item.id] = false;
        });
    }, [responseBranchies]);

    const handleClick = (id: string) => {
        setSelected((prev) => {
            return { ...prev, [id]: !prev[id] };
        });
        //TODO need fix
    };

    return (
        <div className="theme-category__content">
            {responseBranchies &&
                responseBranchies.map((item) => (
                    <div
                        className={classNames('theme-category__top', {
                            'theme-category-focuse': selected[item.id],
                        })}
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                    >
                        <div className="theme-category__line"></div>
                        <div className="theme-category__info">
                            <span
                                className={classNames({
                                    'theme-category__text-inactive':
                                        !item.notification,
                                    'mention-active': item.mention,
                                })}
                            >
                                {item.title}dd
                            </span>
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
