import { AsyncStorage } from 'react-native';

class LocalStorage {
    constructor() {
        this.data = {};
    }

    async parseJSON(response): Promise<any> {
        return await JSON.parse(response);
    }

    async get(key: string): Promise<any> {
        await this.fetchStorageData();
        return this.data[key];
    }

    async store(key: string, value: any): Promise<any> {
        this.data[key] = value;
        await this.updateStorageData();
    }

    async remove(key: string): Promise<any> {
        delete this.data[key];
        await this.updateStorageData();
    }

    async fetchStorageData() {
        try {
            this.data = await AsyncStorage.getItem('data').then(this.parseJSON);
        } catch (error) {
            console.log('no storage supported');
            throw error;
        }
    }

    async updateStorageData() {
        try {
            return await AsyncStorage.setItem('data', JSON.stringify(this.data));
        } catch (error) {
            console.log('no storage supported');
            throw error;
        }
    }
}

const localStorage = new LocalStorage();
export default localStorage;
