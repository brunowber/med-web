import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
    Toolbar,
    DateNavigator,
    TodayButton,
    ViewSwitcher,
    Scheduler,
    Appointments,
    AppointmentForm,
    AppointmentTooltip,
    WeekView,
    DayView,
    EditRecurrenceMenu,
    AllDayPanel,
    ConfirmationDialog,
    
} from '@devexpress/dx-react-scheduler-material-ui';

const CustomAppointment = ({ style, ...restProps }) => {
    if (restProps.data.location === "Room 1")
        return (
            <Appointments.Appointment
                {...restProps}
                style={{ ...style, backgroundColor: "blue" }}
                className="CLASS_ROOM1"
                data={restProps.data.location}

            />
        );
    if (restProps.data.location === "Room 2")
        return (
            <Appointments.Appointment
                {...restProps}
                style={{ ...style, backgroundColor: "green" }}
                className="CLASS_ROOM2"
            />
        );
    return (
        <Appointments.Appointment
            {...restProps}
            style={style}
            className="CLASS_ROOM3"
        />
    );
};

const AppointmentContent = ({ style, ...restProps }) => {
    return (
        <Appointments.AppointmentContent {...restProps}>
            <div className={restProps.container}>
                <div>{restProps.data.title}</div>
                <div>{restProps.data.location}</div>
                <div>{restProps.data.startDate.getHours()}:{restProps.data.startDate.getMinutes()} - {restProps.data.endDate.getHours()}:{restProps.data.endDate.getMinutes()}</div>
                <div>Paciente : {restProps.data.paciente}</div>
                <div>Profissional : {restProps.data.profissional}</div>
            </div>
        </Appointments.AppointmentContent>
    );
};

const AppointmentContentForm = ({ ...restProps }) => {
    return (
        <AppointmentForm.BasicLayout {...restProps}>
            {console.log(restProps)}
            {/* <div className={restProps.container}> */}
    <div>{restProps.appointmentData[0].paciente}</div>

                {/* <div>{restProps.data.title}</div>
                <div>{restProps.data.location}</div>
                <div>{restProps.data.startDate.getHours()}:{restProps.data.startDate.getMinutes()} - {restProps.data.endDate.getHours()}:{restProps.data.endDate.getMinutes()}</div>
                <div>Paciente : {restProps.data.paciente}</div>
                <div>Profissional : {restProps.data.profissional}</div> */}
            {/* </div> */}
        </AppointmentForm.BasicLayout>
    );
};


export const appointments = [
    {
        title: "Teste",
        startDate: new Date(2020, 0, 31, 9, 30),
        endDate: new Date(2020, 0, 31, 11, 30),
        id: 0,
        location: "Room 1",
        paciente: "Fulano",
        profissional: "Ciclano"
    },
]
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
export default class Agenda extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: appointments,
            currentDate: date,

            addedAppointment: {},
            appointmentChanges: {},
            editingAppointmentId: undefined,

            locale: 'pt-BR',
        };

        this.commitChanges = this.commitChanges.bind(this);
        this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
        this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
        this.changeEditingAppointmentId = this.changeEditingAppointmentId.bind(this);
        this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
    }


    changeAddedAppointment(addedAppointment) {
        this.setState({ addedAppointment });
    }

    changeAppointmentChanges(appointmentChanges) {
        this.setState({ appointmentChanges });
    }

    changeEditingAppointmentId(editingAppointmentId) {
        this.setState({ editingAppointmentId });
    }

    commitChanges({ added, changed, deleted }) {
        this.setState((state) => {
            let { data } = state;
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
            }
            if (changed) {
                data = data.map(appointment => (
                    changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
            }
            if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
            }
            return { data };
        });
    }

    render() {
        const {
            currentDate, data,

            addedAppointment, appointmentChanges, editingAppointmentId,

            locale
        } = this.state;

        return (
            <Paper>
                <Scheduler
                    data={data}
                    height={660}
                    locale={locale}
                >
                    <ViewState
                        currentDate={currentDate}
                        onCurrentDateChange={this.currentDateChange}
                        defaultCurrentViewName="Week"
                    />
                    <EditingState
                        onCommitChanges={this.commitChanges}

                        addedAppointment={addedAppointment}
                        onAddedAppointmentChange={this.changeAddedAppointment}

                        appointmentChanges={appointmentChanges}
                        onAppointmentChangesChange={this.changeAppointmentChanges}

                        editingAppointmentId={editingAppointmentId}
                        onEditingAppointmentIdChange={this.changeEditingAppointmentId}
                    />
                    <DayView
                        startDayHour={8}
                        endDayHour={18}
                        displayName={"Dia"}
                    />
                    <WeekView
                        startDayHour={8}
                        endDayHour={18}
                        displayName={"Semana"}
                    />
                    <Toolbar />
                    <ViewSwitcher />
                    <DateNavigator />
                    <TodayButton
                        messages={{ today: "Hoje" }} />
                    <AllDayPanel
                        messages={{ allDay: 'Dia todo' }} />
                    <EditRecurrenceMenu />
                    <ConfirmationDialog
                        messages={{
                            confirmDeleteMessage: "Você gostaria mesmo de deletar esse agendamento?",
                            confirmCancelMessage: "Descartar mudanças não salvas?",
                            deleteButton: "Apagar",
                            cancelButton: "Cancelar",
                            discardButton: "Descartar"
                        }} />
                    <Appointments
                        // appointmentComponent={CustomAppointment}
                        appointmentContentComponent={AppointmentContent}
                    />
                    <AppointmentTooltip
                        showOpenButton
                        showDeleteButton
                        // contentComponent = {CustomAppointment}

                    />
                    <AppointmentForm 
                    appointmentData = {this.state.data}
                    basicLayoutComponent = {AppointmentContentForm}
                    // textEditorComponent = {null}
                    // appointmentContentForm = {AppointmentContentForm}
                    />
                </Scheduler>
            </Paper>

        );
    }
}