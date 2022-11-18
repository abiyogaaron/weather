import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

type BodyType = object | string | undefined;
type MethodType = 'GET' | 'POST';

export interface HttpReqCfg extends AxiosRequestConfig {
  data?: BodyType;
  method: MethodType;
}

export default function httpCall<OK = any>(url: string, config: HttpReqCfg): Promise<OK> {
  return new Promise<OK>((resolve, reject) => {
    axios(url, config)
      .then((resp: AxiosResponse<OK>) => {
        resolve(resp.data);
      })
      .catch((err: AxiosError<any>) => {
        reject(err);
      });
  });
}
