export type TSection = {
    id?: string;
    title: string;
    position?: number;
    collapse?: boolean;
};

export interface ISections {
    response: TSection[];
}
export type OptionalKeys<T, K extends keyof T> = Omit<T, K> &
    Partial<Pick<T, K>>;
