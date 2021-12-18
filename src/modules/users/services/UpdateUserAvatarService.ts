import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUserRepository from '../repositories/IUserRepository';
import User from '../infra/typeorm/entities/User';

interface IRequest {
    user_id: string;
    avatarFilename: string;
}

@injectable()
class UpdateUserAvatarService {
    constructor(
        @inject('UsersRepository') private usersRepository: IUserRepository,
    ) {}

    public async execute({ avatarFilename, user_id }: IRequest): Promise<User> {
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found');
        }

        Object.assign(user, {
            avatar: avatarFilename,
        });

        await this.usersRepository.save(user);

        return user;
    }
}

export default UpdateUserAvatarService;
