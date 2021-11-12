import { useState } from 'react';
import { UNKNOWN_ERROR_MESSAGE } from 'constants/messages';
import { getAPIErrorMessage } from 'utils/error';

export default function useErrorMessage() {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleError = (error: any) => {
    console.log('handleError');
    if (error?.response?.data?.code) {
      const errorCode = error.response?.data?.code;
      setErrorMessage(getAPIErrorMessage(errorCode));
    } else {
      setErrorMessage(UNKNOWN_ERROR_MESSAGE);
    }
  };

  return { errorMessage, handleError };
}
