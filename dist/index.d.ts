import { DialogHTMLAttributes } from 'react';
interface Props extends DialogHTMLAttributes<HTMLDialogElement> {
    isModalOpen: boolean;
    closeModal: () => void;
}
declare function ChexModal({ isModalOpen, closeModal, ...props }: Props): JSX.Element;
export default ChexModal;
