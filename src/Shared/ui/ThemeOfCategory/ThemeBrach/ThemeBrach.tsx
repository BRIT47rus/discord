import { useState, useEffect } from 'react';
import { useGetBrachiesQuery } from '../../../../features/apiLenzaous';
import type { TBranch } from '../../../../features/types';
import '../ThemeOfCategory.css';
import { Notification } from '../../Notification/Notification';
import classNames from 'classnames';
import { useAppDispatch, useAppSellector } from '../../../../App/store';
import { setSelected } from '../../../../features/categorySlice';
export const ThemeBrach = ({ id }: { id: string }) => {
    const { data } = useGetBrachiesQuery();
    const [responseBranchies, setResponseBranchies] = useState<TBranch[]>([]);
    const selected = useAppSellector((state) => state.isSelected);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data) {
            const res = data.response;
            setResponseBranchies(res.filter((item) => item.chat_id === id));
        }
    }, [data, id]);

    useEffect(() => {
        responseBranchies.forEach((item) => {
            dispatch(setSelected({ id: item.id, value: false }));
        });
    }, [responseBranchies, dispatch]);

    //TODO need fix

    const handleClick = (id: string) => {
        dispatch(setSelected({ id, value: !selected[id] }));
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
