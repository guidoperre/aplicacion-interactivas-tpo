import {toast} from "react-toastify";

export const onPrivacyPolicyClicked = () => {
    showSuccessToast()
};

export const onTermsAndConditionsClicked = () => {
    showSuccessToast()
};

export const onSocialClicked = (url) => {
    showSuccessToast()
};

function showSuccessToast() {
    toast.info('En desarrollo 🔨👷', {
        position: toast.POSITION.BOTTOM_LEFT
    });
}
