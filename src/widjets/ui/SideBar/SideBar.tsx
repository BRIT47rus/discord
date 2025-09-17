import { useEffect, useState } from 'react';
import { useGetSectionsQuery } from '../../../features/apiLenzaous';
import { Button, Category } from '../../../Shared';
import './SideBar.css';
import { ActiveBar } from './ui/ActiveBar/ActiveBar';
import type { TSection } from '../../../features/types';
export const SideBar = () => {
    const { data } = useGetSectionsQuery();
    const [response, setResponse] = useState<TSection[]>([]);
    useEffect(() => {
        if (data) {
            const res = data?.response;
            setResponse(res);
        }
    }, [data]);
    return (
        <div className="sidebar">
            <div className="sidebar__name">Server name</div>
            <ActiveBar />
            {response &&
                response.map((item) => (
                    <Category
                        key={item.id}
                        collapse={item.collapse}
                        position={item.position}
                        title={item.title}
                    />
                ))}

            <Button text="START" onClick={() => null} />
        </div>
    );
};
