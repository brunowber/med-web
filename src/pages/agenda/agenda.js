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
    MonthView,
    WeekView,
    DayView,
    EditRecurrenceMenu,
    AllDayPanel,
    ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import { profissional, appointments } from "../../data";
import { messagesAppointmentForm, messagesConfirmationDialog } from "./mensagens"

const TextEditor = (props) => {
    if (props.type === "multilineTextEditor") {
        return null;
    } return <AppointmentForm.TextEditor {...props} />
}

function findArrayElementByTitle(lista, title) {
    let name = lista.filter(element => element.id === title)
    .map((name) => {console.log(name); return name})
    console.log(name)
    if (name != null) {
        return name.text;
    }
    return "";
}

const AppointmentContent = ({ style, ...restProps }) => {
    return (
        <Appointments.AppointmentContent {...restProps}>
            <div className={restProps.container}>
                <div><b>{restProps.data.title}</b></div>
                <div>{restProps.data.location}</div>
                <div>{restProps.data.startDate.getHours()}:{restProps.data.startDate.getMinutes()} - {restProps.data.endDate.getHours()}:{restProps.data.endDate.getMinutes()}</div>
                <div>Paciente : {restProps.data.paciente}</div>
                {/* <div>Profissional : {restProps.data.profissional}</div> */}
                {/* <div>Paciente : {findArrayElementByTitle(paciente, restProps.data.pacienteId)}</div> */}
                <div>Profissional : {findArrayElementByTitle(profissional, restProps.data.profissionalId)}</div>

            </div>
        </Appointments.AppointmentContent>
    );
};

const basicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
    const onPacienteFieldChange = (nextValue) => {
        onFieldChange({ paciente: nextValue });
    }

    const onProfissionalFieldChange = (nextValue) => {
        onFieldChange({ profissionalId: nextValue });
    }

    return (
        <AppointmentForm.BasicLayout
            appointmentData={appointmentData}
            onFieldChange={onFieldChange}
            {...restProps}>
            <AppointmentForm.Label
                text="Paciente"
                type="title" />
            <AppointmentForm.TextEditor
                value={appointmentData.paciente}
                onValueChange={onPacienteFieldChange}
                placeholder="Paciente" />

            <AppointmentForm.Label
                text="Profissional"
                type="title" />
            <AppointmentForm.Select
                value={appointmentData.profissionalId}
                onValueChange={onProfissionalFieldChange}
                availableOptions={profissional}
                type="outlinedSelect"
            />
        </AppointmentForm.BasicLayout>
    )
}

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
                    height={700}
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
                    <EditRecurrenceMenu />
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
                    <MonthView
                        displayName={"Mês"}
                    />
                    <Toolbar />
                    <ViewSwitcher />
                    <DateNavigator />
                    <TodayButton
                        messages={{ today: "Hoje" }}
                    />
                    <AllDayPanel
                        messages={{ allDay: 'Dia todo' }}
                    />
                    <ConfirmationDialog
                        messages={messagesConfirmationDialog}
                    />
                    <Appointments
                        appointmentContentComponent={AppointmentContent}
                    />
                    <AppointmentTooltip
                        showOpenButton
                        showDeleteButton
                    />
                    <AppointmentForm
                        basicLayoutComponent={basicLayout}
                        textEditorComponent={TextEditor}
                        messages={messagesAppointmentForm}

                    />
                </Scheduler>
            </Paper>

        );
    }
}