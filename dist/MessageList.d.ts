export interface IMessageHash {
    [key: string]: string[];
}
export default class MessageList {
    private _cachedList;
    constructor(messages?: IMessageHash);
    reset(): void;
    add(field: string, errors: string[] | string, replace?: boolean): void;
    merge(messages: IMessageHash, replace?: boolean): void;
    readonly list: IMessageHash;
    readonly keys: string[];
    readonly length: number;
}
