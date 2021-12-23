import { injectable, inject } from 'tsyringe';

import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
    user_id: string;
    day: number;
    month: number;
    year: number;
}

@injectable()
class ListUserAppointmentsService {
    constructor(
        @inject('AppointmentsRepository')
        private appointmentRepository: IAppointmentsRepository,
    ) {}

    public async execute({
        user_id,
        day,
        month,
        year,
    }: IRequest): Promise<Appointment[]> {
        const appointments = await this.appointmentRepository.findAllInDayFromUser(
            {
                user_id,
                day,
                month,
                year,
            },
        );

        return appointments;
    }
}

export default ListUserAppointmentsService;
