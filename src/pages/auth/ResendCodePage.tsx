import React, { useEffect } from 'react';
import { useUrlQuery } from 'hooks/useUrlQuery';
import { requestConfirmEmail } from 'services/requests';

export const ResendCodePage = () => {
  const query = useUrlQuery();
  const email = query.get('email');

  useEffect(() => {
    if (!email) return;
    (async () => {
      try {
        await requestConfirmEmail({ email });
        alert('인증번호가 전송되었습니다.');
      } catch (error) {
        alert('인증번호 전송에 실패하였습니다.');
      }
      window.close();
    })();
  }, [email]);

  return <div></div>;
};
