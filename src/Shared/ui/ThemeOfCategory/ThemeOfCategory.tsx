import { forwardRef, useEffect, useState, type RefObject } from 'react';
import type { TChat } from '../../../features/types';
import { TitleCategory } from '../TitleCategory/TitleCategory';
import './ThemeOfCategory.css';
import { useGetChatsQuery } from '../../../features/apiLenzaous';

interface Props {
    id: string;
    onClick?: (ref: RefObject<HTMLDivElement> | null) => void;
}

export const ThemeOfCategory = forwardRef<HTMLDivElement, Props>(
    ({ id, onClick }, ref) => {
        const { data } = useGetChatsQuery();
        const [response, setResponse] = useState<TChat[]>([]);

        useEffect(() => {
            if (data) {
                const res = data.response;
                setResponse(res.filter((item) => item.section_id === id));
            }
        }, [data, id]);

        return (
            <div
                className="theme-category"
                ref={ref}
                onClick={() =>
                    onClick
                        ? onClick(ref as RefObject<HTMLDivElement> | null)
                        : undefined
                }
            >
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
