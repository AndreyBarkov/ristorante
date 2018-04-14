import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Menu } from '../models/menu';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const menu: Menu[] = [
        {
            'id': '1',
            'name': 'Omlette',
            'vegan': 'No',
            'price': 10.99
        },
        {
            'id': '2',
            'name': 'Oatmeal',
            'vegan': 'Yes',
            'price': 13.70
        },

        {
            'id': '3',
            'name': 'Avocado Toast',
            'vegan': 'Yes',
            'price': 12.00
        },
        {
            'id': '4',
            'name': 'Chiken curry',
            'vegan': 'No',
            'price': 9.99
        },
        {
            'id': '5',
            'name': 'Classic Burger',
            'vegan': 'No',
            'price': 13.99
        },
        {
            'id': '6',
            'name': 'Caesar Salad',
            'vegan': 'Yes',
            'price': 8.99
        },

        {
            'id': '7',
            'name': 'Steak',
            'vegan': 'No',
            'price': 25.99
        },
        {
            'id': '8',
            'name': 'Onion soup',
            'vegan': 'No',
            'price': 13.99
        },
        {
            'id': '9',
            'name': 'Veggie Burger',
            'vegan': 'Yes',
            'price': 14.99
        }

];
    return {menu};
  }
}
