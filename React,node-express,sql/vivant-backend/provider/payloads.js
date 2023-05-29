
const bot = {
    meta_data: {},
    type: 'bot',
    text: ``,
    subText: '',
    inputDataType: "",
    note: "",
    description: "",
    option: [],
    display: [],

}

exports.payload = {
    initial: {
        ...bot,
        text: `Hi, Welcome to Motivity! I'm your Personal Assistant!`,
        inputDataType: "button",
        option: [{ name: 'Daily Status' },
        { name: 'Leave' },
        { name: 'Attendance and Timesheet' }],
        display: ['name']
    },
    dailyStatus: {
        ...bot,
        text: `Please choose options`,
        inputDataType: "button",
        option: [{
            name: 'show last 7 days', meta_data: {
                type: "Daily status History", day: 7
            }
        },
        { name: 'Enter daily status', meta_data: {} }],
        display: ['name']
    },
    dailyStatusEnterOrUpdate: {
        ...bot,
        text: `Please choose options`,
        inputDataType: "Daily_status_enter",
    },
    dataTable: {
        ...bot,
        inputDataType: "Table",
    },
    underConstruction: {
        ...bot,
        text: `Under construction`,
    },
    dailystatusHistory: {
        ...bot,
        text: `Daily status History`,
        inputDataType: "Daily_status_history",
    },
    attendanceandTimesheet: {
        ...bot,
        text: `Please select`,
        inputDataType: "button",
        option: [{ name: 'Attendance' },
        { name: 'Timesheet' }],
        display: ['name']
    },
    timeSheet: {
        ...bot,
        inputDataType: "timeSheet",
    }

}