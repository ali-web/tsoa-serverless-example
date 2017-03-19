import {Company} from '../models/company';
import {Route, Get} from 'tsoa';
import {User} from '../models/user';

@Route('Companies')
export class CompaniesController {
    /** Get the current account */
    @Get('Current')
    public async current(): Promise<Company> {
        return {
            id: 600,
            name: 'test'
        };
    }

    /** Get a list of users for the account */
    @Get('Users')
    public async getUsers(): Promise<User[]> {
        return [
            {
                createdAt: new Date(),
                email: 'test@test.com',
                id: 1
            },
            {
                createdAt: new Date(),
                email: 'test2@test2.com',
                id: 2,
            }
        ];
    }
}
