import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const errorNotify = (error) => {
  toast.error(error, {
    position: 'top-center',
    autoClose: 2000,
    toastId: 1,
  });

  toast.clearWaitingQueue({ containerId: 1 });
};

export const successNotify = (message) => {
  toast.success(message, {
    position: 'top-center',
    autoClose: 2000,
    toastId: 1,
  });

  toast.clearWaitingQueue({ containerId: 1 });
};
