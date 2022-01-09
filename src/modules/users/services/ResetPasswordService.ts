import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUserRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
    email: string;
    password: string;
    password_confirmation: string;
}

@injectable()
class ResetPasswordService {
    constructor(
        @inject('UsersRepository') private usersRepository: IUsersRepository,

        @inject('HashProvider') private hashProvider: IHashProvider,
    ) {}

    public async execute({
        email,
        password,
        password_confirmation,
    }: IRequest): Promise<void> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError('User does not exist');
        }

        if (!password) {
            throw new AppError(
                'You need to inform the password to set a new password',
            );
        }

        if (!password_confirmation) {
            throw new AppError(
                'You need to inform the confirm password to set a new password',
            );
        }

        if (password !== password_confirmation) {
            throw new AppError('You need to inform the same passwords');
        }

        user.password = await this.hashProvider.generateHash(password);

        await this.usersRepository.save(user);
    }
}

export default ResetPasswordService;
