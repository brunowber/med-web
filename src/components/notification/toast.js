import notify from 'devextreme/ui/notify';

const ToastType = ["success", "error", "info", "warning"]

export default function Toast(text, type, time) {
    notify(text, ToastType[type], time);
}