import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import ListUserAppointmentsService from '@modules/appointments/services/ListUserAppointmentsService';

export default class AppointmentsController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const user_id = request.user.id;
        const { provider_id, date, description } = request.body;

        const createAppointment = container.resolve(CreateAppointmentService);

        const appointment = await createAppointment.execute({
            date,
            provider_id,
            user_id,
            description,
        });

        return response.json(appointment);
    }

    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const user_id = request.user.id;
        const { day, month, year } = request.query;

        const listUserrAppointments = container.resolve(
            ListUserAppointmentsService,
        );

        const appointments = await listUserrAppointments.execute({
            user_id,
            day: Number(day),
            month: Number(month),
            year: Number(year),
        });

        return response.json(appointments);
    }
}
