export type TSection = {
    id: string;
    title: string;
    position?: number;
    collapse?: boolean;
};
export type TChat = {
    section_id: string;
    id: string;
    title: string;
    position?: number;
    lastmessage?: number;
    unread?: number;
    notification?: boolean;
    mention?: boolean;
};
export type TBranch = {
    chat_id: string;
    id: string;
    title: string;
    position?: number;
    lastmessage?: number;
    unread: number;
    notification?: boolean;
    mention?: boolean;
};

export type IBrachies = {
    response: TBranch[];
};

export type IChats = {
    response: TChat[];
};

export interface ISections {
    response: TSection[];
}
export type OptionalKeys<T, K extends keyof T> = Omit<T, K> &
    Partial<Pick<T, K>>;
