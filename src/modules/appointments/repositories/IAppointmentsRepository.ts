import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllInDayFromUserDTO from '../dtos/IFindAllInDayFromUserDTO';
import IFindAllInMonthFromUserDTO from '../dtos/IFindAllInMonthFromUserDTO';
import IFindAllInDayFromProviderDTO from '../dtos/IFindAllInDayFromProviderDTO';
import IFindAllInMonthFromProviderDTO from '../dtos/IFindAllInMonthFromProviderDTO';

interface IAppointmentsRepository {
    create(data: ICreateAppointmentDTO): Promise<Appointment>;
    findByDate(
        date: Date,
        provider_id: string,
    ): Promise<Appointment | undefined>;
    findAllInMonthFromProvider(
        data: IFindAllInMonthFromProviderDTO,
    ): Promise<Appointment[]>;
    findAllInDayFromProvider(
        data: IFindAllInDayFromProviderDTO,
    ): Promise<Appointment[]>;
    findAllInMonthFromUser(
        data: IFindAllInMonthFromUserDTO,
    ): Promise<Appointment[]>;
    findAllInDayFromUser(
        data: IFindAllInDayFromUserDTO,
    ): Promise<Appointment[]>;
}

export default IAppointmentsRepository;
