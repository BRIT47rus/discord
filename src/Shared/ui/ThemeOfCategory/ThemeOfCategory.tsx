import { useEffect, useState, type FC } from 'react';
import type { TChat } from '../../../features/types';
import { TitleCategory } from '../TitleCategory/TitleCategory';
import './ThemeOfCategory.css';
import { useGetChatsQuery } from '../../../features/apiLenzaous';
interface Props {
    id: string;
}
export const ThemeOfCategory: FC<Props> = ({ id }) => {
    const { data } = useGetChatsQuery();

    const [response, setResponse] = useState<TChat[]>([]);
    useEffect(() => {
        if (data) {
            const res = data.response;
            setResponse(res.filter((item) => item.section_id === id));
        }
    }, [data, id]);

    return (
        <div className="theme-category">
            {response &&
                response.map((item) => (
                    <TitleCategory
                        key={item.id}
                        title={item.title}
                        id={item.id}
                    />
                ))}
        </div>
    );
};
