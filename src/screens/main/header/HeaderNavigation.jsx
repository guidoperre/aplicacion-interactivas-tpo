import {toast} from "react-toastify";

export const onLoginClicked = () => {
    showSuccessToast()
};

function showSuccessToast() {
    toast.info('En desarrollo 🔨👷', {
        position: toast.POSITION.BOTTOM_LEFT
    });
}
