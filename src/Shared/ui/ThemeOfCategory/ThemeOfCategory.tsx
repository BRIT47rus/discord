import { forwardRef, useEffect, useState, type HTMLAttributes } from 'react';
import type { TChat } from '../../../features/types';
import { TitleCategory } from '../TitleCategory/TitleCategory';
import './ThemeOfCategory.css';
import { useGetChatsQuery } from '../../../features/apiLenzaous';

interface Props extends HTMLAttributes<HTMLDivElement> {
    id: string;
}

export const ThemeOfCategory = forwardRef<HTMLDivElement, Props>(
    ({ id }, ref) => {
        const { data } = useGetChatsQuery();
        const [response, setResponse] = useState<TChat[]>([]);

        useEffect(() => {
            if (data) {
                const res = data.response;
                setResponse(res.filter((item) => item.section_id === id));
            }
        }, [data, id]);

        return (
            <div className="theme-category" ref={ref}>
                {response.map((item) => (
                    <TitleCategory
                        notification={item.notification}
                        key={item.id}
                        title={item.title}
                        id={item.id}
                    />
                ))}
            </div>
        );
    }
);
