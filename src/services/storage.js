import { AsyncStorage } from 'react-native';

class LocalStorage {
    constructor() {
        // this.get = this.get.bind(this);
        // this.store = this.store.bind(this);
        // this.remove = this.remove.bind(this);
    }

    async parseJSON(response): Promise<any> {
        return await JSON.parse(response);
    }

    async get(key: string): Promise<any> {
        const data = await this.fetchStorageData(key);
        return data ? data : null;
    }

    async store(key: string, value: any): Promise<any> {
        await this.setStorageData(key, value);
    }

    async remove(key: string): Promise<any> {
        await this.removeStorageData(key);
    }

    async fetchStorageData(key) {
        try {
            return await AsyncStorage.getItem(key).then(this.parseJSON);
        } catch (error) {
            console.log('no storage supported');
            throw error;
        }
    }

    async setStorageData(key, value) {
        try {
            return await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log('no storage supported');
            throw error;
        }
    }

    async removeStorageData(key) {
        try {
            return await AsyncStorage.setItem(key);
        } catch (error) {
            console.log('no storage supported');
            throw error;
        }
    }
}

const localStorage = new LocalStorage();
export default localStorage;
