import { AsyncStorage } from 'react-native';

class LocalStorage {
    constructor() {
        this.actions = {
            get: AsyncStorage.getItem.bind(this),
            set: AsyncStorage.setItem.bind(this),
            remove: AsyncStorage.removeItem.bind(this),
            getAll: AsyncStorage.getAllKeys.bind(this)
        }
    }

    async parseJSON(response): Promise<any> {
        return await JSON.parse(response);
    }

    async get(key: string): Promise<any> {
        const data = await this.storageAction('get', key);
        return data ? data : null;
    }

    async store(key: string, value: any): Promise<any> {
        return this.storageAction('set', key, JSON.stringify(value));
    }

    async remove(key: string): Promise<any> {
        return this.storageAction('remove', key);
    }

    async getAllItems(prefix = ''): Promise<any> {
        return this.actions['getAll']()
            .then((keys: string[]) => {
                const fetchKeys = keys.filter((k) => { return k.startsWith(prefix); });
                return AsyncStorage.multiGet(fetchKeys);
            })
            .then(this.parseJSON);
    }

    async storageAction(action: string, key, value?) {
        try {
            return await this.actions[action](key, value).then(this.parseJSON);
        } catch (error) {
            console.log('no storage supported');
            throw error;
        }
    }
}

const localStorage = new LocalStorage();
export default localStorage;
