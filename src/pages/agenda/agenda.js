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
    Resources,

} from '@devexpress/dx-react-scheduler-material-ui';

const messagesAppointmentForm = {
    moreInformationLabel: '',
    detailsLabel:"Título",
    allDayLabel:"Dia todo",
    repeatLabel:"Repetir",

}

const TextEditor = (props) => {
    if (props.type === "multilineTextEditor"){
        return null;
    } return <AppointmentForm.TextEditor {...props}/>
}

function findArrayElementByTitle(array, title) {
    let name = (array) = array.find((element) => {
        if (element.id == title) {
            return element
        }
    })
    if (name != null){
        return name.text;
    }
    return "";
}

const AppointmentContent = ({ style, ...restProps }) => {
    return (
        <Appointments.AppointmentContent {...restProps}>
            <div className={restProps.container}>
                <div>{restProps.data.title}</div>
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
                value = {appointmentData.profissionalId}
                onValueChange = {onProfissionalFieldChange}
                availableOptions = {profissional}
                type = "outlinedSelect"
            />
        </AppointmentForm.BasicLayout>
    )
}

export const paciente = [
    {
        text: 'Samantha Bright',
        id: 1,
        color: '#727bd2'
    }, {
        text: 'John Heart',
        id: 2,
        color: '#32c9ed'
    }, {
        text: 'Todd Hoffman',
        id: 3,
        color: '#2a7ee4'
    }, {
        text: 'Sandra Johnson',
        id: 4,
        color: '#7b49d3'
    }
];

export const profissional = [
    {
        text: 'Zé',
        id: 1,
        color: '#727bd2'
    }, {
        text: 'José',
        id: 2,
        color: '#32c9ed'
    }, {
        text: 'Bruno',
        id: 3,
        color: '#2a7ee4'
    }, {
        text: 'Weber',
        id: 4,
        color: '#7b49d3'
    }
];

export const rooms = [
    {
        text: 'Room 1',
        id: 1,
        color: '#00af2c'
    }, {
        text: 'Room 2',
        id: 2,
        color: '#56ca85'
    }, {
        text: 'Room 3',
        id: 3,
        color: '#8ecd3c'
    }
];
export const appointments = [
    {
        title: "Teste",
        startDate: new Date(2020, 1, 2, 9, 30),
        endDate: new Date(2020, 1, 2, 11, 30),
        id: 0,
        locationId: 1,
        pacienteId: 1,
        profissionalId: 1,
        profissional: "Bruno Weber",
        paciente: "Luan da Silva",
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

            resources: [
                {
                    fieldName: 'locationId',
                    title: 'Room',
                    instances: rooms,
                },
                {
                    fieldName: 'profissionalId',
                    title: 'Profissional',
                    instances: profissional,
                },
                {
                    fieldName: 'pacienteId',
                    title: 'Paciente',
                    instances: paciente,
                },
            ],
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
            currentDate, data, resources,

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
                    <Toolbar />
                    <ViewSwitcher />
                    <DateNavigator />
                    <TodayButton
                        messages={{ today: "Hoje" }} />
                    <AllDayPanel
                        messages={{ allDay: 'Dia todo' }} />
                    {/* <EditRecurrenceMenu /> */}
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
                    />
                    <AppointmentForm
                        basicLayoutComponent={basicLayout}
                    textEditorComponent = {TextEditor}
                    messages = {messagesAppointmentForm}

                    />

                    {/* <Resources
                        data={resources}
                        mainResourceName="profissionalId"
                    /> */}
                </Scheduler>
            </Paper>

        );
    }
}