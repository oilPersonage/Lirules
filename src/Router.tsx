// import { useEffect } from "react"
// import { webApi } from "./utils/axios"

import { Landing } from '@pages/landing';

export function Router() {
  // useEffect(() => {
  //   webApi.post('/user', {
  //     "email": "andre-wsa1@yandex.ru",
  //     "password": "qwerty123",
  //     "name": "Andrei",
  //     "language": "ru",
  //     "platform": "desktop",
  //     "timezone": 3,
  //     "deviceId": "1123"
  //   })
  //  }, [])

  return (
    <div>
      <Landing />
    </div>
  );
}
