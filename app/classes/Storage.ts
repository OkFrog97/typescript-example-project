export class LocalStorage implements IStorage {
    storage = window.localStorage;

    setItem(key, value) {
        const stringifyData: string | null = this.storage.getItem(key)
        const oldData = JSON.parse(typeof stringifyData == 'string' ? stringifyData : '' );
        const savedData = oldData ? [...oldData, value] : [value]
        const stringifiedValue = JSON.stringify(savedData);
        this.storage.setItem(key, stringifiedValue);
    }

    getItem(key): string {
        const stringifyData: string | null = this.storage.getItem(key)
        return JSON.parse((typeof stringifyData == 'string' ? stringifyData : '' ));
    }
}

export interface IStorage {
    setItem(key, value): void;
    getItem(key): string;
}